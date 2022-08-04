import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPost } from '../redux/features/PostSlice';

const Posts = () => {


  const [id, setId] =useState();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleFetchData = (e) =>{
    e.preventDefault();
    if(! id){
      window.alert('Please Provide Post Id')
    }else{
      dispatch(getPost({id}));
      getPost(" ");
    }
    console.log(id);
  }

  return (
    <>
    <div className="row container d-flex align-items-center justify-content-center mt-4">
       <div className="col-md-8">
           <form action="">
           <div className="mb-3">
           <label for="exampleInputEmail1" className="form-label">Search by ID</label>
           <input type="number"
           value ={id}
           onChange = {(e) => setId(e.target.value)}
            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> </div>
           <button onClick={handleFetchData} type="submit" className="btn btn-primary">Fetch Post</button>
           <button onClick={()=> navigate('/createPost')} type="button" className="btn btn-info ms-4">Create Post</button>
           </form>
       
       </div>
    </div>
   </>
  )
}

export default Posts