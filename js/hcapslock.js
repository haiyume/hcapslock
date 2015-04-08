/*
@author   haiyume@163.com
@date:    2014-4-8
@info:    检测键盘的大写字母键是否被锁定 hcapslock.js
*/
window.hcapslock = window.hcapslock || function(fn1, fn2){
    var capsLock = false;
    var handler = function(e, target){
        if(e.keyCode == 20){
             capsLock = !capsLock;
             if(capsLock){
                 fn1.call(target, e);
             }else{
                 fn2.call(target, e);
             }           
         }else if(this.value){
             var text = this.value + '';
             if(text.charAt(text.length - 1).match(/[A-Z]/g)){
                 capsLock = true;
                 fn1.call(target, e);
             }else{
                 capsLock = false;
                 fn2.call(target, e);
             }
         }
    };
    if(document.addEventListener){
        document.addEventListener("keyup", function(event){
            handler.call(event.target, event, event.target);
        },false);
    }else if(document.attachEvent){
        document.attachEvent("onkeyup", function(event){
            event = event || window.event;
            handler.call(event.srcElement, event, event.srcElement);
        });
    }
};
