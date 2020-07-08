let btn = document.querySelectorAll('button');
let wrap = document.querySelector('.wrapper');
let link = document.querySelector('a');

btn[0].onclick = function(){
    alert("you have pushed the first button");
}


btn[0].addEventListener('click', function (event) {
   console.log(event);
   let target = event.target;
   target.style.display = 'none';
   console.log('Произошло событие' + event.type + ' на элементе ' + event.target);
});

wrap.addEventListener('click', function () {
   console.log('Произошло событие' + event.type + ' на элементе ' + event.target);
})

link.addEventListener('click', function (event) {
   console.log('Произошло событие' + event.type + ' на элементе ' + event.target);
   event.preventDefault();
})

btn.forEach(function(item){
   item.addEventListener('mouseleave', function(){
      console.log("exit");
   })
})


let p1 = document.querySelector('.p1');
console.log(p1);

p1.addEventListener('click', function (event) {
      console.log(event);
      this.style.display = 'hide';
});


// btn[0].addEventListener('mouseenter', function(){
//     alert('asd');
// });