import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as p}from"./assets/vendor-C0lvKic3.js";const r=[{preview:"https://i.ibb.co/n0NDPdW/img-1-400.jpg",original:"https://i.ibb.co/7Q9zHgb/img-1.jpg",description:"Цифри в моделі генератора біля?",ansId:"ans-01"},{preview:"https://i.ibb.co/pjbvCv0/img-2-400.jpg",original:"https://i.ibb.co/S5bfh7v/img-2.jpg",description:"Кількість сходинок біля?",ansId:"ans-02"},{preview:"https://i.ibb.co/vstPzTM/img-3-400.jpg",original:"https://i.ibb.co/SV9c53Z/img-3.jpg",description:"З цього об’єкту дуже красивий вид. На скількох опорах тримається дах?",ansId:"ans-03"},{preview:"https://i.ibb.co/JRCTx7X/img-4-400.jpg",original:"https://i.ibb.co/ZBKzvXX/img-4.jpg",description:"кількість маленьких віконець біля",ansId:"ans-04"},{preview:"https://i.ibb.co/G959HYz/img-5-400.jpg",original:"https://i.ibb.co/f4km8g1/img-5.jpg",description:"Скільки блакитних шарів",ansId:"ans-05"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing",ansId:"ans-06"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows",ansId:"ans-07"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape",ansId:"ans-08"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea",ansId:"ans-09"}],l=r.reduce((t,{preview:e,original:i,description:o,ansId:n})=>t+=`
        <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${e}"
      data-source="${i}"
      alt="${o}"
    />
  </a>
    <label for="${n}">${o}:</label>
  <input type="number" id="${n}" name="quantity">
 </li>
        `,""),c=document.querySelector(".gallery");c.insertAdjacentHTML("beforeend",l);new p(".gallery .gallery-link",{captions:!0,captionType:"html",captionsData:"alt",captionDelay:250});let a={};const s=document.querySelector(".feedback-form");localStorage.getItem("answers-state")&&(a=JSON.parse(localStorage.getItem("answers-state")));for(const[t,e]of Object.entries(a))document.querySelector(`#${t}`).value=e;s.addEventListener("input",g);s.addEventListener("submit",d);function g(t){a[t.target.id]=t.target.value.trim(),localStorage.setItem("answers-state",JSON.stringify(a))}function d(t){if(t.preventDefault(),Object.keys(a).length!==9){alert("Fill please all fields");return}let e=0;Object.values(a).forEach(i=>{e+=Number(i)}),m.textContent=e}const m=document.querySelector("#total-rez");
//# sourceMappingURL=1-gallery.js.map
