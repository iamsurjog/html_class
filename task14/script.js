function getval() {
    var pass = document.getElementById("pass").value;
    var length = pass.length >= 8;
    var pattern = /([A-Z])/g;
    var upper = pattern.test(pass);
    var pattern = /([a-z])/g;
    var lower = pattern.test(pass);
    var pattern = /([0-9])/g;
    var num = pattern.test(pass);
    var pattern = /(\W)/g;
    var sp = pattern.test(pass);
    var arr = [length, upper, lower, num, sp]; 
    console.log(arr); 
}
