import axios from "axios";

export const fetchWeather = async(city) => {
    const key = '5caef12791fb4f308c6121446250901';
    const URL = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;

    try {
        const response = await axios.get(URL);
        console.log(response.data);
        return response.data;
    } catch (error){
        console.error("Error getting data", error)
    }
}