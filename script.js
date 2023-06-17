function threeSum(arr, target) {
// write your code here
	let i=0;
	let sum=0;
  while(target!=0){
	  let rem=target%10;
	  sum=sum*10+rem;
	  target=target/10;
  }
	return sum;
}

module.exports = threeSum;
