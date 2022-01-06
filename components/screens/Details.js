import React,{useState} from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = (props) => {
const [count,setCount]=useState(0);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
          <View style={{height:'40%'}}>
          <Swiper height={'100%'}>  
      <View style={style.imageContainer}>
        <Image source={{uri: 'https://thumbs.dreamstime.com/b/jack-daniels-tennessee-whiskey-bottle-casks-jack-daniels-tennessee-whiskey-small-bottle-casks-background-180208272.jpg'}} style={{resizeMode: 'cover', flex:1,width:'100%'}} />
      </View>
      <View style={style.imageContainer}>
        <Image source={{uri: 'https://thumbs.dreamstime.com/b/jack-daniels-tennessee-whiskey-bottle-casks-jack-daniels-tennessee-whiskey-small-bottle-casks-background-180208272.jpg'}} style={{resizeMode: 'cover',flex:1,width:'100%' }} />
      </View>
      <View style={style.imageContainer}>
        <Image source={{uri: 'https://thumbs.dreamstime.com/b/jack-daniels-tennessee-whiskey-bottle-casks-jack-daniels-tennessee-whiskey-small-bottle-casks-background-180208272.jpg'}} style={{resizeMode: 'cover',flex:1,width:'100%'}} />
      </View>
      </Swiper>
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={style.line} />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Bourbun</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Kes 1250
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10,marginBottom:20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at orci id ipsum ullamcorper blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText} onPress={()=>{
                    if(count>0){
                    setCount(count-1)
                    }
                    }}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                {count}
              </Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText} onPress={()=>{setCount(count+1)}}>+</Text>
              </View>
            </View>

            <View style={style.buyBtn}>
              <Text
                style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
    
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: '#fff',
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: 'black',
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: 'green',
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  swiper:{
      borderWidth:200

  },
});

export default DetailsScreen;
