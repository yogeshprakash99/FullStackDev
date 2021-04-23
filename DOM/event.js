var headerOne = document.querySelector('#one')
var headerTwo = document.querySelector('#two')
var headerThree = document.querySelector('#three')

headerOne.addEventListener('mouseover',function(){
    headerOne.textContent = "Mouse currently Over";
    headerOne.style.color = 'red';
  })
  headerOne.addEventListener('mouseout',function(){
    headerOne.textContent = "Mouse currently out";
    headerOne.style.color = 'blue';
  })
  headerTwo.addEventListener('click',function(){
    headerTwo.textContent = "Clicked!";
    headerTwo.style.color = 'red';
  })
  headerThree.addEventListener('dblclick',function(){
    headerThree.textContent = "Double Clicked";
    headerThree.style.color = 'green';
  })