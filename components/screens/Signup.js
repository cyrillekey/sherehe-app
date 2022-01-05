import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet,Image, Text, View ,TextInput,TouchableOpacity,Alert,ImageBackground,CheckBox} from "react-native";



const Signup = (props,{navigation}) => {
  const [phone, setPhone] = useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  return (
    
        <ImageBackground style={style.container} source={{uri:'https://images.unsplash.com/photo-1609330579483-2a25134ec64f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxb3VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'}}>
        <Image style={style.image} source={{uri: 'https://image.shutterstock.com/image-vector/bar-lettering-illustration-label-badge-260nw-1034296870.jpg',}}/>
        <Text style={style.welcome}>Welcome to sherehe</Text>
        <Text style={style.login}>Signup to start</Text>
        
        <StatusBar style="auto"/>
        <View style={style.inputView}>
            <TextInput
                style={style.TextInput}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                defaultValue={email}
                onChangeText={(email)=>setEmail(email)}
                autoComplete="email"
                keyboardType="email-address"
                
            />
        </View>
        <View style={style.inputView}>
            <TextInput
                style={style.TextInput}
                placeholder="Phone Number"
                placeholderTextColor="#003f5c"
                defaultValue={phone}
                onChangeText={(phone)=>setPhone(phone)}
                keyboardType="phone-pad"
                
            />
        </View>
        <View style={style.inputView}>
            <TextInput
                style={style.TextInput}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                defaultValue={password}
                onChangeText={(password)=>setPassword(password)}
            />
        </View>
        <TouchableOpacity style={style.loginBtn} onPress={()=>{Alert.alert("Hello world","Error occured",[{
            text:"Cancel",
            onPress:()=>{console.log("Login button")},
            style:"cancel"
        },{
            text:"OK",
            onPress:()=>{console.log("ok pressed")},
            style:"OK"
        }])}}>
            <Text style={style.loginTxt}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={style.forgt_btn}> Forgot password</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={style.footer} onPress={()=>props.navigation.navigate("login")}>Dont have an account ?</Text>
        </TouchableOpacity>
        </ImageBackground>
    
  );
};
const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        // justifyContent:"center",
    },
    image:{
        marginTop:70,
        width:160,
        height:160,
        borderRadius:80,
        marginBottom:1,
    },
    inputView:{
        backgroundColor:"#F9F7F5",
        borderRadius:10,
        width:"80%",
        height:50,
        marginBottom:20,
        alignItems:"center",
        opacity:0.9
    },
    TextInput:{
        height:50,
        flex:1,
        padding:10,
        marginLeft:20,
        width:'100%',
        
    },
    forgt_btn:{
        height:25,
        marginTop:20,
        fontSize:17,
        color:"#fff",
    },
    loginBtn:{
        width:"80%",
        borderRadius:20,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15,
        backgroundColor:"#D4af37"
    }
    ,background:{
    width:'100%',
    height:'100vh'
    },
    welcome:{
        marginBottom:10,
        fontSize:32,
        color:"#dbe8f7",
        fontWeight:"bold",
        textAlign:'center'
    },
    login:{
        fontSize:17,
        color:"#fff",
        marginBottom:15
    },
    footer:{
        marginTop:20,
        color:"white",
        fontSize:17
    },
    loginTxt:{
        fontSize:18,
        fontWeight:'bold',
        color:"#fff"
    }
});
export default Signup;
