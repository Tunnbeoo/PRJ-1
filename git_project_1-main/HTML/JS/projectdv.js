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