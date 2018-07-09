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
const my_aff_comb = () => {
    var a = 48;
    var b = 48;
    var c = 48;
    while (a <= 57) {
        while (b <= 57) {
            while (c <= 57) {
                if (a < b && b < c) {
                    if (a == 48 && b == 49 && c == 50) {
                    } else {
                        myPutChar(32);
                        myPutChar(44);
                    };
                    myPutChar(a);
                    myPutChar(b);
                    myPutChar(c);
                } else {
                };
                c = c + 1;
            };
            b = b + 1;
            c = 48;
        };
        a = a + 1;
        b = 48;
    };
};

// code en here

const main = () => {
    my_aff_comb();
};

main();