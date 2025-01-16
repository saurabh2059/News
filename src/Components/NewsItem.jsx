import React from 'react'
import image from '../assets/imgerror.png'
function NewsItem({title,description,src,url,urlToImage}) {
  return (
   <>
   <div className="card bg-dark text-light  d-inline-block mb-3 my-3 mx-3 p-2" style={{maxWidth: '345px'}}>
  <img src={src?src:image} style={{ height:"200px", width:"320px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi quam repellendus eius tempora pariatur  "}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>

</>
  )
}

export default NewsItem
