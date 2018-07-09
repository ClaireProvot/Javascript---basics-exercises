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
const my_put_nbr = (nbr) => {
    var power = 1;
    var a = 1;
    // si le nombre est negatif, on met '-' et on le repasse positif
    if (nbr < 0) {
        myPutChar(45);
        nbr = -nbr;
    }
    while (a != 48) {
        // si nbr n'est pas un chiffre, on se décale
        while ((nbr / power) > 10) {
            power = power * 10;
        }
        // Une fois, le décalage fait, on passe à l'écriture
        while ((nbr / power) < 10 && (nbr / power) > 1) {
        a = Math.floor(nbr / power) % 10 + 48;
        myPutChar(a);
        nbr = nbr % power;
        power = power / 10;
        // Pour prendre en compte un "0" dans le nombre, on écrit "0" directement, et on passe l'étape d'écriture 
            while (nbr < power && power >= 1) { 
            myPutChar(48);
            power = power / 10;
            }
        a = Math.floor(nbr / power) % 10 + 48;
        }
    }
};

// code en here

const main = () => {
    my_put_nbr(-434209);
};

main();