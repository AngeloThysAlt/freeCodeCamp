function convertToRoman(num) {
    let romanArr = [];

    while (num > 0) {
        if (num >= 1000) {
            num -= 1000;
            romanArr.push('M');
        } else if (num >= 900) {
            num -= 900;
            romanArr.push('CM');
        } else if (num >= 500) {
            num -= 500;
            romanArr.push('D');
        } else if (num >= 400) {
            num -= 400;
            romanArr.push('CD');
        } else if (num >= 100) {
            num -= 100;
            romanArr.push('C');
        } else if (num >= 90) {
            num -= 90;
            romanArr.push('XC');
        } else if (num >= 50) {
            num -= 50;
            romanArr.push('L');
        } else if (num >= 40) {
            num -= 40;
            romanArr.push('XL');
        } else if (num >= 10) {
            num -= 10;
            romanArr.push('X');
        } else if (num >= 9) {
            num -= 9;
            romanArr.push('IX');
        } else if (num >= 5) {
            num -= 5;
            romanArr.push('V');
        } else if (num >= 4) {
            num -= 4;
            romanArr.push('IV');
        } else if (num >= 1) {
            num -= 1;
            romanArr.push('I');
        }
    }

    return romanArr.join('');
}
   
convertToRoman(36);