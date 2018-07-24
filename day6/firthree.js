//calculate the height H
const height = (nbr) => {
    let H = 0;
    let i = nbr - 1;
    while (i >= 0) {
        H += 4 + i;
        i--;
    }
    return H;
};
//calculate the length L
const length = (nbr, H) => {
    let L = 1 + 2 * (H - 1);
    let i = 0;
    let j = 1;
    while (i != nbr - 1) {
        if (i % 2 == 0) {
            j++;
        }
        L -= 2 * j;
        i++;
    }
    return L;
};
//display the branches
const branches = (nbr) => {
    let star = 1;
    let L = length(nbr, height(nbr));
    let emptyCase = Math.floor(L / 2);
    let counter = 0;
    let limit = 4;
    let k = 1;
    while (star <= L) {
        //to be tightened the tree, every 4 + n branches
        if (counter == limit) {
            //increase the tightening every 2 times
            if (limit % 2 == 0) {
                k++;
            }
            counter = 0;
            limit++;
            star -= 2* k;
            emptyCase += k;
        }
        //display the emptycases
        let i = 0;
        while (i < emptyCase) {
            process.stdout.write(' ');
            i++;
        }
        //display the stars
        let j = 0;
        while (j < star) {
            process.stdout.write('*');
            j++;
        };
        //new branch
        process.stdout.write('\n');
        counter++;
        star += 2;
        emptyCase--;
    }
};
//display the trunk
const trunk = (nbr) => {
    let m = 0;
    let L = length(nbr, height(nbr));
    let emptyCase = Math.floor((L - nbr) / 2);
    while (m < nbr) {
        //display the emptycases
        let i = 0;
        while (i < emptyCase) {
            process.stdout.write(' ');
            i++;
        }
        //display the wood |
        let j = 0;
        while (j < nbr) {
            process.stdout.write('|');
            j++;
        };
        process.stdout.write('\n');
        m++;
    }
};
//main
const fir = (nbr) => {
    branches(nbr);
    trunk(nbr);
};
fir(1);
fir(2);
fir(3);
fir(4);
fir(5);
