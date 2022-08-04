import{createSlice, createAsyncThunk} from "@reduxjs/toolkit"


export const getPost = createAsyncThunk('post/getPosts',
async({id}) => {
    return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
}
)

const