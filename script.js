function getresult(){
let name = prompt("enter your name");
let one = "moonis";
let two = "asif";
let three = "wahid";
let four = "ahmed";
let five = "owais";
let six = "zaryab";
let seven = "imdad";
let eight = "marvi";
let nine = "ali";
let ten = "rehman";

if(name==one || name==two || name==three || name==four || name==five ||name==six || name==seven || name==eight || name==nine || name==ten){
    document.writeln(name + "<br>");
if(name==one){
    document.writeln("PERFECT <br>"+" You were perfect in the exams");
}
else if(name==two||name==eight){
    document.writeln("A+ GRADE");
}else if(name==three){
    document.writeln("A GRADE");
}else if(name==four){
    document.writeln("B GRADE");
}else if(name==five){
    document.writeln("C GRADE");
}else if(name==six){
    document.writeln("D GRADE");
}else if(name==seven){
    document.writeln("E GRADE");
}else{
    document.writeln("fail");
}
}else{
    document.write("INVALID NAME");
}
}



