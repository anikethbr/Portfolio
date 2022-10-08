$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 220){
            $('nav').addClass("sticky");
            $('span').addClass('changeColor');
        }else{
            $('nav').removeClass("sticky");
            $('span').removeClass('changeColor');
        }
    })
});
function getDate(){
    return new Date().getFullYear().toString();
}