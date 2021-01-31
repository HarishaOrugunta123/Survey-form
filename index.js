function validateForm(){
    var name=document.myform.Name.value;

    if(name==""||name=="Null"||name=="NaN"){
        alert("Please enter your name in this field");
        return false;
    }
}