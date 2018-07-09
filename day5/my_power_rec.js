// code start here
const my_power_rec = (nbr, power) => {
   if (power > 1) {
       power--;
       nbr = nbr * my_power_rec(nbr, power);
   }
    return(nbr);
};
// code end here
const main = () => {
    l1 = my_power_rec(2, 9);
    console.log(l1);
};

main();
