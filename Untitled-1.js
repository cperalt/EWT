
// blueprint

function add(x,y, callback) {
    var output = x+y

    
    return callback(output)
}

function additionalMath(result){
    return result + 1
}



// usage

let math = add(1,2, additionalMath) // logs 3






