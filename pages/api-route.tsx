import { useEffect, useState } from 'react'
import { Post } from '@prisma/client'


function Api () {
  const [posts, setPosts] = useState<Post[] | null>(null)

  useEffect(() => {
    async function fetchData() {
        const response = await fetch('api/posts')
        const json = await response.json()
        setPosts(json)
    }    
    
    fetchData()
  }, [])

  if (!posts) return <div>loading..</div>
  
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.description}</p>
        </div>
      ))}
      
    </div>
  )
}

export default Api