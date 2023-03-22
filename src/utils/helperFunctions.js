export function validatePhone(num) {
    const regexPattern = /^[\d()+]*$/; // number, (), +

    if(!num) return false;
    if (regexPattern.test(num)) {
        return true
    } else {
        console.log("The input string is not valid.");
        return false;
    }
}
