document.getElementById("find").addEventListener('click', function () {
    var input = document.getElementById("name").value;
    console.log(input);
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=a5d378c396bd5de4bc146d05c29d0ce8")
        .then(response => response.json())
        .then(data => {
            var Tem = Math.floor(data.main.temp - 273);
            var Feel = Math.floor(data['main']['feels_like'] - 273);
            var country = data['sys']['country'];
            var weather = data.weather[0].description;
            var wind = data.wind.speed;
            var clouds = data.clouds.all;
            var Humidity = data['main']['humidity'];
            document.getElementById("city").innerHTML = input + ", " + country;
            document.getElementById("Tem").innerHTML = Tem + " ° C";
            document.getElementById("Feel").innerHTML = "Real Feel " + Feel + " ° C";
            document.getElementById("weather").innerHTML = weather;
            document.getElementById("wind").innerHTML = wind + " m/s";
            document.getElementById("clouds").innerHTML = clouds + " %";
            document.getElementById("humidity").innerHTML = Humidity + " %";
            document.getElementById("displaying").style.display = "block";
        })
        .catch(err => alert("Wrong city name"))
})