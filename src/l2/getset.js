/* new Vue({
	data(){
		return {
			width: 10,
			height: 2
		}
	},
	computed: {
		area(){
			return this.width * this.height;
		},
		length(){
			return 2 * this.width + 2 * this.height;
		}
	}
})
 */


let rect = {
    _data: {
        width: 12,
        height: 12,
        area: 0,
        length: 0
    },
    _calcArea() {
        return this._data.width * this._data.height;
    },
    _calcLength() {
        return 2 * this._data.width + 2 * this._data.height;
    },
    render() {
        document.querySelector('.timer').innerHTML = `${this.width}:${this.height}:${this.area}:${this.length}`;
    }
};


Object.defineProperty(rect, 'width', {
    get() {
        return this._data.width;
    },
    set(val) {
        this._data.width = val;
        this._data.area = this._calcArea();
        this._data.length = this._calcLength();
        this.render();
    }
});

Object.defineProperty(rect, 'height', {
    get() {
        return this._data.height;
    },
    set(val) {
        this._data.height = val;
        this._data.area = this._calcArea();
        this._data.length = this._calcLength();
        this.render();
    }
});

Object.defineProperty(rect, 'area', {
    get() {
        return this._data.area;
    }
});

Object.defineProperty(rect, 'length', {
    get() {
        return this._data.length;
    }
});

rect.width = 24

console.log(rect)
rect.render();
window.rect = rect;

/* 
Object.defineProperty(rect, 'width', {
	value: 0,
	set(val){
		this.width = val;
	}
}); */

//rect.width = 1;

/* Object.defineProperty(rect, 'area', {
	get(){
		console.log('calc area');
		return this.width * this.height;
	}
});

console.log(rect.area);
console.log(rect.area);
console.log(rect.area); */

/* Object.defineProperty(rect, 'area', {
	value: 1,
	configurable: false,
	writable: false
});

console.log(rect);
rect.area = 2;
console.log(rect); */

