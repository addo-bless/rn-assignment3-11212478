import React from 'react';

import { StyleSheet, Text, View,ScrollView, SafeAreaView, Image, TextInput, FlatList} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
const DATA = [{
    id: '1',
    title: 'Mobile Development',
  },
  {
    id: '2',
    title: 'App Development',
  },
  {
    id: '3',
    title: 'Push Ups',
  },
  {
    id: '4',
    title: 'Study room',
  },
  {
    id: '5',
    title: 'Complete assignment',
  },
  {
    id: '6',
    title: 'Algorithm and Data stuctures',
  },
  {
    id: '7',
    title: 'Fitness',
  },
  {
    id: '8',
    title: 'Code',
  },
  {
    id: '9',
    title: 'Interim assessment',
  },
  {
    id: '10',
    title: 'Workout plan',
  },
  {
    id: '11',
    title: 'Software development',
  },
  {
    id: '12',
    title: 'Metro bundler',
  },
  {
    id: '13',
    title: 'Cookies',
  },
  {
    id: '14',
    title: 'Cache',
  },
  {
    id: '15',
    title:'cook',
  }
]

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export default function App(){
  
  return (

      <View>
        <SafeAreaView>
          {/* <ScrollView> */}
        <View style={styles.item}>
          <Text style={styles.boldText}>Hello , Devs</Text>
        <Text style={styles.normalText}>14 tasks today</Text>
        <Image source ={{uri:"https://ouch-cdn2.icons8.com/D3q8fCp3QbzypA6R4avBgts4NnyISPxNsvIh6763-PA/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTQ0/LzM5ZGI2N2JlLWQx/NjEtNDBjMy05YmY4/LWIxMjRkMTI0NzQ3/MS5wbmc.png"}}
        style={styles.icon}/>
        </View>

        {/* Searchbar */}
        {/* <View style={styles.searchBar}>
          <TextInput placeholder=' Search.....? ' styles={styles.searchBar}/>
           </View> */}
           {/* searchSection */}
           <View style={styles.searchSection}>
            <Ionicons
            style={styles.searchIcon}
            name="search" size={20} color='#000'
           />
           <TextInput style={styles.input} placeholder='Search'
          //   onChangeText={(searchString) => {this.setState({searchString});}}
          //  underlineColorAndroid='transparent'
           />
           </View>
           <Image source={{uri:"https://cdn.dribbble.com/users/1466638/screenshots/6960051/comp-1.gif"}}
           style={styles.filter}/>
           {/* Categories */}
           <Text style={styles.textCategories}>Categories</Text>
           <Image source={{uri: "https://ouch-cdn2.icons8.com/GQ1wS92S6x0iyNvFIaaXN4eWAj_wbl3W9NsYR3oD1yU/rs:fit:368:379/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQw/LzdkYjNlZmY0LTY2/ZTQtNDA3Yi1iMDU1/LTljYjNmYTdmYjI5/OS5wbmc.png"}}
           style={styles.categoryImage}/>
           <Text style={styles.textBold}>Exercise</Text>
           <Text style={styles.textTask}>12 Tasks</Text>
           <Image source={{uri: "https://ouch-cdn2.icons8.com/03SeSdIC3u0ZveWvis118-iKSm4ZeL2Pnmn_SrJqDzg/rs:fit:368:330/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjk2/L2U4ZDBlMzIxLTc1/MGItNGU5Yi1hNjUw/LTU2ZmI1Nzk4M2Vk/MC5wbmc.png"}}
           style={styles.cateIcon}/>
           <Text style={styles.studyBold}>Study</Text>
           <Text style={styles.taskNormal}>12 Tasks</Text>
           {/* ongoing title */}
           <Text style={styles.OngoingBold}>Ongoing Task</Text>
        <FlatList
        numColumns={1}
        horizontal={false}
        extraData={5}
        refreshing={true}
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
       
               

           
           
        {/* </ScrollView> */}
        </SafeAreaView>
      </View>
   )
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'tan',
    justifyContent: 'center',
   alignContent: 'center',

      
  
  },
 boldText:{
  fontWeight: 'bold',
  fontSize: 28,
  paddingLeft: -150,
  top: -110,
 },
 normalText:{
  fontSize: 14,
  paddingLeft: -10,
  bottom: 115,
 },
 icon: {
  width: 50,
  height: 50,
  position: 'absolute',
  top: -110,
  right: -5,
  borderBlockColor: 'blue',
  borderRadius: 5,
},
searchSection:{
  flex:2,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignContent:'flex-start',
  backgroundColor: 'teal',
  borderEndWidth: 1,
  borderRadius: 1,
  bottom: 15,
  fontWeight:'semibold'

},
searchIcon:{
  padding:10,
},
input:{
  flex:1,
  paddingTop: 10,
  paddingRight:10,
  paddingBottom: 10,
  paddingLeft:0,
fontSize:20,
fontWeight:'medium'
},
// textInput: {
//   fontSize: 20,
//   color: "#FFFFFF",
//   borderBottomWidth: 0.5,
//   borderBottomColor: "#FFFFFF",
//   width: 50,

textCategories:{
  fontSize: 18,
  fontWeight: 'semibold',
  bottom: -110,
  paddingLeft: 15,
},
filter:{
  width: 70,
  height: 70,
  position: 'absolute',
  top: 110,
  right: 10,
  
},
categoryImage:{
  width:150,
  height:150,
  left: 15,
  bottom: -116,
  borderWidth: 1,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 10,
  borderBottomEndRadius: 10,
  borderTopLeftRadius : 10,
  borderBlockColor: 'rose',


},
textBold:{
fontSize: 11,
fontWeight: 'semibold',
top: -30,
paddingLeft: 20,
},
textTask:{
  fontSize: 10,
  fontWeight: 'thin',
  top: -30,
  paddingLeft: 20,
},
cateIcon:{
  width:150,
  height:150,
  position: 'absolute',
  left: 220,
  top: 289,
  borderWidth: 1,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 10,
  borderBottomEndRadius: 10,
  borderTopLeftRadius : 10,
  borderBlockColor: 'orange',
},
studyBold:{
  fontSize: 12,
  fontFamily: 'bold',
  left: 320,
  top: -53,
},
taskNormal:{
  fontSize:10,
  fontWeight: 'thin',
  left: 310,
  top: -55,
},
OngoingBold:{
  fontSize: 20,
  fontWeight: 'bold',
  bottom: -100,
  paddingLeft: 20,
},
item: {
  backgroundColor: 'rose',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
  bottom:-110,
  borderWidth: 1,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 10,
  borderBottomEndRadius: 10,
  borderTopLeftRadius : 10,
  borderBlockColor: 'tan',

},
title: {
  fontSize: 30,
  bottom: 1,
},


 })
