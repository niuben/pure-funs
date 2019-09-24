// JavaScript Document
export function $(id){	        
	 var str=id;
      id=id.substr(1,id.length);
	  if(str.indexOf("#")!=-1){			            
	    return document.getElementById(id);  
	  }      
	  return  getElementByClass(id);
}

export function getElementByClass (classname) {  
       
   var isHave=0;
   var elements = [];      
   var alltags = document.all ? document.all : document.getElementsByTagName("*")
   
   for (var i=0;i<alltags.length;i++){	   
      var classNames = alltags[i].className.split(" ");
	  isHave=0;	  
	  for(var n=0,m=classNames.length;n<m;n++){		    
			if(classNames[n]==classname){
			  isHave=1;
			  break;
			}
	  }
	  
      if (isHave)
          elements[elements.length] = alltags[i];
   }
   
   return elements;
}  

