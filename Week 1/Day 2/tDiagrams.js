var num1 = 100;
var num2 = 10;

if (num1 < num2) {
    num2 = num2 * num1;
} else {
    console.log( "First set of logging variables---" );
    console.log( "num1", num1);
    console.log( "num2", num2);
    num1 = num1 / num2;
    if (num1 < num2){
        num1 = num1 * 2;
    } else if (num1 === num2){
        num2 = num1 * num2;
    } else {
        num2 = num2 * 2;
    }
}
console.log( "Second set of logging variables---" );
console.log( "num1", num1);
console.log( "num2", num2);
