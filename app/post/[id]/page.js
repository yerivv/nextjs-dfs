import Link from "next/link";

const PostsDetail = async (props) => {
  const id = props.params.id;
  const response = await fetch(`http://localhost:5000/post/${id}`, {cache: "no-store"});
  const post = await response.json();

  return (
    <>
    <h2>{post.title}</h2>
    <p>작성자 : {post.writer} {post.regDate === '' ? '' : ' / 작성일 : ' + post.regDate} </p>
    <div>{post.content}</div>

    <button><Link href="/post/">목록</Link></button>
    </>
  )
}

export default PostsDetail