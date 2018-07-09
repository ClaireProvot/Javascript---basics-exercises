const argv = () => {
    var arr = process.argv;
    var i = 2;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
};
argv();