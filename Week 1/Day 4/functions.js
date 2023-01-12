
function addTwoNumbers( num1, num2 ){
    var total = num1 + num2;
    return total;
}

function paramsNoReturn( num1, num2 ){
    var total = num1 + num2;
    console.log( total );
}

function noParamsWithReturn(){
    var total = 100 + 200;
    return total;
}

function noParamsNoReturn(){
    console.log( "Hello there developer!" );
}


var result = addTwoNumbers( 10, 20 );
console.log( result );

var result2 = addTwoNumbers( 50, 100 );
console.log( result2 );

var finalResult = addTwoNumbers( result, result2 );
console.log( finalResult );

paramsNoReturn( 10, 20 );

var result4 = noParamsWithReturn();
console.log( result4 );

noParamsNoReturn();
noParamsNoReturn();