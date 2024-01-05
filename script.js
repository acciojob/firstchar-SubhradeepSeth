function firstChar(text) {
  // your code here
	if(text==="") return "";
	for(let i=0;i<text.length;){
		if(text.charAt(i)===" "){
			i++;
		}
		else{ 
			return text.charAt(i);
		}
	}
	return "";
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));