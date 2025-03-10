import React ,{useState,useContext} from 'react';
import { View,Text, StyleSheet,TextInput,Button } from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({navigation}) => {

    const {addblogPost}= useContext(Context);

    return <BlogPostForm
    onSubmit={(title,content) =>{
      addblogPost(title,content,() => navigation.navigate('Index'))
    }}
     />

};

const styles = StyleSheet.create({});

export default CreateScreen;
