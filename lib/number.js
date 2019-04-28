export function isInt() {    
    if (Math.floor(this) == this) {
        return true;
    } else {
        return false;
    }
}

export function isFloat() {
    if (Math.floor(this) != this) {
        return true;
    } else {
        return false;
    }
}

export function isDecimal(floatNum, index) {
    const num = Math.pow(10, index);
    return Math.round(floatNum * num) / num;
}


