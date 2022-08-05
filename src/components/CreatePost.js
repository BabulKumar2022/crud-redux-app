import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../redux/features/PostSlice';
import Spinner from './Spinner';



const CreatePost = () => {

    const [values, setValues] = useState({title: "", body: ""});
    const [showPost, setShowPost] = useState(false);
    const {loading, post} = useSelector(state => ({...state.app}))
    const {title, body} = values;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // handle post function
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createPost({ values}));
        setValues({title: '', body: ''});
        setShowPost(true);
        
    }

    //show createPost
    const showCreatePost = () =>{
        return(
            <>
            {loading ? <Spinner></Spinner>:(
                <div className="card mt-4" >
                <div className="card-body">
                  <h5 className="card-title">{post[0].title}</h5>
                  <p className="card-text">{post[0].body}</p>
                </div>
              </div>
            )}
            </>
        )
    }
    return (
    <div className="row container d-flex align-items-center justify-content-center mt-4">
        <div className="col-md-8">
            <h2 className='text-center bg-dark text-white p-2'>Add Your Information</h2>
            <form action="">
                <div className="mb-3">
                    
                    <input 
                    type="text"
                    value={title}
                    onChange={(e)=> setValues({...values, title: e.target.value})}
                    placeholder='Enter Post Title'
                     className="form-control"
                      id="exampleInputEmail1"
                       aria-describedby="emailHelp"/>
                   
                </div>
                <div className="form-floating">
                    <textarea 
                        className="form-control" 
                        value={body}
                        onChange={(e)=> setValues({...values, body: e.target.value})}
                        placeholder="Add Post Description"
                        id="floatingTextarea"
                        defaultValue={" "}
                        >
                     </textarea>
                    <label for="floatingTextarea">Add Post Description</label>
                </div>
                <div className="mt-4 d-flex align-items-end justify-content-end">
                       <button className="btn btn-primary" onClick={()=> navigate('/')}>Go Home</button>
                      <button className="btn btn-danger ms-4"
                       type="submit"
                       onClick={handleSubmit}
                       >Submit</button>
                </div>
            </form>
            <div className="mt-4">
                {showPost && <div>{showCreatePost()}</div>}
            </div>
         </div>
    </div>
         

    );
};

export default CreatePost;