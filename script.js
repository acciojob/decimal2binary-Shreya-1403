function threeSum(arr, target) {
// write your code here
	let i=0;
	let rem=0;
  while(target!=0){
	  rem=target%10;
	  arr.unshift(rem);
	  target=target/10;
  }
	return arr;
}

module.exports = threeSum;
