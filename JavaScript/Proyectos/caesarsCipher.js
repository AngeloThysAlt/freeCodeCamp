function rot13(str) {
    const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let strArr = [...str];
    let letters = /[A-Z]/;

    for (let i = 0; i < strArr.length; i++) {
        if (letters.test(strArr[i])) {
            if (ABC.indexOf(strArr[i]) + 13 >= ABC.length) {
                strArr[i] = ABC[ABC.indexOf(strArr[i]) + 13 - 26];
            } else {
                strArr[i] = ABC[ABC.indexOf(strArr[i]) + 13];
            }
        }
    }

    return strArr.join('');
}

rot13("SERR PBQR PNZC");