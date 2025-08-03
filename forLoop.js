function tableGenerator(){
let num = prompt("Enter Your Table Number Here↓↓↓");
let limit = prompt("Enter Your Table Limit Here↓↓↓");

if(isNaN(num) || isNaN(limit)){
    alert("Please enter a valid number");
}else{
document.write('<h3 style="color:Red;">FORWARD</h3>');
for(n = 1;n <= limit; n++){
    document.write("<br>");
    document.write(num + " x " + n + " = " + num*n);
}
document.write("<br>");
document.write('<h3 style="color:Red;">NORMAL</h3>');
for(n=1; n<=10; n++){
    document.write("<br>");
    document.write(num + " x " + n + " = " + num*n);
}
document.write("<br>");
document.write('<h3 style="color:Red;">BACKWORD</h3>');
for(n = limit; n >= 1; n--){
    document.write("<br>");
    document.write(num + " x " + n + " = " + num*n);
}
}
}