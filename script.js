
//task 2
function ComputeTotalSumAvg(arr){
     const sum= arr.reduce((pre,curr)=>{
          return pre+curr;
     });
     const avg= sum/arr.length;
     return {sum,avg};
     
}

//task 3
// using the set convesion to remove the duplicate items in constant time
function uniqe(items){
     const uniqeItems=new Set(items);
return uniqeItems;
}



//output fot task 2
const numbersArray = [1, 2, 3, 4, 2,5];

result=ComputeTotalSumAvg(numbersArray);
console.log('task 2')
console.log(`numbers: ${numbersArray}`)
console.log(`Total Sum of the numers= ${result.sum}`)
console.log(`Average= ${result.avg}`)

//output for task 3
const arrayWithDuplicates = ["apple", "banana", "apple", "orange", "banana"];
//I used 'spread operate' to convert set to array

const removeDuplicates=[... uniqe(arrayWithDuplicates)];
console.log('task 3')
console.log(`orginal array:${arrayWithDuplicates}`)
console.log(`modified array wihout duplicates: ${removeDuplicates}`);





