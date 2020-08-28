document.addEventListener('DOMLoadedContent', function(){
  let li = document.querySelectorAll('li');

  document.addEventListener('mouseover', function(){
  
  li.style.backgroundColor = "blue";
  }, false);
}, false);