function getresult() {
    let name = prompt("enter your name");
    let one = "zaryab";
    let two = "abdul";
    let three = "shehzad";
    let four = "nasir";
    let five = "ibrahim";
    let six = "hamza";
    let seven = "laiba";
    let eight = "soha";
    let nine = "aliya";
    let ten = "sherryar";

    if (name == one || name == two || name == three || name == four || name == five || name == six || name == seven || name == eight || name == nine || name == ten) {
        document.writeln(name + "<br>");
        if (name == one) {
            document.writeln("PERFECT <br>" + " You were perfect in the exams");
        }
        else if (name == two || name == eight) {
            document.writeln("A+ GRADE");
        } else if (name == three) {
            document.writeln("A GRADE");
        } else if (name == four) {
            document.writeln("B GRADE");
        } else if (name == five) {
            document.writeln("C GRADE");
        } else if (name == six) {
            document.writeln("D GRADE");
        } else if (name == seven) {
            document.writeln("E GRADE");
        } else {
            document.writeln("fail");
        }
    } else {
        document.write("INVALID NAME");
    }
}



