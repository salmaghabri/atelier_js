const texte = document.querySelector('#text');
const couleur = document.querySelector('#couleur');
const size = document.querySelector('#size');
const selected=document.querySelector('#select');
couleur.addEventListener('input', ()=>{

texte.style.color=`${couleur.value}`;


});
size.addEventListener('input', ()=>{

    texte.style.fontSize=`${size.value}px`;
    
    });

selected.addEventListener('input', ()=>{
    console.log(selected.value);
    texte.style.fontFamily=`${selected.value}`;
    });



