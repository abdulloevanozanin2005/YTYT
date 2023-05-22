function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


let testBlock = document.querySelector('.questions')
let forStart = document.querySelector('.start-test');
let blockButton = document.querySelector('.block1-button');
let testBlock2 = document.querySelector('.questions-2')
let forSelect = document.querySelector('#forSelect')
let forChoose = document.querySelector('.block2-button')
let option1 = document.querySelector('.option-1')
let option2 = document.querySelector('.option-2')
let option3 = document.querySelector('.option-3')
let k = null;

forChoose.addEventListener('click',()=>{
    if(forSelect.value == 1){
        option1.style.display = 'block';
        option1.style.position = 'absolute';
        testBlock2.style.display = 'none';    
} 
    if(forSelect.value == 2){
        option2.style.display = 'block';
        option2.style.position = 'absolute';
        testBlock2.style.display = 'none'; 
        k++;   
} 
    if(forSelect.value == 3){
        option3.style.display = 'block';
        option3.style.position = 'absolute';
        testBlock2.style.display = 'none';    
} 
})


blockButton.addEventListener('click',()=>{
   testBlock2.style.display = 'block';
   testBlock2.style.position = 'absolute';
   testBlock.style.display = 'none';
})

forStart.addEventListener('click',()=>{
   testBlock.style.display = 'block';
   testBlock.style.position = 'absolute';
})

