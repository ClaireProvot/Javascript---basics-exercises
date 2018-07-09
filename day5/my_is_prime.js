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
// code end here
const main = () => {
    l1 = my_is_prime(90);
    console.log(l1);
};

main();
