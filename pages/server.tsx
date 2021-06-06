import { PrismaClient, Post } from '@prisma/client'

interface ComponentProps {
  posts: Post[]
}

const prisma = new PrismaClient({ log: ['query'] })

export default function Static ({ posts }: ComponentProps) {
  return (
    <div >
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const posts = await prisma.post.findMany()
  return {
    props: { posts }
  }
}