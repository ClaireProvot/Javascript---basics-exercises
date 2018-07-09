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
const my_aff_comb_2 = () => {
    var n = 0;
    while (n <= 999) {
        var c = n % 10 +48;
        var b = Math.floor(n % 100 / 10) + 48;
        var a = Math.floor (n / 100) + 48;
        if (a < b && b < c) {
            if (a != 48 || b != 49 || c != 50) {
                myPutChar(32);
                myPutChar(44);
            }
            myPutChar(a);
            myPutChar(b);
            myPutChar(c);
        } 
        n = n + 1;
    }
};

// code en here

const main = () => {
    my_aff_comb_2();
};

main();