// Configurações
const ADSENSE_CLIENT = "ca-pub-XXXXXXX";
const FALLBACK_BANNER_URL = "/ChatFluent/img/banner-provisorio.png"; // Caminho da sua imagem

function loadAdsenseScript() {
  if (!document.querySelector("#adsense-script")) {
    const script = document.createElement("script");
    script.id = "adsense-script";
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + ADSENSE_CLIENT;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }
}

function createFallbackBanner() {
  const link = document.createElement("a");
  link.href = "/ChatFluent/pt/index.html"; // Link para onde o banner aponta
  
  const img = document.createElement("img");
  img.src = FALLBACK_BANNER_URL;
  img.alt = "Pratique Inglês no ChatFluent";
  img.style.width = "100%";
  img.style.maxWidth = "1000px";
  img.style.borderRadius = "15px";
  img.style.display = "block";
  img.style.margin = "0 auto";

  link.appendChild(img);
  return link;
}

function initAds() {
  loadAdsenseScript();

  document.querySelectorAll(".ads-slot").forEach(slot => {
    // 1. Adicionamos o banner provisório primeiro
    const fallback = createFallbackBanner();
    slot.appendChild(fallback);

    // 2. Criamos o slot do AdSense
    const ad = document.createElement("ins");
    ad.className = "adsbygoogle";
    ad.style.display = "block";
    ad.setAttribute("data-ad-client", ADSENSE_CLIENT);
    ad.setAttribute("data-ad-slot", "1234567890"); 
    ad.setAttribute("data-ad-format", "auto");
    ad.setAttribute("data-full-width-responsive", "true");

    slot.appendChild(ad);

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      // Se o anúncio carregar, o AdSense geralmente preenche o slot.
      // O banner ficará embaixo ou pode ser escondido via CSS se necessário.
    } catch (e) {
      console.log("AdSense offline - Banner visível");
    }
  });
}

window.addEventListener("load", initAds);