
// let arr = [1,2,  3,34,234,2,24,];

// console.log(arr);

let solder = {
    health : 400,
    armor : 100
};

let john = {
    height: 100
};

john.__proto__ = solder;

console.log(john);
console.log(john.health);




function Calculator() {

     this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };  

}

  var calculator = new Calculator();
  calculator.read();
  
  alert( "Сумма=" + calculator.sum() );
  




  function Devide(){
      this.write = function(){
          this.a = +prompt('a ?', 0);
          this.b = +prompt('a ?', 0);
      };
      this.summ = function(){
          return this.a + this.b
      }
  }


  var dev = new Devide();
  dev.write();
  alert("summ = " + dev.summ());






