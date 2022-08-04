import React from 'react'

const Posts = () => {
  return (
    <>
    <div className="row container d-flex align-items-center justify-content-center mt-4">
       <div className="col-md-8">
           <form action="">
           <div className="mb-3">
           <label for="exampleInputEmail1" className="form-label">Search by ID</label>
           <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> </div>
           <button type="submit" className="btn btn-primary">Fetch Post</button>
           <button type="button" className="btn btn-info ms-4">Create Post</button>
           </form>
       
       </div>
    </div>
   </>
  )
}

export default Posts