function fromBytesToFormattedSizeUnits(bytes, digits = 3) {
    let counter = 0;
    const byteUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    if (bytes < 0) {
        while (bytes <= -1000) {
            bytes /= 1000;
            counter++;
        }

        return bytes.toPrecision(digits) + byteUnits[counter];
    } else {
        while (bytes >= 1000) {
            bytes /= 1000;
            counter++;
        }
    
        return bytes.toPrecision(digits) + byteUnits[counter];
    }
}

const result = fromBytesToFormattedSizeUnits(1000);
console.log(result);

const result2 = fromBytesToFormattedSizeUnits(123456789);
console.log(result2);

const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3);