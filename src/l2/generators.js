function* some(){
	yield 1;
	yield 2;
	yield 3;
}

/* for(let val of some()){
	console.log(val);
}

for(let val of some()){
	console.log(val);
} */

let res = some();