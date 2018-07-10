const myPutChar = (c) => {
    c = typeof c =='number' ?
String.fromCharCode(c) : c;
    if (!c ||c.length !=1) {

process.stdout.write('\nERROR: myPutChar received only character\n');
            process.exit();
    }
    process.stdout.write(c);
};

const addChar = (c, n ) => {
    return String.fromCharCode(c.charCodeAt(0) + n);
};

// code start here
const my_put_nbr = (x) => {
    // if x is neg
    if ( x < 0) {
        myPutChar(45);
        x = -x;
    }
    // if x is one number
    var a = Math.floor(x) % 10 + 48;
    if (a != 48 && x < 10) {
        myPutChar(a);
    }
    // if x is more than one number
    if (x  > 9) {
        my_put_nbr(x / 10 );
        myPutChar(a);
    }
};

// code en here

const main = () => {
    my_put_nbr(909);
};

main();