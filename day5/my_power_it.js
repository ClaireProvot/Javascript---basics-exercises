// code start here
const my_power_it = (nbr, power) => {
    var nbrPower = nbr;
    while (power > 1) {
        nbrPower = nbrPower * nbr;
        power--;
    }
    return(nbrPower);
};
// code end here
const main = () => {
    l1 = my_power_it(2, 5);
    console.log(l1);
};

main();
