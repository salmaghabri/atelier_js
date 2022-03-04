const ul=document.querySelector('ul'); 
const nam=document.querySelector('#name');
const task=document.querySelector('#task');
const btn=document.querySelector('button'); 
let inputName=false;
let inputTask=false;

nam.addEventListener('input',()=>{inputName=true;
    if(inputName && inputTask){
        btn.style.backgroundColor='aqua';
    }


} );
task.addEventListener('input', ()=>{inputTask=true;
    if(inputName && inputTask){
        btn.style.backgroundColor='aqua';
    }


});

btn.addEventListener('click', ()=>{
    if(inputName && inputTask){
ul.innerHTML+=`<li>${nam.value}: ${task.value} <i class="fa-solid fa-apple-whole"></i></li>`;
nam.value='';
task.value='';
btn.style.backgroundColor='white';
inputName=false;
inputTask=false;}
});
const icon=document.querySelector('i'); 

ul.addEventListener('click', (e)=>{
    if(e.target.className=='fa-solid fa-apple-whole'){
e.target.parentNode.parentNode.removeChild(e.target.parentNode);

}

})

