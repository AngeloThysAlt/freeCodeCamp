function palindrome(str) {
    let sanitizer = /[^\W_]/g
    let sanitizedStr = str.match(sanitizer).join('').toLowerCase();

    let reverseSanitizedStr = [...sanitizedStr].reverse().join('');

    return sanitizedStr === reverseSanitizedStr;
}
  
palindrome("eye");