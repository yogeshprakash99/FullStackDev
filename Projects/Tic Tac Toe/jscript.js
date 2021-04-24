var restart = document.querySelector("#reset")
var box = document.querySelectorAll("td")

// To clear 
function clearScreen(){
    for(var i=0;i < box.length; i++)
    {
        box[i].textContent = '';
    }
}
restart.addEventListener('click',clearScreen)

//Function that changes the box content
function changeMarker(){
    if(this.textContent === ''){
        this.textContent = 'X';
    }
else if(this.textContent === 'X'){
    this.textContent = 'O';
}
else{
    this.textContent = '';
}
}
for(var i = 0; i< box.length; i++){
    box[i].addEventListener('click',changeMarker);
}