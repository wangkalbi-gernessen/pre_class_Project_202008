'use strict';

document.addEventListener('DOMContentLoaded', function(){
  let edit = document.getElementById('edit');
  let introduction = document.getElementById('myself_introduction');

  edit.addEventListener('click', function(){
    introduction.disabled = false;
    introduction.addEventListener('blur', function(){
      introduction.disabled = true;
    }, false);
  }, false);
}, false);