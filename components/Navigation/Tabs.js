import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Text,StyleSheet,View,Image, TouchableOpacity } from 'react-native';

const Tab=createBottomTabNavigator();
import Home from '../Home'
const CustomTabButton=({children,onPress})=>(
    <TouchableOpacity style={{
        top:-30,
        justifyContent:'center',
        alignItems:'center',
        ...style.shadow
    }}
    onPress={onPress}>
        <View style={{
            width:70,
            height:70,
            borderRadius:35,
            backgroundColor:"#e32f45"
        }}>
            {children}
        </View>

    </TouchableOpacity>
);
const Tabs=()=>{
    return(
        <Tab.Navigator
    
        screenOptions={{
            "tabBarStyle":[
                {
                    position:"absolute",
                    bottom:15,
                    left:10,
                    right:10,
                    elevation:0,
                    backgroundColor:"#fff",
                    height:70,
                    borderRadius:15,
                    ...style.shadow
                }
            ],
            tabBarShowLabel:false,
            headerStyle:{
                backgroundColor:"#fff"
            },
            headerTintColor:"#333",
            headerTitleStyle:{
                fontWeight:'bold',
                textAlign:"center",
            },headerTitleContainerStyle:{
                width:'70%'
            },
            headerLeft:()=>( <Text>Home</Text>
            )
        }}
        >
            <Tab.Screen name='homes' component={Home} options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                        <Image source={require('../Images/icons/icons8-poolside-bar-30.png')} resizeMode='contain' style={{
                            width:25,
                            height:25,
                            tintColor: focused ?'#e32f45':"#745c94"
                        }}/>
                        <Text style={{color:focused ?"#e32f45":"#745c94",fontSize:12}}>Home</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name='homer' component={Home}
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                        <Image source={require('../Images/icons/icons8-poolside-bar-30.png')} resizeMode='contain' style={{
                            width:25,
                            height:25,
                            tintColor: focused ?'#e32f45':"#745c94"
                        }}/>
                        <Text style={{color:focused ?"#e32f45":"#745c94",fontSize:12}}>Home</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name='homere' component={Home} options={{
                tabBarIcon:({focused})=>(
                    <Image source={require('../Images/icons/icons8-create-order-50.png')} resizeMode='contain' style={{
                        width:30,
                        height:30,
                        tintColor: "#fff"
                    }}/>
                ),
                tabBarButton:(props)=>(
                    <CustomTabButton {...props} />
                )
            }}/>
            <Tab.Screen name='homerr' component={Home}
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                        <Image source={require('../Images/icons/icons8-poolside-bar-30.png')} resizeMode='contain' style={{
                            width:25,
                            height:25,
                            tintColor: focused ?'#e32f45':"#745c94"
                        }}/>
                        <Text style={{color:focused ?"#e32f45":"#745c94",fontSize:12}}>Home</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name='homeere' component={Home}
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                        <Image source={require('../Images/icons/icons8-create-order-50.png')} resizeMode='contain' style={{
                            width:25,
                            height:25,
                            tintColor: focused ?'#e32f45':"#745c94"
                        }}/>
                        <Text style={{color:focused ?"#e32f45":"#745c94",fontSize:12}}>Home</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );   
}
const style=StyleSheet.create({
    shadow:{
        shadowColor:"#7f5fd0",
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
});
export default Tabs;