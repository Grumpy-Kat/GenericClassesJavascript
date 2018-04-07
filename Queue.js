function Queue(T){
	//do NOT access the queue array directly or any of its methods/properties; use the class methods instead
	this.queue = [];
	//type of values to be inserted into the queue
	this.type = T;
	
	//enqueues (adds) a given object into the queue
	this.Enqueue = function(obj){
		if(obj != null){
			if(typeof(obj) == this.type){
				this.queue.push(obj);
			} else {
				console.log("Object attempted to be inserted, " + obj.toString() + ", is not of type " + type + ", and therefore can not be inserted into this Queue");
			}
		}
	}
	
	//dequeues (removes) the first object on the queue and returns it
	this.Dequeue = function(){
		return this.queue.shift();
	}
	
	//returns the length of the queue
	this.Count = function(){
		return this.queue.length;
	}
	
	//returns the first object on the queue, WITHOUT removing it
	this.Peek = function(){
		return this.queue[0];
	}
	
	//clears the queue
	this.Clear = function(){
		length = this.Count();
		for(i=0;i<length;i++){
			this.queue.pop();
		}
	}
	
	//checks if the queue contains the given object; returns true/false
	this.Contains = function(obj){
		if(obj != null && typeof(obj) == this.type){
			if(this.queue.indexOf(obj) != -1){
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	
	//checks to see if two queues are equivalent (if all their values are equivalent); returns true/false
	this.Equals = function(obj){
		if(obj == null || obj.queue == null){
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
			if(obj.queue[i] != this.queue[i]){
				return false;
			}
		}
		return true;
	}
	
	//returns the queue in array form; simply returns the queue array itself 
	this.ToArray = function(){
		return this.queue;
	}
	
	//returns the name of the object (which is "Queue"), it's type, it's count, and it's elements
	this.ToString = function(){
		returnString = "Object: Queue | Type: " + type + " | Count: " + this.Count() + " | Elements: ";
		if(this.Count() == 0){
			returnString += "null";
		}
		length = this.Count();
		for(i=0;i<length;i++){
			returnString += this.queue[i];
			if(i != length - 1){
				returnString +=  ", ";
			}
		}
		return returnString;
	}
}