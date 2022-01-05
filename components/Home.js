import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { View ,Text,Image}from "react-native";
import Swiper from 'react-native-swiper';

const Home=()=>{
    return(
        <View>
            <StatusBar/>
            <View style={styles.sliderContainer}>
            <Swiper>
            <View style={styles.slide}>
                <Image source={require('./Images/main.jpg')} resizeMode="cover" style={styles.sliderImage}/>
            </View>
            <View style={styles.slide}>
                <Image source={require('./Images/main.jpg')} resizeMode="cover" style={styles.sliderImage}/>
            </View>
            <View style={styles.slide}>
                <Image source={require('./Images/main.jpg')} resizeMode="cover" style={styles.sliderImage}/>
            </View>
            </Swiper>
            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    sliderContainer:{
        height:170,
        width:'90%',
        marginTop:10,
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:8
    },
    wrapper:{

    },
    slide:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"transparent",
        borderRadius:8
    },
    sliderImage:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        borderRadius:8
    }
});
export default Home;