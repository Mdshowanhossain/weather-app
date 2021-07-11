const api = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'd9584d01419d0b07c357612e4d13d8be';


// https://api.openweathermap.org/data/2.5/weather?q={city%20name}&appid={API%20key}

const inputButtonFilled = (city) => {
    const url = `${api}?q=${city}&appid=${apiKey}&units=metric`

    fetch(url)
        .then(response => response.json())
        .then(responseData => console.log(responseData))


    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9584d01419d0b07c357612e4d13d8be&units=metric`

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })

}