import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePost, getPost, setEdit, updatePost } from '../redux/features/PostSlice';
import Spinner from './Spinner';

const Posts = () => {


  const [id, setId] =useState();
  const [textBody, setTextBody] = useState(" ")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading, post,body,edit} = useSelector(state => ({...state.app}));

  useEffect(()=> {
    if(body){
      setTextBody(body)
    }
  },[body])

  const handleFetchData = (e) =>{
    e.preventDefault();
    if(! id){
      window.alert('Please Provide Post Id')
    }else{
      dispatch(getPost({id}));
      getPost(" ");
    }
    //console.log(id);
  };
  // handle Delete
  const handleDelete = ({id}) =>{
    dispatch(deletePost({id: post[0].id}));
    window.location.reload();
    window.alert("Post Delete")
  };

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
    <div className="container text-center">
      {

        loading ? <Spinner></Spinner> :(
          <>
              {post.length > 0 && (
                <>
                <div className="card mt-4" >
                  <div className="card-body">
                    <h5 className="card-title">{post[0].title}</h5>
                    {edit ? (<>
           
                      <textarea 
                        className="form-control" 
                        value={textBody}
                        onChange = {(e) => setTextBody(e.target.value)}
                        id="floatingTextarea"
                        defaultValue={" "}
                        >
                     </textarea>
                    
                        <div className=" d-flex align-items-end justify-content-end">
                            <button className="btn btn-primary"
                            onClick={() =>{ dispatch(updatePost({
                              id:post[0].id,
                              title:post[0].title,
                               body:textBody
                               }))
                               dispatch(setEdit({edit:false, body:""}))
                               }}>Save</button>
                            <button className="btn btn-danger ms-4"
                             onClick={()=>dispatch(setEdit({edit:false, body:""})) }
                             >Cancel</button>
                        </div>
                    </>):(
                      <>
                           <p className="card-text">{post[0].body}</p>
                      </>
                    )}
                      {!edit && (
                        <div className=" d-flex align-items-end justify-content-end">
                          <button className="btn btn-primary" onClick={()=> dispatch(setEdit({edit:true, body:post[0].body}))}>Edit</button>
                          <button className="btn btn-danger ms-4" onClick={handleDelete}>Delete</button>
                      </div>
                      )}
                          
                   

                  </div>
                </div>
                </>
              )}

          </>
        )

      }
    </div>
   </>
  )
}

export default Posts