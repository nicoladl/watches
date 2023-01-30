// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import { Post } from "@/pages/Interfaces/IPost";

export async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json()
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Post>>
) {
    const data = await getPosts()
    res.status(200).json(data)
}