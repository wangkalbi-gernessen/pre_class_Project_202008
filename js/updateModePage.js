'use strict';

document.addEventListener('DOMContentLoaded', function(){
  let ok = document.getElementById('ok');
  let update = document.getElementById('update');

  ok.addEventListener('change', function(){
    if(ok.checked){
      update.disabled = false;
      update.style.backgroundColor = "blue";
      update.style.color = "#fff";
      update.style.cursor = "pointer";
    } else{
      update.disabled = true;
      update.style.backgroundColor = "#fff";
      update.style.color = "black";
      update.style.cursor = "auto";
    }
  }, false);
}, false);