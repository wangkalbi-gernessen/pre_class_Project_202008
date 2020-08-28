'use strict';

document.addEventListener('DOMContentLoaded', function(){
  let ok = document.getElementById('ok');
  let update = document.getElementById('update');

  ok.addEventListener('change', function(){
    if(ok.checked){
      update.disabled = false;
      update.style.backgroundColor = "blue";
      update.style.color = "#fff";
    } else{
      update.disabled = true;
      update.style.backgroundColor = "#fff";
      update.style.color = "black";
    }
  }, false);
}, false);