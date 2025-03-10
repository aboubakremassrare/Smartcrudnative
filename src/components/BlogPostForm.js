import React , {useState} from 'react';
import { View,Text, StyleSheet,TextInput,Button } from 'react-native';

const BlogPostForm = ({onSubmit,initialValues}) => {

    const [title,setTitle]=useState(initialValues.title);
    const [content,setContent]=useState(initialValues.content);
    
  return (
    <View>
        <Text style={styles.label}>Enter Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
        <Text style={styles.label}>Enter Content</Text>
        <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)}/>
        <Button title="Add Blog Post" onPress={() => onSubmit(title,content)}/>
    </View>
);

};

//declarer blog default parametres
BlogPostForm.defaultProps = {
    initialValues:{
        title:'',
        content:''
    }

}

//Styles
const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom:5,
        marginLeft:5
      },
      input:{
          fontSize:18,
          borderWidth:1,
          borderColor:'black',
          marginBottom:15,
          padding:5,
          margin:5,
      }
});

export default BlogPostForm;
