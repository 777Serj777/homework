burger.addEventListener("click", function(){

    chbox = document.querySelector('#anchor:checked') !== null;
   
    if(chbox){

       var burger = document.getElementById('burger');
       var nav = document.getElementById('nav');

        nav.classList.add('nav__close');
        burger.classList.add('animation');
        
        setTimeout(() => {
            nav.classList.remove('nav__close');
            burger.classList.remove('animation');
        }, 300);
    }

 
});
btn_second.addEventListener("click", function(){
    
    if(document.querySelector('#aside_therdth').classList.contains('open')){

        document.querySelector('#aside_therdth').classList.toggle('open');
      
    }
    document.querySelector('#aside_second').classList.toggle('open');
   
});

btn_therdth.addEventListener("click", function(){
    
    if(document.querySelector('#aside_second').classList.contains('open')){

        document.querySelector('#aside_second').classList.toggle('open');
      
    }

    document.querySelector('#aside_therdth').classList.toggle('open');
   
});
