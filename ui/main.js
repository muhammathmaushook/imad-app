console.log('Loaded!');
alert('This is second script');
var element = document.getElementById('free');
element.innerHTML='Nothing';
var img =  document.getElementById('madi');
img.onclick= function () {
  img.style.marginLeft = '200px';
};