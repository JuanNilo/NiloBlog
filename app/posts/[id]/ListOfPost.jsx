import Link from 'next/link.js'
import { LikeButton } from './LikeButton.jsx'
import styles from './listOfPost.module.css'

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 60 }
    })
    .then(res => res.json())
}


export  async function ListOfPosts(){
    const posts = await fetchPosts() 

    return posts.slice(0,5).map(post => (
        <article  key={post.id} className={styles.article}>
            <Link href='/posts/[id]' as={`/posts/${post.id}`}>
            <h2 style={{color:'#09f'}} className={styles.h2} >{post.title}</h2>
            <p> {post.body}</p>
            </Link>
            <LikeButton id={post.id} />
        </article>

)
    )
}