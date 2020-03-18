import createDataContext from './createDataContext';

const blogReducer= (state,action) => {
    switch(action.type){

        case 'delete_blogpost':
            return state.filter(blogpost => blogpost.id !== action.payload);
        case 'add_blogpost':
            return [...state,
                {
                    id:Math.floor(Math.random()*99999),
                    title:action.payload.title,
                    content:action.payload.content
                }
            ];
        case 'edit_blogpost':
            return state.map(blogPost =>{
                return blogPost.id ===action.payload.id ? action.payload :blogPost;
            });
    
        default:
            return state;

    }
};

const addblogPost = (dispatch) =>{
    return (title,content,callback) => {
        dispatch({type:'add_blogpost',payload:{title,content}}); 
        //si le callbacl exist parfois declenche un erreur
        if(callback){

            callback();
        }
     
    }
  
};

const deleteblogPost = (dispatch) =>{
    return (id) => {
        dispatch({type:'delete_blogpost',payload:id}); 
    }
  
};

const editblogPost = dispatch =>{
    return (id,title,content,callback) => {
        dispatch({
            type:'edit_blogpost',
            payload:{id,title,content}
        }); 
        if(callback){
            callback();
        }
    }
  
};

export const {Context,Provider} = createDataContext(
    blogReducer,
    { addblogPost,deleteblogPost,editblogPost },
    [{id:1,title:'Test Post Nums1' , content:'Test Content Num1'}]

);



//methode 1

// import React, {useState} from 'react';


// const BlogContext = React.createContext();



// export const BlogProvider = ({children}) => {
//     const [blogPosts,setblogPosts] =useState([]);

//     const addblogPost = () =>{
//         setblogPosts([...blogPosts,{title:`Blog Post #${blogPosts.length +1}`}]);
//     }

// return <BlogContext.Provider value={{data:blogPosts,addblogPost}}>{children}</BlogContext.Provider>
// };

// export default BlogContext;
