var t=document.querySelector(".filter__slider"),i=document.querySelector(".filter__slider-input--min"),r=document.querySelector(".filter__slider-input--max");r.value=900;noUiSlider.create(t,{start:[0,900],connect:!0,range:{min:0,max:1e3},format:{to:function(e){return e.toFixed(0)},from:function(e){return parseFloat(e)}}});t.noUiSlider.on("update",()=>{i.value=t.noUiSlider.get()[0],r.value=t.noUiSlider.get()[1]});i.addEventListener("input",e=>{let n=e.target.value;t.noUiSlider.set([n,r.value])});r.addEventListener("input",e=>{let n=e.target.value;t.noUiSlider.set([i.value,n])});
