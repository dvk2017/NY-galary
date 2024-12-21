import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as r}from"./assets/vendor-C0lvKic3.js";const o=[{preview:"https://i.ibb.co/n0NDPdW/img-1-400.jpg",original:"https://i.ibb.co/7Q9zHgb/img-1.jpg",description:"Цифри в моделі генератора біля?",ansId:"ans-01",trueAns:"165"},{preview:"https://i.ibb.co/pjbvCv0/img-2-400.jpg",original:"https://i.ibb.co/S5bfh7v/img-2.jpg",description:"Кількість сходинок біля?",ansId:"ans-02",trueAns:"5"},{preview:"https://i.ibb.co/vstPzTM/img-3-400.jpg",original:"https://i.ibb.co/SV9c53Z/img-3.jpg",description:"З цього об’єкту дуже красивий вид. На скількох опорах тримається дах?",ansId:"ans-03"},{preview:"https://i.ibb.co/JRCTx7X/img-4-400.jpg",original:"https://i.ibb.co/ZBKzvXX/img-4.jpg",description:"кількість маленьких віконець біля",ansId:"ans-04"},{preview:"https://i.ibb.co/G959HYz/img-5-400.jpg",original:"https://i.ibb.co/f4km8g1/img-5.jpg",description:"Скільки блакитних шарів",ansId:"ans-05"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing",ansId:"ans-06"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows",ansId:"ans-07"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape",ansId:"ans-08"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea",ansId:"ans-09"}],p=o.reduce((e,{preview:t,original:a,description:n,ansId:s})=>e+=`
        <li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${t}"
      data-source="${a}"
      alt="${n}"
    />
  </a>
    <label for="${s}">${n}:</label>
  <div class="answer-check">
    <input type="number" id="${s}" name="quantity">
    <div class="answer-icon"></div>
  </div>
 </li>
        `,""),l=document.querySelector(".gallery");l.insertAdjacentHTML("beforeend",p);new r(".gallery .gallery-link",{captions:!0,captionType:"html",captionsData:"alt",captionDelay:250});let i={};const c=document.querySelector(".feedback-form");localStorage.getItem("answers-state")&&(i=JSON.parse(localStorage.getItem("answers-state")));for(const[e,t]of Object.entries(i))document.querySelector(`#${e}`).value=t;c.addEventListener("input",g);c.addEventListener("submit",d);function g(e){i[e.target.id]=e.target.value.trim(),localStorage.setItem("answers-state",JSON.stringify(i))}function d(e){if(e.preventDefault(),Object.keys(i).length!==9){alert("Fill please all fields");return}let t=0;Object.values(i).forEach(a=>{t+=Number(a)}),m.textContent=t,b()}const m=document.querySelector("#total-rez");function b(){for(const[e,t]of Object.entries(i)){const a=document.querySelector(`#${e} + .answer-icon`),n=o.find(s=>s.ansId===e).trueAns===t?'<div class="material-icons" style="color: green">check</div>':'<div class="material-icons" style="color: red">close</div>';a.innerHTML=n}}
//# sourceMappingURL=1-gallery.js.map
