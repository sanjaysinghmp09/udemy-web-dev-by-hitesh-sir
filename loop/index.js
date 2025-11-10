// print added value 1 to 10 
let sum = 0 ; 
let i = 0 ;

while (i <= 5) {

    sum = sum + i ;
    i++ ;
}
console.log(sum) ;

// Basic while loop: count 0..4
let i1 = 0 ;

while ( i1 <=  10 ) {
    console.log(i1) ;
    i1++
}

const task = [ 'a' , 'b' , 'c' ] ;
while ( task.length > 0) {
    const item = task.pop() ;
    console.log('processing' , item) ;
}