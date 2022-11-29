function accept(id) {
    var element = document.querySelector(id);
    element.remove();
}

function convertToCelcius(changeTo) {
    var degree1 = document.getElementById("temp1").innerText.substring(0, 2);
    var degree2 = document.getElementById("temp2").innerText.substring(0, 2);
    var degree3 = document.getElementById("temp3").innerText.substring(0, 2);
    var degree4 = document.getElementById("temp4").innerText.substring(0, 2);
    if(changeTo == "Celcius"){

    var t1 = Math.round(parseFloat( (degree1 -32) * 5 / 9 ));
    var t2 = Math.round(parseFloat( (degree2 -32) * 5 / 9 ));
    var t3 = Math.round(parseFloat( (degree3 -32) * 5 / 9 ));
    var t4 = Math.round(parseFloat( (degree4 -32) * 5 / 9 ));

    document.getElementById("temp1").innerText = t1 + "° Celcius";
    document.getElementById("temp2").innerText = t2 + "° Celcius";
    document.getElementById("temp3").innerText = t3 + "° Celcius";
    document.getElementById("temp4").innerText = t4 + "° Celcius";
    } else {
        var t1 = Math.round(parseFloat( ((degree1 * 9)/5) + 32 ));
        var t2 = Math.round(parseFloat( ((degree2 * 9)/5) + 32 ));
        var t3 = Math.round(parseFloat( ((degree3 * 9)/5) + 32 ));
        var t4 = Math.round(parseFloat( ((degree4 * 9)/5) + 32 ));


        document.getElementById("temp1").innerText = t1 + "° Fahrenheit";
        document.getElementById("temp2").innerText = t2 + "° Fahrenheit";
        document.getElementById("temp3").innerText = t3 + "° Fahrenheit";
        document.getElementById("temp4").innerText = t4 + "° Fahrenheit";
    }
}

