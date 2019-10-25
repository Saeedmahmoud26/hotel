$ (function(){
    $(window).scroll(function(){
       var top = $ (this).scrollTop();
        if (top > 200){
            $('header').addClass('.head')
        }
        else{
            $('header').removeClass('.head')
        }
    })
})
   
