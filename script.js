document.addEventListener("DOMContentLoaded", fetchTheData("Delhi"));

function handleClick() {
    let input = document.getElementById("exampleInputEmail1").value;
    
    if (input === ""){
        alert("Please fill the input field");
        return;
    }

    fetchTheData(input);
}

function fetchTheData(city){
    const degree = "\u00B0C"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6fcc8f06915b87c94dfa7338c812ec9e`, {
        method: "GET"
    })
    .then((response) => response.json())
    .then((data)=>{
        let header = document.getElementById("city");
        let temperature = document.getElementById("temperature");
        let feels = document.getElementById("feels");
        let min = document.getElementById("max-temp");
        let max = document.getElementById("min-temp");
        let wind = document.getElementById("wind");
        let humidity = document.getElementById("humidity");
        let forecast = document.getElementById("forecast");

        header.textContent = data.name;
        temperature.textContent = data.main.temp + degree;
        feels.textContent = data.main.feels_like + degree;
        min.textContent = data.main.temp_min + degree;
        max.textContent = data.main.temp_max + degree;
        wind.textContent = data.wind.speed + " km";
        humidity.textContent = data.main.humidity + "%";
        forecast.textContent = data.weather[0].description.replace(/\b\w/g, match => match.toUpperCase());
    })
    .catch((error) => {
        fetchTheData("Delhi");
    })
}