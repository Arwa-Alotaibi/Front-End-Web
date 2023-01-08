
const baseurl = 'https://api.openweathermap.org/data/2.5/weather?q='

// Personal API Key for OpenWeatherMap API
const apikey = '&units=metric&appid=3e6eb98ecbce59b9161b4c9a28987b32'
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', PerformAction)

let d = new Date();

let newdate = d.getDate() + '/' + d.getMonth() + 1 + '/' + d.getFullYear()


/* Function called by event listener */
function PerformAction(event) {
    event.preventDefault();
    const cityname = document.getElementById('cityname').value;
    const feelings = document.getElementById('feelings').value;

    GetWeather(baseurl, cityname, apikey)
        //. then call another async function to make a POST request to store this data in our app
        .then(function (data) {
            //add data to post request
            // based on the data we got back from api 
            postdata('/add', { temp: data.main.temp, date: newdate, content: feelings, city: data.name  })

                .then(function () {
                    updateUI()
                })
        })
}

// Get the weather data by zip code
const GetWeather = async (baseurl, cityname, apikey) => {
    const res = await fetch(baseurl + cityname + apikey)
    console.log(res)

    try {
        const data = await res.json() // Extracting data as a JSON Object from the response
        console.log(data)

        return data;
    }

    catch (error) {
        console.log("error", error);

    }
}

/* Function to POST data */

const postdata = async (url = '', data = {}) => {
    const req = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json",
        },
        //Stringify :convert javascript to json
        body: JSON.stringify(data),

    });
    try {
        const newdata = await req.json()
        console.log(newdate)

        return newdata
    }

    catch (error) {
        console.log('error', error)
    }

}


// updates the UI dynamically 

//chagning dom elements based on data recived api or from an api
const updateUI = async () => {
    const req = await fetch('/all');

    try {
        const alldata = await req.json();
        //city
        document.getElementById('city').innerHTML = "Now in <strong>" + alldata.city + "</strong>";

        document.getElementById('date').innerHTML = alldata.date;

        document.getElementById('temp').innerHTML =  Math.round(alldata.temp)+ ' ° C';
        
        document.getElementById('content').innerHTML = alldata.content;






    } catch (error) {
        console.log("error", error);
    }
}

