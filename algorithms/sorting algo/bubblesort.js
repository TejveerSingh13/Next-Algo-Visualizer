

export const bubbleSort = (arr) => {
	const finalArray = []

  console.log('Algo Starts here!',arr)
	const swap = (arry, index) => { 
		[arry[index], arry[index + 1]] = [arry[index + 1], arry[index]]
		return arry 
	}
	for (let i = arr.length -1 ; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if(arr[j] > arr[j+1]) {
				swap(arr,j)
			}
			console.log('Algo inside second loop ',arr, j, j+1);
			let data = {
				array: arr,
				index: j
			}
			finalArray.push(data)
		}
	}
	console.log('Algo', finalArray);
	return finalArray
}