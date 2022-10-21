function removeTags(str) {
    let regex = /<\/?.+?>/g

    return str
            .replace(regex, ' ')
            .trim()
            .replace(/\s+/g, ' ');
}

const result = removeTags('<div><span>lorem</span><strong>ipsum</strong></div>');
console.log(result);