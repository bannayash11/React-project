import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
       
      <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
      <h2 className='text-xl font-bold' >{title}</h2>
    </Link>
  )
}


export default PostCard