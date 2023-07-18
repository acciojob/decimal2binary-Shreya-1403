function decimalToBinary(num) {
  // Write your code here
	let str;
	let r;
	while(num!=0){
		r=num%2;//0 1 0 1
		str+=r;//0101 
		num=num/2;//0
	}
	str.reverse();
	return str;
}

window.decimalToBinary = decimalToBinary;