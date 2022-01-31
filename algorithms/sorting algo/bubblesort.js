

export const bubbleSort = (arr) => {

	const newArray = [...arr]
	const finalArray = []

	const swap = (arry, index) => { 
		[arry[index], arry[index + 1]] = [arry[index + 1], arry[index]]
		return arry 
	}

	for (let i = newArray.length -1 ; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if(newArray[j] > newArray[j+1]) {
				swap(newArray,j)
			}
			let data = {
				array: [...newArray],
				index: j
			}
			finalArray.push(data)
		}
	}
	
	return finalArray
}