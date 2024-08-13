function createTable() {
    //Write your code here
     let promptRow = prompt('Input number of rows')
	 let promptCol = prompt('Input number of columns')

	let table = document.getElementById('myTable')
	    table.innerHTML = '';


	for(let i=0; i< parseInt(promptRow) ; i++){
	  let row = document.createElement('tr')
	
	for(let j=0; j< parseInt(promptCol); j++){
		 let col =document.createElement('td')
		col.innerText = `Row-${i} Column-${j}`
		row.appendChild(col)
	}
		table.appendChild(row)
  }
}
