    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let fnames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let mnames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let gender = document.getElementById("gender").value;

function validation() {
    let date = document.getElementById("date").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    if (date == "", month == "", year == "") {
        console.log()
        alert("Invalid date")
    } else{getday();}
}


let Akanname;

if(date > 31 || date <= 0 || month == 2 && date > 29){
    alert("Enter valid date");
}else if(month > 12){
    alert("Enter valid month");
}else if(year < 1900 || year > 2021){
    alert("Enter valid year")
}




var getday=function() {



    let CC = parseInt(year.slice(0, 2));
    let YY = parseInt(year.slice(2, 4));
    let MM = parseInt(month);
    let DD = parseInt(date);

    let Dayoftheweek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    let day = Math.round(Dayoftheweek);

    //let Dayoftheweek = days[parseInt(Dayoftheweek)];
    //let fnames = fnames[parseInt(Dayoftheweek)];
    //let mnames = mnames[parseInt(Dayoftheweek)];

    if (gender === "Male") {
        Akanname = mnames[day]
        alert("your name is " +Akanname);
    }
    else  {
        Akanname = fnames[day]
        alert("Your name is "+Akanname);
    }
}
//console.log(Akanname)
//document.getElementById("para").innerHTML = "You were born on" + Dayoftheweek + "your Akan name is" + Akanname + "."