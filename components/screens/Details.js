import React,{useState,useRef} from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
const DetailsScreen = (props) => {

const [count,setCount]=useState(0);
  return (
    <ScrollView>
    <SafeAreaView
      
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
          <View style={{height:300}}>
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
                marginLeft: 30,
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
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
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
                style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}
                onPress={()=>console.log
                ("hello")}>
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
    
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
    height: 50,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28,width:'100%',textAlign:'center'},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: '#ff54ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: 'gold',
    width: 120,
    height: 50,
    justifyContent: 'center',
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  }
});

export default DetailsScreen;
