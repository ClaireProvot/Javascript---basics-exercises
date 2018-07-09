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
const my_putstr = (str) => {
    var i = 0;
    while (str[i] != undefined) {
        myPutChar(str[i]);
        i++;
    }
};

// code en here

const main = () => {
    my_putstr("bonjour claire");
};

main();