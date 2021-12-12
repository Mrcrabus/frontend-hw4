/* function multSimple(x, y){
	console.log(this);
	return x * y;
}

multSimple(); */

/* let math = {
	mult(x, y){
		console.log(this);
		return x * y;
	},
	sum(x, y){
		console.log(this);
		return x + y;
	}
} */

/* math.mult();
setTimeout(math.mult, 1000); */

/* let { mult, sum } = math;
mult(); */
/* 
let mult = math.mult.bind(math);
mult(); */
/* 
function mult(a, b){
	return a * b;
}

let double = mult.bind(null, 2);
console.log(double(5)); */

/* function mult(a, b, c, d, e){
	return a * b;
}

let double = mult.bind(null, 2, 3);

function double(c, d, e){
	return mult(2, 3, c, d, e)
} */

/* mysqli_real_escape_string($link, $str){

}

let res = mysqli_real_escape_string.bind(connection);
res('sdsad') */

/* let i = 1;

while(i < 5){
	setTimeout((function(i){
		console.log(i)
	}).bind(null, i), i * 1000);

	i++;
} */

function nWidth(n){
	return this.innerWidth * n;
}

let box = {
	innerWidth: 100,
	innerHeight: 10
}

console.log(nWidth(10));
console.log(nWidth.apply(box, [10]));
console.log(nWidth.call(box, 5));

let nums = [1,5, 2,67, 3,-3];
let max = Math.max.apply(null, nums);
console.log(max);


let delay = 100;


document.addEventListener('scroll', debounce(onScroll, 100));
window.addEventListener('resize', debounce(onResize, 100));

function onScroll(e){
	console.log(this);
	console.log(e);
	console.log('scroll');
}

function onResize(){
	console.log('resize');
}

function debounce(fn, delay){
	let timeout;

	return function(...args){
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	}
}