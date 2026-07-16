const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const docxPath = path.join(__dirname, '../ChatFluent.docx');
const buffer = fs.readFileSync(docxPath);

let offset = 0;
let documentXml = null;

while (offset < buffer.length - 30) {
    const signature = buffer.readUInt32LE(offset);
    if (signature === 0x04034b50) { // Local file header signature
        const filenameLength = buffer.readUInt16LE(offset + 26);
        const extraFieldLength = buffer.readUInt16LE(offset + 28);
        const filename = buffer.toString('utf8', offset + 30, offset + 30 + filenameLength);
        
        const compressionMethod = buffer.readUInt16LE(offset + 8);
        const compressedSize = buffer.readUInt32LE(offset + 18);
        const uncompressedSize = buffer.readUInt32LE(offset + 22);
        
        const dataOffset = offset + 30 + filenameLength + extraFieldLength;
        
        if (filename === 'word/document.xml') {
            const compressedData = buffer.slice(dataOffset, dataOffset + compressedSize);
            if (compressionMethod === 8) { // DEFLATE
                documentXml = zlib.inflateRawSync(compressedData).toString('utf8');
            } else {
                documentXml = compressedData.toString('utf8');
            }
            break;
        }
        offset = dataOffset + compressedSize;
    } else {
        offset++;
    }
}

if (!documentXml) {
    console.log("Could not find word/document.xml in docx.");
    process.exit(1);
}

// Strip XML tags to get plain text
const text = documentXml.replace(/<[^>]+>/g, (match) => {
    if (match === '<w:p>' || match === '</w:p>' || match === '<w:br/>') {
        return '\n';
    }
    return '';
}).replace(/\n+/g, '\n').trim();

// Write the result to a text file in the workspace
fs.writeFileSync(path.join(__dirname, '../ChatFluentDoc.txt'), text, 'utf8');
console.log("Successfully extracted text to ChatFluentDoc.txt");
