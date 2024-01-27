const articles = [
  {
    title: "Lahan Basah",
    img: "assets/images/lahan-basah-1.jpg",
    text: `Lahan basah adalah luasan tanah depresi yang akan selalu tergenang air karena kondisi tanah yang minim daya serap. Lahan basah memiliki fungsi sebagai penjaga ekosistem, filtrasi air, dan manfaat ekologis bagi makhluk hidup.`,
  },
  {
    title: "Beton Berpori",
    img: "assets/images/beton-berpori-1.jpg",
    text: `Beton berpori merupakan jenis beton jalanan dengan pori-pori yang mampu mengalirkan air ke bawah beton (tanah), sehingga air dapat menyerap melalui beton. Beton berpori dapat ditemukan di bantaran sungai dan beberapa Taman Maju Bersama.`,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const contentArticlesEl = document.getElementById("content-articles");

  for (const article of articles) {
    const articleEl = document.createElement("article");
    articleEl.className = "card";

    const articleTitleEl = document.createElement("h3");
    articleTitleEl.textContent = article.title;

    const articleImgEl = document.createElement("img");
    articleImgEl.setAttribute("src", article.img);
    articleImgEl.setAttribute("alt", article.title);
    articleImgEl.className = "card-img";

    const articleTextEl = document.createElement("p");
    articleTextEl.textContent = article.text;
    articleTextEl.className = "card-text";

    const articleContentEl = document.createElement("div");
    articleContentEl.className = "card-content flex";
    articleContentEl.appendChild(articleImgEl);
    articleContentEl.appendChild(articleTextEl);

    articleEl.appendChild(articleTitleEl);
    articleEl.appendChild(articleContentEl);

    contentArticlesEl.appendChild(articleEl);
  }
});

const hamburgerMenu = document.getElementById("hamburger-menu");
const nav = document.getElementById("nav");

hamburgerMenu.onclick = showNav;

function showNav() {
  if(nav.className === 'right') {
    hamburgerMenu.classList.replace('fa-bars', 'fa-xmark');
    nav.classList.add('show-nav');
  } else {
    hamburgerMenu.classList.replace('fa-xmark', 'fa-bars');
    nav.classList.remove('show-nav');
  }
}
