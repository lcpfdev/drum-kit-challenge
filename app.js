
const kick = new Audio("kick.wav") 
const kButton = document.getElementById('kickButton')
const snare = new Audio("snare.wav");
const sButton = document.getElementById('snareButton')
const hat = new Audio('hat.wav');
const hButton = document.getElementById('hatButton')

kButton.addEventListener('click', (event) => {
  kick.play()
 
})

document.addEventListener('keydown', (event) => {
     if(event.keyCode == 65) {
         kick.play()
     } 
  })



sButton.addEventListener('click', (event) => {
    snare.play()
})


document.addEventListener('keydown', (event) => {

   if(event.keyCode == 83) {
       snare.play()
   }


})

hButton.addEventListener('click', (event) => {
    hat.play()
})

document.addEventListener('keydown', (event) => {
   if(event.keyCode == 68) {
       hat.play()
   }

})








