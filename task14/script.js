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
    var msgs = ["must be at least 8 characters", "must contain an uppercase character", "must contain a lowercase character", "must contain a number", "must contain a special character"];
    var txt = "";
    var count = 0;
    for (i = 0; i<5; i++){
        if(!arr[i]){
            count +=1;
            txt += "-";
            txt += msgs[i];
            txt += "\n";
        }
    }
    if (count == 0){
        var color = "green";
    }else if(count >=3){
        var color = "red";
    }else{
        var color = "yellow";
    }
     //   console.log(txt);
    console.log(count);
    console.log(color);
    document.getElementById('indicator').style.color = color;
    document.getElementById('pass').style.background = color;
    document.getElementById('indicator').innerText = txt;
}


