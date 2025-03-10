import React, {useContext} from 'react';
import { View,Text, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
 const {state,addblogPost,deleteblogPost}=useContext(Context);

  return (

      <View>
          <FlatList
          data={state}
          keyExtractor={blogPost => blogPost.title}
          renderItem={({item})=>{
              return  (
              <TouchableOpacity onPress={() => navigation.navigate('Show',{id:item.id})}>
                <View style={styles.row}>
                   <Text style={styles.title}>{item.title}</Text>
                   <TouchableOpacity onPress={() => deleteblogPost(item.id)}>
                   <Feather name="trash" style={styles.icon} />
                   </TouchableOpacity>
                </View>
              </TouchableOpacity>

              
              );
          }}
          />
      </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight:(
      <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
       <Feather name="plus" style={styles.iconHeader} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:20,
    paddingHorizontal:10,
    borderTopWidth:1,
    borderColor:'gray'
  },
  title:{
    fontSize:18
  },
  icon:{
    fontSize:24,
    color:'orange'

  },
  iconHeader:{
    fontSize:30,
    color:'#ffffff'
    
  }

});

export default IndexScreen;
