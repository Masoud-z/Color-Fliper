const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".input");
const btnColor = document.getElementById("btnColor");


btnColor.addEventListener('click',function(){
    const upperCaseColor = color.value.toUpperCase();
    const typedColor = upperCaseColor.split("");
    let valid = true;
   
    if(typedColor.length != 7){valid = false;}
    if(typedColor[0] != '#'){valid = false;}
    for(let i = 1; i < 7; i++){
         if(!hex.includes(typedColor[i])){ valid = false;}
    } 
    
    if(valid){
        document.body.style.backgroundColor = upperCaseColor;
    } else{
            color.value = "Not Valid!"
           
        }
        
    
});


btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i<6 ; i++){
        hexColor += hex[getReandonColor()];
        color.value = hexColor;
        document.body.style.backgroundColor = hexColor;
    }
});


function getReandonColor(){
    return Math.floor(Math.random() * hex.length);
}