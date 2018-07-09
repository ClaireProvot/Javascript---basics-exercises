//function to convert from base1 to decimal base 
const base1ToDec = (nbr, base1) => {
    var base1Length = base1.length;
    var i = 0;
    var nbr2 = base1.indexOf(nbr[i]);
    while (nbr[i + 1]) {
        nbr2 = nbr2 * base1Length + base1.indexOf(nbr[i + 1]);
        i++;
    }  
    return nbr2;
};

//function to convert from decimal base to base2
const decToBase2 = (nbr, base2) => {
    var base2Length = base2.length;
    var mod = 0;
    var nbr3 = '';
    while (Math.floor(nbr) != 0) {
        mod = Math.floor(nbr) % base2Length;
        nbr /= base2Length;
        nbr3 = base2[mod] + nbr3;
    }
    return nbr3;
};

//main function to convert from base1 to base2
const base = (nbr, base1, base2) => {
    //if base1 is decimal, pass directly to base2
    if (base1.length == 10) {
        var nbr3 = decToBase2(nbr, base2);
    //if base2 is decimal, do not continue after the conversion to decimal
    } else if (base2.length == 10) {
        var nbr3 = base1ToDec(nbr, base1);
    //else do base1 => base decimal => base2
    } else {
        var nbr2 = base1ToDec(nbr, base1);
        var nbr3 = decToBase2(nbr2, base2);
    }  
    console.log(nbr3);
    return nbr3;
};

//display
base('92','0123456789','01');