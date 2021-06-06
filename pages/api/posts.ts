// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Post } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse<Post[]>) => {
  const posts = await prisma.post.findMany()
  res.status(200).json(posts)
}
