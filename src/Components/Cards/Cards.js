import React from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from "./card.module.css";



const Cards = (props) => {
    const { indexValue, cardList, place, longitude, latitude, weather, humidity, lowTemp, highTemp, sunrise, sunset } = props;
    const [daySunrise, dateSunrise, timeSunrise] = sunrise;
    const [daySunset, dateSunset, timeSunset] = sunset;
    const days = [
        {when: "Today"},
        {when: "Tomorrow", style: styles.root1},
        {when: "overmorrow", style: styles.root2},
        {when: "Two days later", style: styles.root3},
        {when: "Three Days Later", style: styles.root4},
        {when: "Four Days Later", style: styles.root5}
    ];
    return (
        <div>
            {cardList ?
                <Link key={days.indexValue} className={styles.Link} exact
                    to={{
                        pathname: `/id=${indexValue}`,
                        state: {place, longitude, latitude, weather, humidity, lowTemp, highTemp, sunrise, sunset }
                        }}>
                    <div className={days[indexValue].style}>
                        <IndividualCard 
                        place={place}
                        longitude={longitude}
                        latitude={latitude}
                        weather={weather}
                        humidity={humidity}
                        lowTemp={lowTemp}
                        highTemp={highTemp}
                        sunrise={`${daySunrise} ${dateSunrise} ${timeSunrise} `}
                        sunset={`${daySunset} ${dateSunset} ${timeSunset} `}
                        />
                    </div>
                </Link> :
                <IndividualCard 
                place={place}
                longitude={longitude}
                latitude={latitude}
                weather={weather}
                humidity={humidity}
                lowTemp={lowTemp}
                highTemp={highTemp}
                sunrise={`${daySunrise} ${dateSunrise} ${timeSunrise} `}
                sunset={`${daySunset} ${dateSunset} ${timeSunset} `}
                />
                }
        </div>
    )
}

const IndividualCard = ( props ) => {
    const { place, longitude, latitude, weather, humidity, lowTemp, highTemp, sunrise, sunset } = props;

    return (
            <Card className={` ${styles.MuiPaperRounded} `}>
                <CardActionArea>
                    <CardMedia
                    className={styles.media}
                    image={require (`../../Images/${weather}.png`)}
                    title="Weather"
                    />
                    <CardContent>
                        <Typography className={styles.cardTitle} gutterBottom variant="h5" component="h3">
                            {place} - {longitude}, {latitude}
                        </Typography>
                        <Typography component="p">
                            Humidity - {humidity}°C
                        </Typography>
                        <Typography component="p">
                            Low Temp. - {lowTemp}°C
                        </Typography>
                        <Typography component="p">
                            High Temp. - {highTemp}°C
                        </Typography>
                        <Typography component="p">
                            {sunrise}
                        </Typography>
                        <Typography component="p">
                            {sunset}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    )
}


export default Cards;