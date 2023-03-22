export function validatePhone(num) {
    const regexPattern = /^[\d()+]*$/; // number, (), +
    let res = false;
    
    if (num && regexPattern.test(num)) {
        res = true
    } 
    return res;
}
