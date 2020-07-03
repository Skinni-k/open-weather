import React, { useState, useRef, useLayoutEffect } from 'react';
import axios from "axios";
import styles from "./home.module.css";
import Cards from '../Cards/Cards';
import Search from '../Search/Search';
import { debounce } from "lodash";


const Home = () => {
    const [value, setValue] = useState("");
    const [placeList, setPlaceList] = useState([]);
    const [dailyData, setDailyData] = useState([]);
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [showCards, setShowCards] = useState(false);
    const firstUpdate = useRef(true);
    const api_key_cordi = "b600f7b8e65061&q";
    const api_key_weather = "0c696ec6fa2c35f0d62d8c3423ffdf67";
    const numberOfCards = [1,2,3,4,5];
    const suffix = "000";

    //// FUNTION TO call getCordinates only when length is above 3 THE PLACE VALUE
    const onValueChange = (e) => {
        if(e.target.value.length > 3){
            getCordinates(e.target.value)
        }
    }

    // TO GET CORDINATES USING THE INPUT VALUE
    const getCordinates = debounce( async (place) => {

        axios.get(`https://api.locationiq.com/v1/autocomplete.php?key=${api_key_cordi}&q=${place}`)
        .then((response)=> {
            setPlaceList(response.data);
        })
        .catch((e)=>{
            window.alert("ENTER CORRECT LOCATION")
        })
    },400);

    // WHEN PLACE IS SELETECTED, SET STATE AND CALL WEATHER API
    const onPlaceSelect = (e, value) => {
        if(value !== null){
            setLongitude(value.lon);
            setLatitude(value.lat);
            setValue(value.display_place);
        }else{
            setShowCards(false);
            console.log("HERE")
        }
    }
    
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
        axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key_weather}`
        )
        .then((response) => {
                setDailyData(response.data.daily);
        });
    }

    // FUNCTION TO RUN ON SUBMIT
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        if(longitude.length > 0 && longitude.length > 0){
            setShowCards(true);
        }else{
            window.alert("Please Select location from dropdown")
        }
    }

    // THE DATE AND TIME FORMAT GOTTEN IN RESPONSE IS IN EPOCH TIME, SO BELOW TWO FUNCTIONS CONVERT IT 
    const epochConvertion = ( timeframe ) => {
        const epochDate = timeframe;
        const currentEpochDateTime = epochDate+suffix;
        const ans = new Date(parseInt(currentEpochDateTime));
        const day = ans.toString().substring(0, 3);
        const date = ans.toString().substring(4, 15);
        const time = ans.toString().substring(16, 24);
        const values = [ day, date, time ]
        return values;
    }

    return (
        <div>
            <Search
            onValueChange={onValueChange}
            placeList={placeList}
            onPlaceSelect={onPlaceSelect}
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
                            place={value?.toString()}
                            longitude={longitude?.toString()}
                            latitude={latitude?.toString()}
                            weather={dailyData[card]?.weather[0]?.main?.toString()}
                            humidity={dailyData[card]?.humidity?.toString()}
                            lowTemp={dailyData[card]?.temp?.min?.toString()}
                            highTemp={dailyData[card]?.temp?.max?.toString()}
                            sunrise={epochConvertion(dailyData[card]?.sunrise)}
                            sunset={epochConvertion(dailyData[card]?.sunset)}
                        />
                    )
                }) 
                : <></>}
            </div>
            
        </div>
    )
}

export default Home;
