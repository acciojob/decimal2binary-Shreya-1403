function decimalToBinary(num) {
  // Write your code here
	let arr=[];
	let i=0;
	let r;
	while(num!=0){
		r=num%2;//0
		arr[i]=r;//0
		num=num/2;
		i++;
	}
	arr.reverse();
	console.log(arr);
}

window.decimalToBinary = decimalToBinary;