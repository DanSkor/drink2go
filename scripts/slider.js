var r=document.querySelector(".slider__button--prev"),o=document.querySelector(".slider__button--next"),u=document.querySelector(".slider__list"),s=document.querySelectorAll(".slider__item"),c=document.querySelectorAll(".slider__pagination-button"),h=document.querySelector(".slider"),e=0,l=0;window.addEventListener("resize",_);var i=()=>{u.style.transform=`translateX(${-e*l}px)`},n=()=>{o.disabled=!1,r.disabled=!1,e===0&&(r.disabled=!0),e===s.length-1&&(o.disabled=!0)};n();var a=t=>{c.forEach(d=>d.classList.remove("slider__pagination-button--current")),c[t].classList.add("slider__pagination-button--current")},_=()=>{l=h.offsetWidth,u.style.width=l*s.length+"px",s.forEach(t=>t.style.width=l+"px"),i()};_();var f=()=>{e++,e>=s.length&&(e=s.length-1),n(),i(),a(e)},S=()=>{e--,e<0&&(e=0),n(),i(),a(e)};c.forEach((t,d)=>{t.addEventListener("click",()=>{e=d,i(),a(e),n()})});r.addEventListener("click",S);o.addEventListener("click",f);
