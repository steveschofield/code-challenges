// 0. Define original data
// 1. Define Data in variables
// 2. Declare empty arrays to hold same and different values
// 3. Call function to compare array length, set global variables
// 4. Loop through if arrA or arrB, compares values.
// 5. Output results

//Original Data
var arrA = ["b","a","d","c"];
var arrB = ["a","b","c","h","i","j"];

//make sure to have consistency
var arrA = arrA.sort();
var arrB = arrB.sort();

//Hold Decisions of which arrays to use
var ArrayToUseForCompare = "";
var ArrayNotToUseForCompare = "";

//Calls function to retrieve greater loop counter
var arrCount = myFunction(arrA.length, arrB.length);

//Arrays to hold same & different items
var arrSameItems = [];
var arrDifferentItems = [];

for(x=0;x < arrCount; x++)
{
   if(ArrayToUseForCompare == "arrA")
   {
        //console.log(arrB[x])
        if(arrA[x] == arrB[x]){
            arrSameItems.push(arrA[x])
        }
        else
        {
            console.log(arrA[x] + "," + arrB[x]);
            if(arrA[x] != null){
                arrDifferentItems.push(arrA[x])        
            }
            if(arrB[x] != null){
                arrDifferentItems.push(arrB[x])        
            }
        }
   }
   else
   {
       if(arrB[x] == arrA[x])
       {
            console.log(arrB[x] + "," + arrA[x]);
            arrSameItems.push(arrB[x])
       }
       else
       {
            console.log(arrB[x] + "," + arrA[x]);
            if(arrB[x] != null){
                arrDifferentItems.push(arrB[x])        
            }
            if(arrA[x] != null){
                arrDifferentItems.push(arrA[x])        
            }
       }
   }
}

//End of logic and output
console.log("arrSameItems length:" + arrSameItems.length)
console.log("arrDifferentItems length:" + arrDifferentItems.length)
console.log(arrSameItems)
console.log(arrDifferentItems)

function myFunction(arrA, arrB)
{
    //console.log("A:" + arrA + " B:" + arrB)
    if(arrA >= arrB)
    {
        ArrayToUseForCompare = "arrA";
        console.log("ArrayToUseForCompare arrA");
 
        ArrayNotToUseForCompare = "arrB";
        console.log("ArrayNotToUseForCompare arrB");

        return arrA;
    }
    else
    {
        ArrayToUseForCompare = "arrB";
        console.log("ArrayToUseForCompare arrB");
 
        ArrayNotToUseForCompare = "arrA";
        console.log("ArrayNotToUseForCompare arrA");

        return arrB;       
    }    
}
