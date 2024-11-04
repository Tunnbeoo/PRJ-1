var marginLeft = 0;
document.querySelector('.next').addEventListener('click',()=>{
  marginLeft -= 720; 
  if(marginLeft < -(720*6)){
    marginLeft = 0;
  }
  document.querySelector('.slide_main').style.marginLeft = marginLeft + `px`
})
document.querySelector('.prev').addEventListener('click',()=>{
  marginLeft += 720; 
  if(marginLeft > 0){
    marginLeft = -(720*6);
  }
  document.querySelector('.slide_main').style.marginLeft = marginLeft + `px`
})


var buttonDN = document.querySelector(".dangnhap1")
var loginForm = document.querySelector(".form-login")
var closeX = document.querySelector(".form-close")
buttonDN.addEventListener('click', () => {
    loginForm.classList.add('active')
})

closeX.addEventListener('click', () => {
    loginForm.classList.remove('active')
})


// var buttonDN = document.querySelector(".dangky001")
// var loginForm = document.querySelector(".form-login")
// var closeX = document.querySelector(".form-close")

// buttonDN.addEventListener('click', () => {
//     loginForm.classList.add('active')
// })

// closeX.addEventListener('click', () => {
//     loginForm.classList.remove('active')
// })

// buttonDN.addEventListener('click', () => {
//     loginForm.classList.add('active')
// })

// closeX.addEventListener('click', () => {
//     loginForm.classList.remove('active')
// })