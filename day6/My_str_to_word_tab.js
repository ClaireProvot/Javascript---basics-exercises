 const strToWordTab = (str) => {
    var i = 0;
    var j = 0;
    var tab = [''];
    while (str[i]) {
        if (str[i] == ' ' && tab[j] != ['']) {
            j++;
            tab.push('');
        }
        if (str[i] != ' ') {
            tab[j] += str[i];
        }
        i++;
    }
    if (str[i] == undefined && tab[j] == '') {
        tab.pop();
    }
    return tab;
};
test = strToWordTab('  coucou       claire   ');
console.log(test);