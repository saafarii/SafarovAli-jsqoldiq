var elText = document.querySelector( '.text')
var num = prompt('raqam klirit')

if( num == Math.floor(num)){
    elText.textContent = 'qoldiq yoq'
}
else{
    elText.textContent ='qoldiq bor'
}