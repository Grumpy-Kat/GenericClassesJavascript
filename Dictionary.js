function Dictionary(TKey,TValue){
	//do NOT access the dictionary array directly or any of its methods/properties; use the class methods instead
	this.dictionary = [];
	//type of keys and values to be inserted into the dictionary
	this.typeKey = TKey;
	this.typeValue = TValue;
	
	//adds a given key and value into the dictionary
	this.Add = function(key,value){
		if(key != null && value != null){
			if(typeof(key) == this.typeKey && typeof(value) == this.typeValue){
				if(!this.dictionary.ContainsKey(key)){
					this.dictionary.push([key,value]);
				} else {
					console.log("Dictionary already contains key of " + key.toString())
				}
			} else {
				console.log("Object attempted to be inserted, with key " + key.toString() + " and value " + value.toString() +", is not of type " + this.typeKey + " and " + this.typeValue + ", and therefore can not be inserted into this Dictionary");
			}
		}
	}
	
	//removes a given key and it's corresponding value from the dictionary
	this.Remove = function(key){
		if(key != null){
			length = this.Count();
			for(i=0;i<length;i++){
				if(this.dictionary[i][0] == key){
					this.dictionary.splice(i,1);
				}
			}
		}
	}
	
	//returns the length of the dictionary
	this.Count = function(){
		return this.dictionary.length;
	}
	
	//returns the corresponding value for the given key
	this.Item = function(key){
		if(key != null){
			length = this.Count();
			for(i=0;i<length;i++){
				if(this.dictionary[i][0] == key){
					return this.dictionary[i][1];
				}
			}
			return null;
		} else {
			return null;
		}
	}
	
	//returns a list (array) of all the keys in the dictionary
	this.Keys = function(){
		returnKeys = [];
		length = this.Count();
		for(i=0;i<length;i++){
			returnKeys.push(this.dictionary[i][0]);
		}
		return returnKeys;
	}
	
	//returns a list (array) of all the values in the dictionary
	this.Values = function(){
		returnValues = [];
		length = this.Count();
		for(i=0;i<length;i++){
			returnValues.push(this.dictionary[i][1]);
		}
		return returnValues;
	}
	
	//clears the dictionary
	this.Clear = function(){
		length = this.Count();
		for(i=0;i<length;i++){
			this.dictionary.pop();
		}
	}
	
	//checks if the dictionary contains the given key; returns true/false
	this.ContainsKey = function(key){
		if(key != null && typeof(key) == this.typeKey){
			length = this.Count();
			for(i=0;i<length;i++){
				if(this.dictionary[i][0] == key){
					return true;
				}
			}
			return false;
		} else {
			return false;
		}
	}
	
	//checks if the dictionary contains the given value; returns true/false
	this.ContainsValue = function(value){
		if(value != null && typeof(value) == this.typeValue){
			length = this.Count();
			for(i=0;i<length;i++){
				if(this.dictionary[i][1] == value){
					return true;
				}
			}
			return false;
		} else {
			return false;
		}
	}
	
	//checks to see if two dictionaries are equivalent (if all their keys and values are equivalent); returns true/false
	this.Equals = function(obj){
		if(obj == null || obj.dictionary == null){
			return false
		}
		if(obj.typeKey != this.typeKey || obj.typeValue != this.typeValue){
			return false;
		}
		length = this.Count();
		if(obj.Count() != length){
			return false;
		}
		for(i=0;i<length;i++){
			if(obj.dictionary[i][0] != this.dictionary[i][0] || obj.dictionary[i][1] != this.dictionary[i][1]){
				return false;
			}
		}
		return true;
	}
	
	//returns the dictionary in array form; simply returns the dictionary array itself 
	this.ToArray = function(){
		return this.dictionary;
	}
	
	//returns the name of the object (which is "Dictionary"), it's key and value type, it's count, and it's elements	
	this.ToString = function(){
		returnString = "Object: Dictionary | KeyType: " + this.typeKey + " | ValueType: " + this.typeValue + " | Count: " + this.Count() + " | Elements: ";
		if(this.Count() == 0){
			returnString += "null";
		}
		length = this.Count();
		for(i=0;i<length;i++){
			returnString += this.dictionary[i][0] + "=" + this.dictionary[i][1];
			if(i != length - 1){
				returnString +=  ", ";
			}
		}
		return returnString;
	}
}