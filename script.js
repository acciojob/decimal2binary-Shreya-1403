function decimalToBinary(num) {
  // Write your code here
	let str;
	let r;
	while(num!=0){
		r=num%2;//0 1 0
		str+=r;//010 
		num=num/2;//2
	}
	str.reverse();
	console.log(str);
}

window.decimalToBinary = decimalToBinary;