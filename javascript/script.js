    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let fnames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let mnames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let gender = document.getElementById("gender").value;

function validation() {
    let date = parseInt(document.getElementById("date").value);
    let month = parseInt(document.getElementById("month").value;)
    let year = parseInt(document.getElementById("year").value);
    if (date == "", month == "", year == "") {
        alert("Invalid date")
        return false;
    } else{getday();}
}



var getday=function() {
    const birthdate1 = birthdate.split("-");
console.log(birthdate1);
let year = birthdate[2];
let month = parseInt(birthdate1[0]);
let date = parseInt(birthdate1[2]);
let Akanname;

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