import { TPost } from "../types/Types"


// or  (props:{title:string,desc:String})
const PostCard = ({title,body}:TPost) => {
  return (
    <section className="card">
        <h3>{title}</h3>
        <p>{body}</p>
    </section>
  )
}

export default PostCard