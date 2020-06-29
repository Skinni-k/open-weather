import React, { useEffect, useState } from 'react';
import styles from "./individualDay.module.css";
import Cards from '../Cards/Cards';
import axios from "axios";
import Chart from '../Chart/Chart';
import {useLocation} from "react-router";

const IndividualDay = () => {
    const [hourlyData, setHourlyData] = useState([]);
    const [currentTime, setCurrentTIme] = useState([])
    const [place, setPlace] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [weather, setWeather] = useState("");
    const [humidity, setHumidity] = useState("");
    const [lowTemp, setLowTemp] = useState("");
    const [highTemp, setHighTemp] = useState("");
    const [sunrise, setSunrise] = useState([]);
    const [sunset, setSunset] = useState([]);
    const [lowTempList, setLowTempList] = useState([]);
    const [avgTempList, setAvgTempList] = useState([]);
    const [highTempList, setHighTempList] = useState([]);
    const [hourlyTime, setHourlyTime] = useState([]);
    const [showGraph, setShowGraph] = useState(false);
    const [graphData, setGraphData] = useState({});
    const location = useLocation();
    const api_key_weather = "0c696ec6fa2c35f0d62d8c3423ffdf67";


    // THIS useEffect RUNS ON RENDER TO SET THE STATES PASSED FROM THE CARD
    useEffect(()=>{
        setPlace(location.state.place);
        setLongitude(location.state.longitude);
        setLatitude(location.state.latitude);
        setWeather(location.state.weather);
        setHumidity(location.state.humidity);
        setLowTemp(location.state.lowTemp);
        setHighTemp(location.state.highTemp);
        setSunrise(location.state.sunrise);
        setSunset(location.state.sunset);
    },[]);

    // THE BELOW FUNCTION SHOULD ONLY RUN WHEN latitude HAS BEEN SET A VALUE, THAT IS WHY THE IF BLOCK
    // AFTER THAT getWeatherHourly FUNCTION IS CALLED TO GET HOURLY DATA
    useEffect(() => {
        if(latitude.length > 0){
            getWeatherHourly();
        }
    },[latitude]);

    // THE BELOW FUNCTION GETS WEATHER DATA FOR NEXT 5 DAYS
    const getWeatherHourly = async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key_weather}`)
        .then((response) => {
                setHourlyData(response.data.list);
        });
    }

    // THE BELOW FUNCTION SHOULD ONLY RUN WHEN HOURLYDATA AND SUNRISE HAS BEEN SET A VALUE
    // AFTER HOURLY DATA HAS BEEN SET, specificTimeFrame FUNCTION IS CALLED TO GET DATA FOR A SPECIFIC DATE
    useEffect(() => {
        if(hourlyData.length > 0 && sunrise.length > 0){
        const dayDate = sunrise[1];
        const getDate = dayDate.substr(4,2)
        specificTimeFrame(getDate);
        }
    },[hourlyData]);

    // THE BELOW FUNCTION FILTERS OUT THE DATA FOR THE REQUIRED DATE AND CONVERTS IT IN LOCAL TIME
    const specificTimeFrame = (particularDate) => {
        const providedDate = particularDate
        const filteredTimeSet = hourlyData.filter((x)=>{
            const utcDate = `${x.dt_txt} UTC`;
            const currentDate = new Date (utcDate);
            const date = currentDate.getDate()
            return date == providedDate
        })
        setCurrentTIme(filteredTimeSet)
    };

    // THE BELOW FUNCTION SHOULD ONLY RUN WHEN currentTime HAS BEEN SET A VALUE
    // AFTER currentTime HAS BEEN SET, graphDataList FUNCTION IS CALLED TO GET ARRAY OF TEMPRATURES
    useEffect(()=>{
        if(currentTime.length>0){
            graphDataList();
        }
    },[currentTime])

    // THE BELOW FUNCTION RUNS TO GET THE LOW, AVERAGE AND HIGH TEMPRATURES FROM THE CURENT TIME
    const graphDataList = () => {
        const lowTempList = currentTime.map((lowTemp)=>{
            return lowTemp.main.temp_min
        })
        const avgTempList = currentTime.map((avgTemp)=>{
            return avgTemp.main.temp
        })
        const highTempList = currentTime.map((highTemp)=>{
            return highTemp.main.temp_max
        })
        const hourlyTime = currentTime.map((hour)=>{
            const utcDate = `${hour.dt_txt} UTC`;
            const currentDate = new Date (utcDate);
            const individualHour = currentDate.getHours()
            return individualHour
        })
        setHourlyTime(hourlyTime);
        setLowTempList(lowTempList);
        setAvgTempList(avgTempList);
        setHighTempList(highTempList);
    }

    // THE BELOW USEEFFECT SETS THE GRAPH DATA ONLY WHEN ALL THE TEMPRATURES HAVE BEEN SET
    useEffect(()=>{
        if(lowTempList.length > 0 && avgTempList.length > 0 && highTempList.length > 0 && hourlyTime.length > 0){
            setGraphData([lowTempList, avgTempList, highTempList, hourlyTime]);
            setShowGraph(true);
        }
    },[highTempList])

    return (
        <>
        {weather.length > 0 ? 
            <div className={styles.individualCard}>
                <p className={styles.day}>{`${sunrise[0]} - ${sunrise[1]}`}</p>
                <Cards
                cardList={false}
                place={place}
                longitude={longitude}
                latitude={latitude}
                weather={weather}
                humidity={humidity}
                lowTemp={lowTemp}
                highTemp={highTemp}
                sunrise={sunrise}
                sunset={sunset}
                />
            </div>:
            <></>
        }
            {showGraph && graphData.length > 0 ? 
                <div className={styles.chart}>
                    <Chart graphData={graphData}/>
                </div>:
                <></>
            }
        </>
    )
}

export default IndividualDay;
