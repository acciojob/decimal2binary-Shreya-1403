function decimalToBinary(num) {
  // Write your code here
	let arr=[];
	let r;
	let i=0;
	while(num!==0){
		r=num%2;//0 1 0 1
		arr[i]=r;//0101 
		num=Math.floor(num/2);//0
		i++;
	}
	arr.reverse();
	let ans=arr.toString();
	return ans;
}

window.decimalToBinary = decimalToBinary;