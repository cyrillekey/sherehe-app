import React from "react";
import { View,TouchableOpacity,StyleSheet,Image, Text} from "react-native";
const Card = (children) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
       >
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:true
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              {/* <Icon
                name="favorite"
                size={18}
                color={true ? 'red' : 'black'}
              /> */}
            </View>
          </View>

          <View
            style={{
              height: 150,
              alignItems: 'center',              
            }}>
            <Image
              source={ require('../Images/main.png')}
              style={{flex: 1, resizeMode: 'cover',width:150,borderColor:'red',height:200}}
              
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {children.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              Kes {children.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: 'green',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color:'white', fontWeight: 'bold'}}
                onPress={() =>children.children.navigation.navigate('details')}
                >
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  export default Card;
const style=StyleSheet.create({
    card: {
        height: 280,
        backgroundColor: 'white',
        width:'50%',
        marginHorizontal: 12,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        margin:12
      },
});