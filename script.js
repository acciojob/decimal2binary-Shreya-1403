function threeSum(arr, target) {
// write your code here
	let i=0;
	let rem=0;
  while(target!=0){
	  rem=target%2;
	  arr.unshift(rem);
	  target=target/2;
  }
	console.log(arr);
}

module.exports = threeSum;
