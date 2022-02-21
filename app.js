const subminBtn = document.getElementById('submit-btn');

subminBtn.addEventListener('click', function() {
    const inputBtn = document.getElementById('input-btn').value;
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=7eb8a3633051cae4c46da63e17dfb6e4')

    // Here I converted api call to the json by using .then
    .then(response => response.json())

    .then(data =>{
        const cityName = data.name; //Here I get the data from the api
        const tmp = data.main.temp;
        const temp = tmp - 273.15; //Here I convert kelvin to celsius.
        const mintmp = data.main.temp_min;
        const mintemp = mintmp - 279.15; 
        const maxtmp = data.main.temp_max;
        const maxtemp = maxtmp - 279.15;
        const description = data.weather[0].description;

        document.getElementById('city').innerText = cityName;
        document.getElementById('temp').innerText = temp.toFixed(1);
        document.getElementById('des').innerText = description;
        document.getElementById('mintemp').innerText = mintemp.toFixed(1);
        document.getElementById('maxtemp').innerText = maxtemp.toFixed(1);
    })
    .catch(res => alert('Enter rigth city name !!'))

}
)