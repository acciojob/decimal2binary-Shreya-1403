function decimalToBinary(num) {
  // Write your code here
	let arr=[];
	let i=0;
	while(num!=0){
		let r=num%2;
		arr[i]=r;
		num=num/2;
		i++;
	}
	arr.reverse();
	console.log(arr);
}

window.decimalToBinary = decimalToBinary;