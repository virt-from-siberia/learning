class Header {
  constructor(img, h1, h2) {
    this.src = img;
    (this.h1 = h1), (this.h2 = h2);
  }
  render(target, titleH1, titleH2, img) {
    let out = "";
    out = `
        <img src="${img}" alt="">
        <h1>${titleH1}</h1>
        <h2>${titleH2}</h2>
        `;
    target.innerHTML = out;
  }
}
const img = "icon-react.png";

let header = new Header(img, "hello", "world");
const target = document.querySelector("header");
const titleH1 = "hello";
const titleH2 = "World";

header.render(target, titleH1, titleH2, img);


