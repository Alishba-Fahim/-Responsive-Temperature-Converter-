function ConvertorTemp() {
    let input_1 = document.getElementById('temperature').value;
    let select = document.getElementById('converter_1').value;
    let result = "";

    if (input_1 === "") {
        result = "Please enter a temperature value!";
    }
    else if (select === "cel") {
        let tempInFar = (input_1 * 9 / 5) + 32;
        result = `${input_1}° Celsius is equal to ${tempInFar.toFixed(2)}° Fahrenheit`;
    }
    else if (select === "fah") {
        let celsius = (input_1 - 32) * 5 / 9;
        result = `${input_1}° Fahrenheit is equal to ${celsius.toFixed(2)}° Celsius.`;
    }

    document.getElementById('result').innerHTML = result;
}
function Reset() {
    document.getElementById("temperature").value = "";
    document.getElementById("converter_1").value = "";
    document.getElementById("result").innerHTML = "";
}



