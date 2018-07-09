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
const my_sort_tab = (tab) => {
    var i = 0;
    var counterMax = 0;
    var counterMin = 0;
    // retain the biggest number of the list
    while (tab[i + 1] != undefined) {
        if (tab[i] > tab[i + 1]) {
            counterMax = tab[i];
        } else { 
            counterMax = tab[i + 1];
        }
        i++;
    }
    // retain the smallest number of the list
    while (tab[i + 1] != undefined) {
        if (tab[i] < tab[i + 1]) {
            counterMin = tab[i];
        } else { 
            counterMin = tab[i + 1];
        }
        i++;
    }
    // create a counter from the smallest number (counterMin) to the biggest number (counterMax) and compare tab[i] to counter
    var counter = counterMin;
    var start = 0;
    while (tab[i] != undefined && counter <= counterMax && counter >= counterMin) { 
        while (tab[i] != counter && tab[i] != undefined) {
            i++;
        }
        if (tab[i] = counter) {
            // move tab[i] to the beginning of tab
            var tmp = tab[start];
            tab[start] = tab[i];
            tab[i] = tmp;
            start++;
        }
        counter++;
        i = 0;
    }    
    return (tab);
};
// code end here

const main = () => {
    var l1 = my_sort_tab([-9, 4, 123]);
    console.log(l1)
};

main();