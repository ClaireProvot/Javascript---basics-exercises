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
const my_aff_comb2 = () => {
    var x = 0;
    var y = 0;
    while (y <= 98) {
        while (x <= 99) {
            if (y < x) {
                if (x != 1 || y != 0) {
                    myPutChar(44);
                    myPutChar(32);
                }
                var a = x % 10 + 48;
                var b = Math.floor(x / 10) + 48;
                var c = y % 10 + 48;
                var d = Math.floor(y / 10) + 48;
                myPutChar(d);
                myPutChar(c);
                myPutChar(32);
                myPutChar(b);
                myPutChar(a);
            }
            x = x + 1;
        }
        y = y + 1;
        x = 0;
    }
};

// code en here

const main = () => {
    my_aff_comb2();
};

main();