function getConfirmation(){ 
    var retVal = confirm("Do you want to continue ?"); 
    if( retVal == true ){ 
       console.log ("User wants to continue!"); 
    return true; 
    }else{ 
       console.log ("User does not want to continue!"); 
    return false; 
    } 
 } 