"use strict"

function LinkedList() {
	this._size = 0;
	this._head = null;

	this.Node = function(element) {
		this.element = element;
		this.next = null;
	};

	this.size = function() {
		return this._size;
	};

	this.head = function() {
		return this._head;
	};

	this.add = function(element) {
		var node = new this.Node(element);

		if(this._head === null) {
			this._head = node;
		} else {
			var currentNode = this._head;

			for(;currentNode.next;) {
				currentNode = currentNode.next;
			}

			currentNode.next = node;
		}

		this._size++;
	};

	this.remove = function(element) {
		var currentNode = this._head;
		var previousNode;
		if(currentNode.element === element) {
			this._head = currentNode.next;
		} else {
			for(;currentNode.element !== element;) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}

			previousNode.next = currentNode.next;
		}

		this._size--;
	};

	this.isEmpty = function() {
		return this._size === 0;
	};

	this.indexOf = function(element) {
		var currentNode = this._head;
		var index = -1;

		for(;currentNode;) {
			index++;
			if(currentNode.element === element) {
				return index;
			}
			currentNode = currentNode.next;
		}

		return -1;
	};

	this.elementAt = function(index) {
		var currentNode = this._head;
		var count = 0;
		for (;count < index;){
			count++;
			currentNode = currentNode.next;
		}

		return currentNode.element;
	};

	this.addAt = function(index, element) {
		var node = new this.Node(element);

		var currentNode = this._head;
		var previousNode;
		var currentIndex = 0;

		if(index > this._size) {
			return false;
		}

		if(index === 0) {
			node.next = currentNode;
			this._head = node;
		} else {
			for (;currentIndex < index;) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			node.next = currentNode;
			previousNode.next = node;
		}

		this._size++;
	}

	this.removeAt = function(index) {
		var currentNode = this._head;
		var previousNode;
		var currentIndex = 0;

		if(index < 0 || index >= this._size) {
			return null;
		}
		if(index === 0) {
			head = currentNode.next;
		} else {
			for (;currentIndex < index;) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = currentNode.next;
		}
		
		this._size--;
		return currentNode.element;
	}
}



var vehicles = new LinkedList();
vehicles.add("car");
vehicles.add("truck");
vehicles.add("bike");
vehicles.add("train");
vehicles.add("aircraft");
console.log(vehicles.size());
console.log(vehicles.removeAt(3));
console.log(vehicles.elementAt(3));
console.log(vehicles.indexOf("bike"));
console.log(vehicles.size());
console.log(vehicles.head());
vehicles.remove("car");
console.log(vehicles.size());
console.log(vehicles.isEmpty());
vehicles.addAt(2, "rocket");
console.log(vehicles.elementAt(2));

console.log(vehicles.elementAt(0));
console.log(vehicles.elementAt(1));
console.log(vehicles.elementAt(2));
console.log(vehicles.elementAt(3));
