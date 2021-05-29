// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  let jumlah = 0
  let binary = num.toString(2).split("")
  for (let i = 0; i < binary.length; i++ ) {
      if (binary[i] === "1")
        jumlah += 1
  }
  return jumlah
}

console.log(result(number));