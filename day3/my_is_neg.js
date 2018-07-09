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
const my_is_neg = (x) => {
    if (x >= 0) {
        myPutChar(80);
    } else {
        myPutChar(78);
    }
};

// code en here

const main = () => {
    my_is_neg(-6);
};

main();