let api = "7a61001b7ecd507d98d7c4b8b87e788d";
let apiAddress = "https://api.openweathermap.org/data/2.5/weather?q=";




// url to acces weather api - https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=7a61001b7ecd507d98d7c4b8b87e788d

// function to access data from api and returning it to function
weatherData = (cityName) =>{

    let url = `${apiAddress}${cityName}&appid=${api}&units=metric`;
    
    let userPromise = fetch(url);
    
    return userPromise.then((response)=>{
        return response.json();
    })
}


// function to show weather to the user
showWeather = (city, status, imageOfIcon, temp, temp_min, temp_max) =>{

    
    let celsius = "॰C";
    let image = document.querySelector("#icon");
    image.setAttribute("src", imageOfIcon);

    document.body.querySelector("#city").textContent = city;

    document.body.querySelector("#status").textContent = status;
    
    document.body.querySelector("#temp").textContent = temp + celsius;
    document.body.querySelector("#temp-max").textContent = temp_max + celsius;
    document.body.querySelector("#temp-min").textContent = temp_min + celsius;
    
}


// url to show icon - http://openweathermap.org/img/wn/10d@2x.png
// function to take input from user and call weatherData() function with the same input take from user and also to call showWeather() function to show all the data to the user.

searchCity = () =>{

    let enteredCity = document.querySelector("#input-text").value;
    let data = weatherData(enteredCity);
    
    data.then((res)=>{

        let city = res.name;
        let status = res.weather[0].main;
        let icon = res.weather[0].icon;
        let imageOfIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        let {temp, temp_min, temp_max} = res.main;
        showWeather(city, status, imageOfIcon, temp, temp_min, temp_max);
    })
    
}









