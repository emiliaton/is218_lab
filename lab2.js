function modifyInto(){
    document.getElementId("p").innerHTML= "wow, changed";
}
function validate(){
    if (isNaN(a) || a<10 || a >15)
    {
        text="input is out of range, not valid";
    }
    else{
        text="input OK";
    }
}