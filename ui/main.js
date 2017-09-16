console.log('Loaded!');
alert('This is second script');
var element = document.getElementById('free');
element.innerHTML='Nothing';
var img =  document.getElementById('img');
img.onclick= function() {
  img.style.marginleft= '100px';
};