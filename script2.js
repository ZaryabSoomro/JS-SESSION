let num = Number(prompt("Enter Your Number Here↓↓↓"));
let limit = Number(prompt("enter limit you want to check"));

if(isNaN(num) || isNaN(limit)){
    alert("Please enter a valid number");
}else{
document.write("FORWARD <br>")
for(n = 1;n <= limit; n++){
    document.write("<br>");
    document.write(num + " x " + n + " = " + num*n);
}
document.write("<br><br>")
document.write("BACKWORD")
document.write("<br>");
for(n=limit; n>=1; n--){
    document.write("<br>");
    document.write(num + " x " + n + " = " + num*n);
} }