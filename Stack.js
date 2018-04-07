function Stack(T){
	//do NOT access the stack array directly or any of its methods/properties; use the class methods instead
	this.stack = [];
	//type of values to be inserted into the stack
	this.type = T;
	
	//enqueues (adds) a given object into the stack
	this.Push = function(obj){
		if(obj != null){
			if(typeof(obj) == this.type){
				this.stack.push(obj);
			} else {
				console.log("Object attempted to be inserted, " + obj.toString() + ", is not of type " + type + ", and therefore can not be inserted into this Stack");
			}
		}
	}
	
	//dequeues (removes) the last object on the stack and returns it
	this.Pop = function(){
		return this.stack.pop();
	}
	
	//returns the length of the stack
	this.Count = function(){
		return this.stack.length;
	}
	
	//returns the last object on the stack, WITHOUT removing it
	this.Peek = function(){
		return this.stack[this.Count()-1];
	}
	
	//clears the stack
	this.Clear = function(){
		length = this.Count();
		for(i=0;i<length;i++){
			this.stack.pop();
		}
	}
	
	//checks if the stack contains the given object; returns true/false
	this.Contains = function(obj){
		if(obj != null && typeof(obj) == this.type){
			if(this.stack.indexOf(obj) != -1){
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	
	//checks to see if two stacks are equivalent (if all their values are equivalent); returns true/false
	this.Equals = function(obj){
		if(obj == null || obj.stack == null){
			return false
		}
		if(obj.type != this.type){
			return false;
		}
		length = this.Count();
		if(obj.Count() != length){
			return false;
		}
		for(i=0;i<length;i++){
			if(obj.stack[i] != this.stack[i]){
				return false;
			}
		}
		return true;
	}
	
	//returns the stack in array form; simply returns the stack array itself 
	this.ToArray = function(){
		return this.stack;
	}
	
	//returns the name of the object (which is "Stack"), it's type, it's count, and it's elements
	this.ToString = function(){
		returnString = "Object: Stack | Type: " + type + " | Count: " + this.Count() + " | Elements: ";
		if(this.Count() == 0){
			returnString += "null";
		}
		length = this.Count();
		for(i=0;i<length;i++){
			returnString += this.stack[i];
			if(i != length - 1){
				returnString +=  ", ";
			}
		}
		return returnString;
	}
}