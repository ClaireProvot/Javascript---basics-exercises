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
const my_rev_tab = (tab) => {
    // calculate the lenght of the tab
    var length = 0;
    while (tab[length] != undefined) { 
        length++;
    }  
    // move the numbers 
    var i = 0;
    // in case of lenght is odd, don't touch the nomber in the middle of the tab 
    var a = Math.floor(length / 2);
    while (length > a) {
        // create a temporary value 
        var tmp = tab[i];
        length = length - 1;
        tab[i] = tab[length];
        // replace last number by tmp
        tab[length] = tmp;
        i++;
    }
    return (tab);
};

// code end here

const main = () => {
    var revTab = my_rev_tab('E29');
    console.log(revTab);
};

main();