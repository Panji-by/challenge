// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  let res = []
  let genap = Array()
  let ganjil= Array()
  arr2 = arr2.filter(a => !arr1.includes(a))
//   console.log(arr2)
  for (let i=0; i < arr2.length; i++) {
       arr2[i]%2 === 0 ? genap.push(arr2[i]) : ganjil.push(arr2[i])
  }
  ganjil = ganjil.sort((accumulator, currentValue) => accumulator - currentValue)
//   console.log(ganjil)
  arr1.unshift(...ganjil)
  arr1.push(...genap)
  return arr1
}

console.log(result(arr1, arr2));