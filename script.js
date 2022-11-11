let operators = ['/', '*', '-', '+']
let value1 = 0
let value2 = 0
let mainOperator = ''
let total = 0
let verify = true

window.addEventListener('keypress', e => {
	if (e.key === 'c') {
		document.querySelector('#input01').innerText = ' '
		document.querySelector('#result').innerText = ' '
		value1 = 0
		value2 = 0
		mainOperator = ''
		total = 0
	} else if (e.keyCode >= 65 && e.keyCode <= 90) {
		// Alphabet upper case
		alert('Only Numbers Allowed')
	} else if (e.keyCode >= 97 && e.keyCode <= 122) {
		// Alphabet lower case
		alert('Only Numbers Allowed')
	} else if (e.key === 'Enter') {
		if (mainOperator === '+') {
			total = parseInt(value1) + parseInt(value2)
			document.querySelector('#input01').innerText = total
		} else if (mainOperator === '-') {
			total = parseInt(value1) - parseInt(value2)
			document.querySelector('#input01').innerText = total
		} else if (mainOperator === '/') {
			total = parseInt(value1) / parseInt(value2)
			document.querySelector('#input01').innerText = total
		} else if (mainOperator === '*') {
			total = parseInt(value1) * parseInt(value2)
			document.querySelector('#input01').innerText = total
		}
	} else if (operators.includes(e.key)) {
		mainOperator = e.key
		// console.log(e.key)
		// console.log(mainOperator)
		document.querySelector('#input01').innerText = ' '
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.key
	} else if (mainOperator) {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + parseInt(e.key))
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.key
		value2 = a
	} else if (e.key) {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + parseInt(e.key))
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.key
		value1 = a
	}
})

function one(e) {
	if (verify) {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value1 = a
		console.log(value1 + ' ' + 'true')
	} else {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)

		value2 = a
		console.log(value1 + ' ' + 'false')
	}
}
function two(e) {
	if (verify) {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value1 = a
		console.log(value1 + ' ' + 'true')
	} else {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value2 = a
		console.log(value1 + ' ' + 'false')
	}
}
function three(e) {
	if (verify) {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value1 = a
		console.log(value1 + ' ' + 'true')
	} else {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value2 = a
		console.log(value1 + ' ' + 'false')
	}
}
function four(e) {
	if (verify) {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value1 = a
		console.log(value1 + ' ' + 'true')
	} else {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value2 = a
		console.log(value1 + ' ' + 'false')
	}
}
function five(e) {
	if (verify) {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value1 = a
		console.log(value1 + ' ' + 'true')
	} else {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value2 = a
		console.log(value1 + ' ' + 'false')
	}
}
function six(e) {
	if (verify) {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value1 = a
		console.log(value1 + ' ' + 'true')
	} else {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value2 = a
		console.log(value1 + ' ' + 'false')
	}
}
function seven(e) {
	if (verify) {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value1 = a
		console.log(value1 + ' ' + 'true')
	} else {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value2 = a
		console.log(value1 + ' ' + 'false')
	}
}
function eight(e) {
	if (verify) {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value1 = a
		console.log(value1 + ' ' + 'true')
	} else {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value2 = a
		console.log(value1 + ' ' + 'false')
	}
}
function nine(e) {
	if (verify) {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value1 = a
		console.log(value1 + ' ' + 'true')
	} else {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value2 = a
		console.log(value1 + ' ' + 'false')
	}
}
function zero(e) {
	if (verify) {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value1 = a
		console.log(value1 + ' ' + 'true')
	} else {
		let a = (document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText)
		document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
		value2 = a
		console.log(value1 + ' ' + 'false')
	}
}

function multiple(e) {
	console.log(e)
	mainOperator = e.innerText
	document.querySelector('#input01').innerText = ' '
	document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
	verify = false
}
function division(e) {
	mainOperator = e.innerText
	document.querySelector('#input01').innerText = ' '
	document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
	verify = false
}
function addition(e) {
	mainOperator = e.innerText
	document.querySelector('#input01').innerText = ' '
	document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
	verify = false
}
function subtraction(e) {
	mainOperator = e.innerText
	document.querySelector('#input01').innerText = ' '
	document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
	verify = false
}

function enter(e) {
	console.log(value1, value2)
	console.log(e)
	if (mainOperator === '+') {
		total = parseInt(value1) + parseInt(value2)
		document.querySelector('#input01').innerText = total
	} else if (mainOperator === '-') {
		total = parseInt(value1) - parseInt(value2)
		document.querySelector('#input01').innerText = total
	} else if (mainOperator === '/') {
		total = parseInt(value1) / parseInt(value2)
		document.querySelector('#input01').innerText = total
	} else if (mainOperator === '*') {
		total = parseInt(value1) * parseInt(value2)
		document.querySelector('#input01').innerText = total
	}
}

function dot(e) {
	document.querySelector('#input01').innerText = document.querySelector('#input01').innerText + e.innerText
	document.querySelector('#result').innerText = document.querySelector('#result').innerText + e.innerText
}

function allClear(e) {
	document.querySelector('#input01').innerText = ' '
	document.querySelector('#result').innerText = ' '
	value1 = 0
	value2 = 0
	mainOperator = ''
	total = 0
	verify = true
}
