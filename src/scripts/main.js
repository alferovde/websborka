import 'animate.css'

const burger = document.querySelector('.burger');
const menu_wrapper = document.querySelector('.mobile_menu__wrapper')

burger.addEventListener('click', () => {
    console.log(555);
  burger.classList.toggle('active');

  if(burger.classList.contains('active')){
menu_wrapper.classList.remove('visible')
  menu_wrapper.classList.add('animate__slideInDown')
  }else{
    menu_wrapper.classList.remove('animate__slideInDown')
  menu_wrapper.classList.add('animate__slideOutUp')


  setTimeout(()=>{
 menu_wrapper.classList.add('visible')
  },1000)

  

  }

  setTimeout(()=>{
    menu_wrapper.classList.remove('animate__slideOutUp')
  menu_wrapper.classList.remove('animate__slideInDown')
   
  },1000)

  

});



