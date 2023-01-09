import Image from 'next/image'
import styles from './comments.module.css'
const fetcComments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json())
}


export default async function Post ({params}){
    const { id } = params
    const comments = await fetcComments(id)
    return(
        
        <ul>
            {comments.slice(0,4).map(comment=>(
                <li style={{listStyle:'none'}} key={comment.id}>
                    <small>
                    <div className={styles.container}>
                    <Image className={styles.imagen} width='65' height = '65' alt={comment.name} src={`https://avatars.dicebear.com/api/open-peeps/${comment.email}.svg`}  />
                    <h2 style={{color:'#993126'}}>{comment.email}</h2>
                    </div>
                    <p className={styles.comentario}>{comment.body}</p>
                    </small>
                </li>
            ))}
        </ul>
    )
}