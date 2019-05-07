var arrA = ["a","c","b","j"];
var arrB = ["c","b","e","j"];

var arrA = arrA.sort();
var arrB = arrB.sort();
var arrSameItems = [];
var arrDifferentItems = [];

for(a=0;a < arrA.length;a++){
    let val1 = arrA[a];
    var result = arrB.indexOf(val1,0);

    if(result == -1){
        if(arrDifferentItems.indexOf(val1,0) === -1){
            arrDifferentItems.push(val1);
        }        
    }
    else{
        if(arrSameItems.indexOf(val1,0) === -1){
            arrSameItems.push(val1);
        }
    }
}

for(b=0;b < arrB.length;b++){
    let val1 = arrB[b];
    var result = arrA.indexOf(val1,0);

    if(result == -1){
        if(arrDifferentItems.indexOf(val1,0) === -1){
            arrDifferentItems.push(val1);
        }        
    }
    else{
        if(arrSameItems.indexOf(val1,0) === -1){
            arrSameItems.push(val1);
        }
    }
}
//End of logic and output
console.log("arrSameItems length:" + arrSameItems.length)
console.log("arrDifferentItems length:" + arrDifferentItems.length)
console.log("arrSameItems:" + arrSameItems)
console.log("arrDifferentItems:" + arrDifferentItems)