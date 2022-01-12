

export const bubbleSort = (arr) => {
    console.log('Algo Starts here!',arr)
	const swap = (arry, index) => { 
		[arry[index], arry[index + 1]] = [arry[index + 1], arry[index]]
        // console.log('Algo Actual time array is changed',arr);

		return arry 
	}
	for (let i = arr.length -1 ; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if(arr[j] > arr[j+1]) {
                swap(arr,j)
                console.log('Algo Actual time array is changed',arr);
            }
		}
	}
	return arr
}