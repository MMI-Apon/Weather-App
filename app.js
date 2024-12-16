const apiKey = 'caaeeb75559ecf8427c14785efb459ac';
async function weather(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    console.log(data);
    if(res.status === 404){
        alert('Please Enter A Valid City Name')
    }
    else{
        if(data.weather[0].main){
            document.getElementById('result').innerHTML=`<div>
                <img id="w-p" src='images/${data.weather[0].main}.png' alt='${data.weather[0].main}'>
                <h2><span id="temp">${data.main.temp} </span>°C</h2>
                <h4><span id="city">${data.name}</span></h4>
            </div>
            <div id="info">
                <div id="humidity">
                    <img src="images/humidity.png" alt="humidity">
                    <h3><span id="hu-in">${data.main.humidity}</span>%</h3>
                    <p>humidity</p>
                </div>
                <div>
                   <img src="images/wind.png" alt="wind">
                    <h3><span id="wi-in">${data.wind.speed} </span>km/h</h3>
                    <p>wind speed</p> 
                </div>
                    
            </div>`;
        }
    }
console.log(data.weather[0].main);
}


document.getElementById('search').addEventListener('click', () => {
    const searchBox = document.getElementById('search-box').value;
    if(searchBox.length === 0){
        alert('please enter a city name')
    }
    else{
        weather(searchBox);
    }
    document.getElementById('search-box').value = '';
});