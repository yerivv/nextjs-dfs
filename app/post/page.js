import Link from "next/link";

const fetchPosts = async () => {
  const response = await fetch("http://localhost:5000/post", {cache: "no-store"});
  return response.json();
}

//게시판에 있는 정보
//

const PostsList = async () => {
  const posts = await fetchPosts();
  return (
    <>
    <h2>게시판</h2>
    <ul>
      {posts.map((item, index) => {
        return (
          <li key={index} className={item.display == true ? '' : 'dd'}>
            <Link href={`/post/${item.id}`}>
              <p>제목 : {item.title}</p>
              <p>상세 : {item.content}</p>
              <p>작성자 : {item.writer}</p>
            </Link>
          </li>
        )
      })}
    </ul>
    <button><Link href="/post/create">새글쓰기</Link></button>
    </>
  )
}

export default PostsList