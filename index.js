import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const u=new Audio("https://fs.meloua.com/dl/1140f85a3aefa6c7466b0a957ac76301/shpilyasti-kobzari-jingle-bells-(meloua.com)/1004918.mp3");function p(e){const s=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),i=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:c,minutes:l,seconds:i}}const m=document.querySelector(".field span[data-days]"),f=document.querySelector(".field span[data-hours]"),y=document.querySelector(".field span[data-minutes]"),w=document.querySelector(".field span[data-seconds]");function n(e){return String(e).padStart(2,"0")}function g(e){const t=setInterval(()=>{const o=e-Date.now(),{days:a,hours:r,minutes:s,seconds:c}=p(o);m.textContent=n(a),f.textContent=n(r),y.textContent=n(s),w.textContent=n(c),o<1e3&&clearInterval(t)},1e3)}const h=new Date("2025-01-01T00:00:00");g(h);const d={open:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="eye-icon"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" /></svg>',closed:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="eye-icon"><path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" /><path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" /><path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" /></svg>'};function v(){const e=document.querySelector(".toggle-button");e&&e.addEventListener("click",S)}function S(){const e=document.querySelector("#password-field"),t=document.querySelector(".toggle-button");if(!e||!t)return;t.classList.toggle("open");const o=t.classList.contains("open");t.innerHTML=o?d.closed:d.open,e.type=o?"text":"password"}document.addEventListener("DOMContentLoaded",v);const M=document.querySelector(".bs");M.addEventListener("click",b);function b(e){e.preventDefault(),document.querySelector(".backdrop").classList.add("is-open"),document.querySelector("#password-field").setAttribute("value",localStorage.getItem("totalRes"))}const q=document.querySelector("#password-field"),L=document.querySelector(".modal-form");L.addEventListener("submit",x);function x(e){e.preventDefault(),q.value==="88898916"?window.location.replace("./2-brainstorm.html"):(alert("УПС, десь закралася прикра помилка :("),document.querySelector(".backdrop").classList.remove("is-open"))}u.play();
//# sourceMappingURL=index.js.map
