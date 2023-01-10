

var age = 19;

if ( age > 20 ){
    console.log( "You can drink in USA." );
}
else{
    var result = 21 - age;
    console.log( "You are still not old enough to drink in USA!" );
    console.log( "You need to be " + result + " more years old!" );
    if ( age >= 18 ){
        console.log( "However, if you are in Mexico you are now eligble to drink!" );
    }
}

console.log( "This will always be printed!" );