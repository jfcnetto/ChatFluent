// COLOQUE SEU ID AQUI
const ADSENSE_CLIENT = "ca-pub-XXXXXXX";

// código do script principal (carrega só 1 vez)
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

// cria bloco de anúncio
function createAdSlot() {
  const ad = document.createElement("ins");
  ad.className = "adsbygoogle";
  ad.style.display = "block";

  ad.setAttribute("data-ad-client", ADSENSE_CLIENT);
  ad.setAttribute("data-ad-slot", "1234567890"); // 🔴 TROCAR depois
  ad.setAttribute("data-ad-format", "auto");
  ad.setAttribute("data-full-width-responsive", "true");

  return ad;
}

// inicializa anúncios
function initAds() {
  loadAdsenseScript();

  document.querySelectorAll(".ads-slot").forEach(slot => {
    const ad = createAdSlot();
    slot.appendChild(ad);

    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("Adsense ainda não carregou");
    }
  });
}

// executa
window.addEventListener("load", initAds);