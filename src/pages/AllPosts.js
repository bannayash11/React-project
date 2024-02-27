import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

  return (
<main className="container__main-page main__content">
<div className="spacer__container">
    <div className='all-posts'>
        <Container>
            
                {posts.map((post) => (
                    <div key={post.$id} className=''>
                        <PostCard {...post} />
                    </div>
                ))}
            </Container>
    </div>
</div>
</main>    
  )
}

export default AllPosts