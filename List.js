function List(T){
	//do NOT access the list array directly or any of its methods/properties; use the class methods instead
	this.list = [];
	//type of values to be inserted into the queue
	this.type = T;

	//adds a given value into the list
	this.Add = function(obj){
		if(obj != null){
			if(typeof(obj) == this.type){
				this.list.push(obj);
			} else {
				console.log("Object attempted to be inserted, " + obj.toString() +", is not of type " + this.type + ", and therefore can not be inserted into this List");
			}
		}
	}
	
	//removes a given value from the list
	this.Remove = function(obj){
		if(obj != null){
			length = this.Count();
			for(i=0;i<length;i++){
				if(this.list[i] == obj){
					this.list.splice(i,1);
				}
			}
		}
	}
	
	//gets object at given index (equivalent to [] operator)
	this.Get = function(i){
		if(i > -1 && i < this.Count()){
			return this.list[i];
		}
		return null;
	}
	
	//removes the object at the given index
	this.RemoveAt = function(i){
		if(i > -1 && i < this.Count()){
			this.list.splice(i,1);
		}
	}
	
	//removes the object in a given range of indices
	this.RemoveRange = function(i,count){
		if(i > -1 && i+count < this.Count()-1){
			this.list.splice(i,count);
		}
	}

	//gets index of object in list
	this.IndexOf = function(obj){
		return this.list.indexOf(obj);
	}
	
	//clears the list
	this.Clear = function(){
		length = this.Count();
		for(i=0;i<length;i++){
			this.list.pop();
		}
	}
	
	//checks if the list contains the given object; returns true/false
	this.Contains = function(obj){
		if(obj != null && typeof(obj) == this.type){
			if(this.list.indexOf(obj) != -1){
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	
	//checks to see if two lists are equivalent (if all their values are equivalent); returns true/false
	this.Equals = function(obj){
		if(obj == null || obj.list == null){
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
			if(obj.list[i] != this.lists[i]){
				return false;
			}
		}
		return true;
	}
	
	//returns the length of the list
	this.Count = function(){
		return this.list.length;
	}
	
	//reverses the list
	this.Reverse = function(){
		this.list.reverse();
	}
	
	//reverses the list in the range
	this.ReverseRange = function(i,count){
		if(i == 0 && i+count == this.Count()-1){
			this.list.reverse();
		} else {
			range = this.list.slice(i,i+count+1);
			range.reverse()
			for(j=0;j<range.length;j++){
				this.list[i+j] = range[j];
			}
		}
	}
	
	//sorts the list in increasing order
	this.Sort = function(){
		this.list.sort();
	}
	
	//inserts object at given index
	this.Insert = function(i,obj){
		if(obj != null){
			if(typeof(obj) == this.type){
				this.list.splice(i,1,obj);
			} else {
				console.log("Object attempted to be inserted, " + obj.toString() +", is not of type " + this.type + ", and therefore can not be inserted into this List");
			}
		}
	}
	
	//returns last index of object
	this.LastIndexOf = function(obj){
		return this.list.lastIndexOf(obj);
	}
	
	//returns last index of object, starting at index
	this.LastIndexOfStartingAt = function(obj,i){
		return this.list.lastIndexOf(obj,i);
	}
	
	//returns last index of object, starting at index and at limit of count
	this.LastIndexOfLimit = function(obj,i,count){
		index = this.list.lastIndexOf(obj);
		if(index > count){
			return -1;
		}
		return index;
	}
		
	//returns the list in array form; simply returns the list array itself 
	this.ToArray = function(){
		return this.list;
	}
	
	//returns the name of the object (which is "List"), it's value type, it's count, and it's elements	
	this.ToString = function(){
		returnString = "Object: List | Type: " + this.type + " | Count: " + this.Count() + " | Elements: ";
		if(this.Count() == 0){
			returnString += "null";
		}
		length = this.Count();
		for(i=0;i<length;i++){
			returnString += this.list[i];
			if(i != length - 1){
				returnString +=  ", ";
			}
		}
		return returnString;
	}
}