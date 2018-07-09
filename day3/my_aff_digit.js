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
test
// code start here
const my_aff_digit = () => {
    var a = 48;
    while ( a < 57) {
        myPutChar(a);
        a = a + 1;
    };
};
// code en here

const main = () => {
    my_aff_digit();
};

main();