
var grades = [ 87, 92, 65, 100, 76, 88, 90 ];  
            // 0    1   2   3   4   5   6      7
 
//console.log( grades[1] );
//console.log( grades[2] );

grades[1] = 95;

//console.log( "length", grades.length );
//console.log( grades[1] );


for( var i = 0; i < grades.length; i ++ ){
    console.log( grades[i] );
}

console.log( "---------" );
console.log( grades.length, grades );
grades.pop();
grades.pop();
grades.push( 56 );
console.log( grades.length, grades );


