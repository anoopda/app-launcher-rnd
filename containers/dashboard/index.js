import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Linking,
} from 'react-native';
import IconBtn from '../../components/iconBtn';
import { appDetails } from '../../json/appDetails.js';
export default class DashBoard extends Component {

    generateIcons = () => {
        return appDetails.map((item) => {
            return <IconBtn iconData={item} onPressIcon={this.onPressIcon} />
        });
    }

    onPressIcon = (appDetails) => {
        this.openApp(appDetails,"urlSchema")
    }


    openApp = (appDetails, key) => {
        Linking.canOpenURL(appDetails[key]).then(supported => {
            if (!supported) {
                this.openApp(appDetails, "packageName")
            }
            else {
                Linking.openURL(appDetails[key]).then((result) => {

                })
                    .catch((err) => {

                    });
            }
        });
    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {this.generateIcons()}
            </View>
        )
    }
}




// onBtnPress = () => {
//     Linking.canOpenURL(url).then(supported => {
//       console.log("Supported --->",supported);
//       if (!supported) {

//         Linking.canOpenURL("market://details?id="+"com.facebook.katana").then(supported => {

//           if (!supported) {

//           }
//           else{
//             Linking.openURL("market://details?id="+"com.facebook.katana").then((result)=>{

//             });
//           }
//         });

//         console.log('Can\'t handle settings url');
//       } else {
//         console.log("entered condition@1");
//         Linking.openURL(url).then((result)=>{
//           console.log("OPEN URL RESULT ---->",result);
//         }).catch((err)=>{
//             console.log("OPEN URL ERROR ---->",err);
//         });
//       }
//     }).catch(err => console.error('An error occurred', err));
//   }