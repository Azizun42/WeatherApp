import React from 'react'
import { _View } from 'react-native'

export default function Forecast(props){
    return(
        <View>
            <Text>{props.name}</Text>
            <Text>{props.description}</Text>
            <Text>{props.temp}</Text>
            <Text>°C</Text>
        </View>
    )
}