import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      *//* empty css                      */import{h as r}from"./assets/vendor-BYtNntMw.js";const a=new Audio("https://raw.githubusercontent.com/Yousuke777/sound/main/kansei.mp3");a.play();let t={};const c=document.querySelector(".feedback-form");localStorage.getItem("answersBs-state")&&(t=JSON.parse(localStorage.getItem("answersBs-state")));for(const[e,o]of Object.entries(t))document.querySelector(`#${e}`).value=o;c.addEventListener("input",i);function i(e){t[e.target.id]=e.target.value.trim(),localStorage.setItem("answersBs-state",JSON.stringify(t)),l()}function l(){for(const[e,o]of Object.entries(t)){const s=document.querySelector(`#${e} + .answer-icon`),n=document.getElementById(e).dataset.trueans===r(o).toString()?'<div class="material-icons" style="color: green">check</div>':'<div class="material-icons" style="color: red">close</div>';s.innerHTML=n}}const u=document.querySelector(".back-link");u.addEventListener("click",()=>localStorage.setItem("start",!0));
//# sourceMappingURL=2-brainstorm.js.map
