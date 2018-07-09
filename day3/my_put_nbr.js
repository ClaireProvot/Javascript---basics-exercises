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
    // si x est negatif, on met '-' et on le repasse positif
    if ( x < 0) {
        myPutChar(45);
        x = -x;
    }
    // si x est un seul chiffre
    var a = Math.floor(x) % 10 + 48;
    if (a != 48 && x < 10) {
        myPutChar(a);
    }
    // si x n'est pas un chiffre, on se décale
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