function wordsCount(baseStr){
	let len = cleanStr(baseStr).replace(/\S+/g, '').length;
	return len > 0 ? len + 1 : 0;
}

function* getWords(baseStr){
	let str = cleanStr(baseStr)
	
	if(str.length > 0){
		str += ' ';
	}

	let from = 0;
	let to = str.indexOf(' ', from);

	while(to !== -1){
		let value = str.substring(from, to);
		yield value;
		from = to + 1;
		to = str.indexOf(' ', from);
	}
}

/* function getWords(baseStr){
	let str = cleanStr(baseStr)
	
	if(str.length > 0){
		str += ' ';
	}

	return {
		[Symbol.iterator](){
			let from = 0;

			return {
				next(){
					let to = str.indexOf(' ', from);

					if(to === -1){
						return { done: true, value: undefined } 
					}

					let value = str.substring(from, to);
					from = to + 1;
					return { done: false, value };
				}
			}
		}
	}
} */

function cleanStr(str){
	return str.trim().replace(/\s+/g, ' ');
}

export { wordsCount, getWords };

/* 
from = 0
str.indexOf(' ', from)
to = 4
from = to + 1

Всем привет! Ура! ура 
             ^
*/




/* function getWords(str){
	
	return {
		[Symbol.iterator](){
			let from = 0;

			return {
				next(){
					for(let i = from; i < str.length; i++){
						if(str[i] != ' '){
							from = i;
							break;
						}
					}
					
					let to = -1;

					for(let i = from; i < str.length; i++){
						if(str[i] == ' '){
							to = i;
							break;
						}
					}

					if(to === -1){
						return { done: true, value: undefined } 
					}

					let value = str.substring(from, to);
					from = to + 1;
					return { done: false, value };
				}
			}
		}
	}

} */