import { Post } from "@/pages/Interfaces/IPost";
import {useEffect, useState} from "react";
import {getPosts} from "@/pages/api/posts";

export const Posts = () => {
    const [posts, setPosts] = useState([])
    const getData = async () => {
        return await getPosts()
    }

    useEffect(() => {
        getData().then((posts: Array<Post>) => setPosts(posts))
    }, [])

    return (
        <ul>
            {posts.map((post: Post) => {
                return <li key={post.id}>{ post.title }</li>
            })}
        </ul>
    )
}
