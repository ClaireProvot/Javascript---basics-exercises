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
const my_getnbr = (str) => {
    var i = 0;
    var nbr = 0;
    var neg = 1;
    while ((str[i].charCodeAt(0) < 48) || (str[i].charCodeAt(0)) > 58) {
        if (str[i] = "-") {
            neg = -neg;
        }
        i++;
    }   
    while (str[i] >= 0 && str[i] <= 9 && str[i] != undefined) {
        nbr = (nbr * 10 + Math.floor(str[i]));
        i++;
    }
    nbr = nbr * (-neg);
    return(nbr);
};
// code end here

const main = () => {
    var l1 = my_getnbr('+---+--++---+---+---+-42');
    console.log(l1);
};

main();