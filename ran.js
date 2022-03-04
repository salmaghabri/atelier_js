const ul=document.querySelector("ol");
ul.addEventListener("click",(e)=>{
 let   x=Math.round(Math.random()*255); 
 let   y=Math.round(Math.random()*255); 
 let   z=Math.round(Math.random()*255); 
e.target.style.backgroundColor=`rgb(${x},${y},${z})`;



}); 
