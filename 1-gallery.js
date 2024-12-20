import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as s}from"./assets/vendor-C0lvKic3.js";const p=[{preview:"../img/arcad/img-1_400.jpg",original:"../img/arcad/img-1.jpg",description:"Цифри в моделі генератора біля?",ansId:"ans-01"},{preview:"../img/arcad/img-2_400.jpg",original:"../img/arcad/img-2.jpg",description:"Кількість сходинок біля?",ansId:"ans-02"},{preview:"../img/arcad/img-3_400.jpg",original:"../img/arcad/img-3.jpg",description:"З цього об’єкту дуже красивий вид. На скількох опорах тримається дах?",ansId:"ans-03"},{preview:"../img/arcad/img-4_400.jpg",original:"../img/arcad/img-4.jpg",description:"кількість маленьких віконець біля",ansId:"ans-04"},{preview:"../img/arcad/img-5_400.jpg",original:"../img/arcad/img-5.jpg",description:"Скільки блакитних шарів",ansId:"ans-05"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing",ansId:"ans-06"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows",ansId:"ans-07"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape",ansId:"ans-08"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea",ansId:"ans-09"}],l=p.reduce((a,{preview:e,original:i,description:n,ansId:r})=>a+=`
        <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${e}"
      data-source="${i}"
      alt="${n}"
    />
  </a>
    <label for="${r}"></label>${n}:</label>
  <input type="number" id="${r}" name="quantity">
 </li>
        `,""),c=document.querySelector(".gallery");c.insertAdjacentHTML("beforeend",l);new s(".gallery .gallery-link",{captions:!0,captionType:"html",captionsData:"alt",captionDelay:250});let t={};const o=document.querySelector(".feedback-form");localStorage.getItem("answers-state")&&(t=JSON.parse(localStorage.getItem("answers-state")));for(const[a,e]of Object.entries(t))document.querySelector(`#${a}`).value=e;o.addEventListener("input",g);o.addEventListener("submit",d);function g(a){t[a.target.id]=a.target.value.trim(),localStorage.setItem("answers-state",JSON.stringify(t))}function d(a){if(a.preventDefault(),Object.keys(t).length!==9){alert("Fill please all fields");return}let e=0;Object.values(t).forEach(i=>{e+=Number(i)}),m.textContent=e}const m=document.querySelector("#total-rez");
//# sourceMappingURL=1-gallery.js.map
