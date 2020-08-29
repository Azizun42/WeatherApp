import React, { useState } from 'react'   
import { Text, ImageBackground } from 'react-native'             
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
    main: '-',
    description: '-',
    temp: 0
    }) 
    return(
        <ImageBackground source={require('../bg.jpg')}>
                <Forecast {...forecastInfo}/>
        </ImageBackground>
       
    )
}

const style = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%'

    }
})

