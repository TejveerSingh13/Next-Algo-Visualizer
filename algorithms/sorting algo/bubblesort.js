

export const bubbleSort = (arr) => {

	const finalArray = []

	const swap = (arry, index) => { 
		[arry[index], arry[index + 1]] = [arry[index + 1], arry[index]]
		return arry 
	}

	for (let i = arr.length -1 ; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if(arr[j] > arr[j+1]) {
				swap(arr,j)
			}
			let data = {
				array: arr,
				index: j
			}
			finalArray.push(data)
		}
	}
	
	return finalArray
}