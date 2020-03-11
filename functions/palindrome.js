const palindrome = (str) => {
    const removeChar = str.replace(/[^A-Z0-9]/ig, '').toLowerCase();
    const checkPalindrome = removeChar.split('').reverse().join('');

    if(removeChar === checkPalindrome) return 'IS A PALINDROME';
    return 'IS NOT A PALINDROME';
}

module.exports = palindrome;