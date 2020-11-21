'use strict';

let nevergonnagiveyouup = document.getElementById('yeemp4');

document.getElementById('orderBtn').addEventListener('click', function(){
    document.getElementById('die').style.display = 'block';
    setTimeout(function() {
        document.getElementById('die').style = 'display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap;';
        nevergonnagiveyouup.play();
        if (window.innerHeight < 800) {
            document.getElementById('yeemp4').width = '320';
            document.getElementById('yeemp4').height = '240';
        }
    }, 100);
})