function display(rrr){
    console.log("fff")
    rrr();
    console.log("qqq")
}
function displayr(){
    console.log("aaa");
}
display(displayr)