// code start here
const my_is_prime = (nbr) => {
    var i = 2;
    // if nbr is neg
    if ( nbr < 0) {
        return(0);
    }
    while (i != nbr && nbr > 1) {
        if (nbr % i == 0) {
            return(0);
        }
        i++;
    }
    return(1);
};
const my_find_prime_sup = (nbr) => {
    var primeSup = nbr;
    while (my_is_prime(primeSup) == 0) {
        primeSup++;
    }
    return(primeSup);
};
// code end here
const main = () => {
    l1 = my_find_prime_sup(5);
    console.log(l1);
};

main();
