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
const my_aff_rev_alpha = () => {
    var i = 122;
    while (i >= 97) {
        myPutChar(i);
        i = i - 1 ;
    }
    myPutChar('\n');
};

// code en here

const main = () => {
    my_aff_rev_alpha();
};

main();