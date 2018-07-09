// code start here
const my_factorielle_rec = (nbr) => {
    if (nbr > 1) {
        nbr = nbr*my_factorielle_rec(nbr - 1);
    }
    return(nbr);
};
// code end here
const main = () => {
    l1 = my_factorielle_rec(9);
    console.log(l1);
};

main();

