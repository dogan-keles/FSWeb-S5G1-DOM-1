const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const nav = document.querySelector(".container nav");
const navItems = document.querySelectorAll(".container nav a");
navItems.forEach((item, index) => {
  item.textContent = siteContent.nav[`nav-item-${index + 1}`];
  item.classList.toggle("italic");
});

const logomuz = document.querySelector("#logo-img");
logomuz.src = siteContent.images["logo-img"];

const logoCta = document.querySelector(".container .cta img");
logoCta.src = siteContent.images["cta-img"];

const baslikDom = document.querySelector(".cta .cta-text h1");
baslikDom.textContent = siteContent.cta.h1;

const butonCta = document.querySelector(".container .cta button");
butonCta.textContent = siteContent.cta.button;

const accentLogo = document.querySelector(
  ".container .main-content .middle-img"
);
accentLogo.src = siteContent.images["accent-img"];

const topContent = document.querySelector(
  ".container .main-content .top-content"
);
const topContentH4 = topContent.querySelectorAll("h4");
topContentH4[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
topContentH4[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

const topContentP = topContent.querySelectorAll("p");
topContentP[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
topContentP[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

const bottomContent = document.querySelector(
  ".container .main-content .bottom-content"
);
const bottomContentH4 = bottomContent.querySelectorAll("h4");
bottomContentH4[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
bottomContentH4[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
bottomContentH4[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const bottomContentP = bottomContent.querySelectorAll("p");
bottomContentP[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
bottomContentP[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
bottomContentP[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

const contact = document.querySelector(".container .contact");

const contactH4 = contact.querySelector("h4");
contactH4.textContent = siteContent.iletisim["iletişim-h4"];

const contactP = contact.querySelectorAll("p");
contactP[0].textContent = siteContent.iletisim.adres;
contactP[1].textContent = siteContent.iletisim.telefon;
contactP[2].textContent = siteContent.iletisim.email;

const footer = document.querySelector(".container footer a");
footer.textContent = siteContent.footer.copyright;
footer.classList.add("bold");
