import{createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";


export const getPost = createAsyncThunk('post/getPosts',
async({id}) => {
    return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
});
///////////////--------------------------
export const deletePost = createAsyncThunk('post/getPosts',
async({id}) => {
    return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`,{
        method: "DELETE"
    })
    .then(res => res.json())
});
//-----------------------
export const createPost = createAsyncThunk('post/createPost',
async({values}) => {
    return fetch(`http://jsonplaceholder.typicode.com/posts`,{
        method: "POST",
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        },
        body: JSON.stringify({
            title:values.title,
            body: values.body
        })
    })
    .then(res => res.json())
});

const PostSlice = createSlice({
    name: 'post',
    initialState:{
        loading: false,
        post: [],
        error: null
    },
   extraReducers:{
        [getPost.pending]:(state,action) =>{
            state.loading = true
        },
        [getPost.fulfilled]:(state,action) =>{
            state.loading = false;
            state.post = [action.payload];
        },
        [getPost.rejected]:(state,action) =>{
            state.loading = false;
            state.error = action.payload

        },

//------------------
        [deletePost.pending]:(state,action) =>{
            state.loading = true
        },
        [deletePost.fulfilled]:(state,action) =>{
            state.loading = false;
            state.post = [action.payload];
        },
        [deletePost.rejected]:(state,action) =>{
            state.loading = false;
            state.error = action.payload

        },

        //---- createPost
        [createPost.pending]:(state,action) =>{
            state.loading = true
        },
        [createPost.fulfilled]:(state,action) =>{
            state.loading = false;
            state.post = [action.payload];
        },
        [createPost.rejected]:(state,action) =>{
            state.loading = false;
            state.error = action.payload

        },
    }
})

export default PostSlice.reducer;