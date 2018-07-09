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
const my_tab_lenght = (tab) => {
    var i = 0;
    while (tab[i] != undefined) { 
        i++;
    }    
    return (i);
};

// code en here

const main = () => {
    var l1 = my_tab_lenght([2, 4, 5, 67, 656, 454, 444]);
    myPutChar(l1 + 48);
};

main();