import React, { useState, useRef, useLayoutEffect } from 'react';
import axios from "axios";
import styles from "./home.module.css";
import Cards from '../Cards/Cards';
import Search from '../Search/Search';


const Home = () => {
    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [country, setCountry] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [showCards, setShowCards] = useState(false);
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const [dailyData, setDailyData] = useState([]);
    const firstUpdate = useRef(true);
    const api_key_cordi = "cd95049f63651ccdec53d505fbb2a9f8";
    const api_key_weather = "0c696ec6fa2c35f0d62d8c3423ffdf67";
    const numberOfCards = [1,2,3,4,5];
    const suffix = "000";

    //// FUNTION TO STORE THE PLACE VALUE
    const onValueChange = (e) => {
        setValue(e.target.value)
    }
    
    // FUNTION TO STORE THE SELECTED COUNTRY VALUE
    const countryHandler = (e) =>{
        const country = e.target.value
        setCountry(country)
    }

    // FUNCTION TO RUN ON SUBMIT
    const onSubmitHandler = (e) =>{
        setInputValue(value);
        setIsBoxVisible(true);
        e.preventDefault();
        getCordinates();
    }
    
    // TO GET CORDINATES USING THE INPUT VALUE
    const getCordinates = async () => {
        axios.get(`http://api.positionstack.com/v1/forward?access_key=${api_key_cordi}&query=${value}&country=${country}&limit=1`)
        .then((response) => {
            if(response.data.data.length === 0){
                window.alert("Location name or Country incorrect")
            }else{
                setLongitude(response?.data.data[0].longitude);
                setLatitude(response?.data.data[0].latitude);
                
            }
        });
    };
    
    // USELAYOUTEFFECT FOR NOT MAKING IT RUN ON RENDER BUT ONLY WHEN LONGITUDE AND LATITUDE IS SET, AND THEN CALL getWeather
    useLayoutEffect(() => {
        if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
        }
        getWeather();
    },[longitude && latitude]);

    // GETTING WEATHER DATA USING THE LONGITUDE AND LATITUDE GOTTEN FROM PREVIOUS RESPONSE
    const getWeather = async () => {
        await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key_weather}`
        )
        .then((response) => {
                setIsBoxVisible(false);
                setDailyData(response.data.daily);
                setShowCards(true);
        });
    }

    // THE DATE AND TIME FORMAT GOTTEN IN RESPONSE IS IN EPOCH TIME, SO BELOW TWO FUNCTIONS CONVERT IT 
    const epochConvertSunrise = ( sunrise ) => {
        const epochDateSunrise = sunrise;
        const currentEpochDateTimeSunrise = epochDateSunrise+suffix;
        const ans = new Date(parseInt(currentEpochDateTimeSunrise));
        const daySunrise = ans.toString().substring(0, 3);
        const dateSunrise = ans.toString().substring(4, 15);
        const timeSunrise = ans.toString().substring(16, 24);
        const values = [ daySunrise, dateSunrise, timeSunrise ]
        return values;
    }

    const epochConvertSunset = ( sunset ) => {
        const epochDateSunset = sunset;
        const currentEpochDateTimeSunset = epochDateSunset+suffix;
        const ans = new Date(parseInt(currentEpochDateTimeSunset));
        const daySunset = ans.toString().substring(0, 3);
        const dateSunset = ans.toString().substring(4, 15);
        const timeSunset = ans.toString().substring(16, 24);
        const values = [ daySunset, dateSunset, timeSunset ]
        return values;
    }

    return (
        <div>
            <Search
            value={value}
            onValueChange={onValueChange}
            countryHandler={countryHandler}
            onSubmitHandler={onSubmitHandler}
            />
            <div className={styles.cards}>
            {showCards ?
                numberOfCards.map(card => {
                    return( 

                        <Cards
                            key={card}
                            indexValue={card}
                            cardList={true}
                            place={inputValue.toString()}
                            longitude={longitude.toString()}
                            latitude={latitude.toString()}
                            weather={dailyData[card].weather[0].main.toString()}
                            humidity={dailyData[card].humidity.toString()}
                            lowTemp={dailyData[card].temp.min.toString()}
                            highTemp={dailyData[card].temp.max.toString()}
                            sunrise={epochConvertSunrise(dailyData[card].sunrise)}
                            sunset={epochConvertSunset(dailyData[card].sunset)}
                        />
                    )
                }) 
                
                : <h1 className={`${isBoxVisible ? styles.wait : styles.hidden}`}> Please Wait... </h1>}
            </div>
            
        </div>
    )
}

export default Home;
