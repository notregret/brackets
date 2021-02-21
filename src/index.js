module.exports = function check(str, bracketsConfig) {

    for (let i = 0; i < bracketsConfig.length; i++) {
        let warning = bracketsConfig[i].join('');
        if (str.includes(warning)) {
            str = str.replace(warning, '');
            i = -1;
        }
    }
    return !str;
}
