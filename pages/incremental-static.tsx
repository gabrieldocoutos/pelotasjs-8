import { PrismaClient, Post } from '@prisma/client'

const prisma = new PrismaClient({ log: ['query'] })

interface ComponentProps {
  posts: Post[]
}

export default function Static ({ posts }: ComponentProps) {
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

export async function getStaticProps() {

  const posts = await prisma.post.findMany()
  
  return {
    props: { posts },
    revalidate: 10
  }
}