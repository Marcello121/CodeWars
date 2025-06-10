function calculator (a, b, sign){
    if (sign == '+' && Number.isFinite(a) && Number.isFinite(b)){
        let res = a + b
        return res

    } else if (sign == '-' && Number.isFinite(a) && Number.isFinite(b)){
        let res = a - b
        return res


    } else if (sign == '*' && Number.isFinite(a) && Number.isFinite(b)){
        let res = a * b
        return res

    } else if (sign == '/' && Number.isFinite(a) && Number.isFinite(b)){
        let res = a / b
        return res

    } else if (typeof a === 'string' || typeof b === 'string' || sign !== '+', '-', '*', '/') {
        let unk = 'unknown value'
        console.log(unk)
        return unk
        
    }

}

calculator()