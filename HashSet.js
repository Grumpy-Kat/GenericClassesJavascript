function HashSet(T){
	//do NOtype access the hashSet array directly or any of its methods/properties; use the class methods instead
	this.hashSet = [];
	//type of values to be inserted into the hashSet
	this.type = T;
	
	//adds a given value into the hashSet
	this.Add = function(obj){
		if(obj != null){
			if(typeof(obj) == this.type){
				this.hashSet.push(obj);
			} else {
				console.log("Object attempted to be inserted, " + obj.toString() +", is not of type " + this.type + ", and therefore can not be inserted into this HashSet");
			}
		}
	}
	
	//removes a given value from the has set
	this.Remove = function(obj){
		if(value != null){
			length = this.Count();
			for(i=0;i<length;i++){
				if(this.hashSet[i] == obj){
					this.hashSet.splice(i,1);
				}
			}
		}
	}
	
	//returns the length of the hash set
	this.Count = function(){
		return this.hashSet.length;
	}
	
	//clears the hash set
	this.Clear = function(){
		length = this.Count();
		for(i=0;i<length;i++){
			this.hashSet.pop();
		}
	}
	
	//checks if the hash set contains the given value; returns true/false
	this.Contains = function(obj){
		if(obj != null && typeof(obj) == this.type){
			length = this.Count();
			for(i=0;i<length;i++){
				if(this.hashSet[i] == obj){
					return true;
				}
			}
			return false;
		} else {
			return false;
		}
	}
	
	//returns and sets the value of this hash set to be the intersecting contents between this hash set and the provided one
	this.IntersectWith = function(obj){
		intersecting = [];
		if(obj != null && obj.hashSet != null && obj.type == this.type){
			objLength = obj.Count();
			for(i=0;i<objLength;i++){
				if(this.Contains(obj.hashSet[i])){
					intersecting.push(obj.hashSet[i]);
				}
			}
		}
		this.hashSet = intersecting;
		return this;
	}
	
	//returns and sets the value of this hash set to be all the contents of this hash set and the provided one
	this.UnionWith = function(obj){
		union = [];
		if(obj != null && obj.hashSet != null && obj.type == this.type){
			union = this.hashSet;
			objLength = obj.Count();
			for(i=0;i<objLength;i++){
				if(!this.Contains(obj.hashSet[i])){
					union.push(obj.hashSet[i]);
				}
			}
		}
		this.hashSet = union;
		return this;
	}
	
	//tests whether this hash set a subset of the provided one; returns true/false
	this.IsSubsetOf = function(obj){
		if(obj != null && obj.hashSet != null && obj.type == this.type){
			if(this.hashSet.length < 1){
				return true;
			}
			objLength = obj.Count();
			length = this.Count();
			var subset = false;
			for(i=0;i<objLength;i++){
				for(j=0;j<length;j++){
					if(obj.hashSet[i] != this.hashSet[j]){
						continue;
					} else {
						subset = true;
					}
				}
			}
			return subset;
		}
		return false;
	}

	//tests whether this hash set a superset of the provided one; returns true/false
	this.IsSupersetOf = function(obj){
		if(obj != null && obj.hashSet != null && obj.type == this.type){
			if(obj.hashSet.length < 1){
				return true;
			}
			objLength = obj.Count();
			length = this.Count();
			var superset = false;
			for(i=0;i<length;i++){
				for(j=0;j<objLength;j++){
					if(this.hashSet[i] != obj.hashSet[j]){
						continue;
					} else {
						superset = true;
					}
				}
			}
			return superset;
		}
		return false;
	}
	
	//checks to see if two hash sets are equivalent (if all their values are equivalent); returns true/false
	this.Equals = function(obj){
		if(obj == null || obj.hashSet == null){
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
			if(obj.hashSet[i] != this.hashSet[i]){
				return false;
			}
		}
		return true;
	}
	
	//returns the hashSet in array form; simply returns the hashSet array itself 
	this.ToArray = function(){
		return this.hashSet;
	}
	
	//returns the name of the object (which is "HashSet"), it's value type, it's count, and it's elements	
	this.ToString = function(){
		returnString = "Object: HashSet | Type: " + this.type + " | Count: " + this.Count() + " | Elements: ";
		if(this.Count() == 0){
			returnString += "null";
		}
		length = this.Count();
		for(i=0;i<length;i++){
			returnString += this.hashSet[i];
			if(i != length - 1){
				returnString +=  ", ";
			}
		}
		return returnString;
	}
}