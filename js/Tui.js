//»Øµ½¶¥²¿
window.onload = function(){
    var OnTop = document.getElementById('onTop');
    window.onscroll = function (){
        if(document.body.scrollTop>200){
            OnTop.style.display="block";
        }else{
            OnTop.style.display="none";
        }
    }
    var clientHeight = document.body.clientHeight;
    OnTop.onclick = function(){
        var timer = setInterval(function(){
            if(document.body.scrollTop>0){
                document.body.scrollTop-=(clientHeight-document.body.scrollTop)/30
            }else{
                clearInterval(timer)
            }
        },10)
    }
}
