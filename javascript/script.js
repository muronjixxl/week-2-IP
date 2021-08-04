const akanmale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

const akanfemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getDate() {

    let dateOutput = document.getElementById("DOB").value;
    console.log(dateOutput);

    let male = document.getElementById("male");

    let female = document.getElementById("female");


    if (dateOutput == "") {
        alert("Please enter date.")

    } else if (male.checked == false && female.checked == false) {
        alert("Please enter your gender.")

    }

    date = new Date(dateOutput);
    console.log(date);



    CC = date.getFullYear();
    CC = CC.toString().substr(0, 2);
    console.log(CC);


    YY = date.getFullYear();
    YY = YY.toString().substr(2, 4);
    console.log(YY);


    MM = date.getMonth();
    console.log(MM);


    DD = date.getDate();
    console.log(DD);


    y = date.getDay();
    let dd = Math.round(
        (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    );
    console.log(y);

    return y;
}
function validateForm() {
    getDate();
    if (male.checked) {
        console.log(akanmale[y]);
        document.getElementById("DISPLAY").innerHTML = "Your Akan Name is " + "<span>" + akanmale[y] + "</span>" + "<br>" + "meaning you were born on a " + date.toLocaleString('en-us', { weekday: 'long' });
    }
    else if (female.checked) {
        console.log(akanfemale[y]);
        document.getElementById("DISPLAY").innerHTML = "Your Akan Name is " + "<span>" + akanfemale[y] + "</span>" + "<br>" + "meaning you were born on a " + date.toLocaleString('en-us', { weekday: 'long' });
    }
}


function onSubmit() {
    validateForm();

}