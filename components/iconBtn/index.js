import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


export default class IconBtn extends Component {

    onBtnPress = (iconData) =>{
        this.props.onPressIcon(iconData)
    }
    

    render() {
        const {iconData} = this.props;
        return (
            <TouchableOpacity style={{
                width: 100, height: 50,
                backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom:10
            }} onPress={() => { this.onBtnPress(iconData) }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>{iconData.appName}</Text>
            </TouchableOpacity>
        )
    }


}