let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
  //your code here
	let res = [];
	for(let i=0; i<arr.length; i++){
		let val = arr[i];
		val++;
		res.push(val);
	}
	return res;
}
 
alert(incrementArray(arr));
