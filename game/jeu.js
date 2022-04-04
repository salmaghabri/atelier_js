const ul=document.querySelector('ul');
const wlcm=document.querySelector('.welcome')
ul.addEventListener('click', function(e){
    
let level=e.target.textContent; 
wlcm.textContent=`u were on level ${level}`;
jeux(level); 


});


const jeux =function(l){
    let n=4-l;
    const x=Math.round(Math.random()*10); 
    console.log(x);
    let reponse=-1; 
while((n--)&& (reponse!=x)){
    
    let reponse=window.prompt('guess a number in [0 , 10] ');
    if(reponse!=x){
        alert('wrong anwser '); 
    }else{ alert('bravo ! '); 
    return; 

}

   
}

alert('bad luck! ')


}