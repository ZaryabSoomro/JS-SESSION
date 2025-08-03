let sportsName = [
    "Cricket",
    " Football",
    " Basketball",
    " Tennis",
    " Volleyball",
    " Rugby",
    " Hockey",
    " Baseball",
    " Golf",
    " Boxing",
    " Soccer",
]
document.write('<h6 style="color:red;">normal array<h6>');
document.write(sportsName);

document.write('<h6 style="color:red;">Individual array elements called by index 0<h6>');
document.write(sportsName[0]);

document.write('<h6 style="color:red;">Individual array elements called by index 7<h6>');
document.write(sportsName[7]);

document.write('<h6 style="color:red;">Pushing a new element to the array<h6>');
sportsName.push(" Apple");
document.write(sportsName);

document.write('<h6 style="color:red;">Poping 2 element from the array<h6>');
sportsName.pop();
sportsName.pop();
document.write(sportsName);

document.write('<h6 style="color:red;">Showing the length of array<h6>');
document.write(sportsName.length);

document.write('<h6 style="color:red;">Splicing the array<h6>');
sportsName.splice(0,3,"swimming"," karting")
document.write(sportsName);




