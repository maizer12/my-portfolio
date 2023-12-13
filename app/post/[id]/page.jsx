const fetchData = async id => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
	const result = await res.json()
	return result
}

const Post = async ({ params }) => {
	const res = await fetchData(params.id)
	return (
		<div className='post-page container'>
			<div className='post'>
				<h4 className='post__name'>{res.title}</h4>
				<h6 className='post__name'>{res.body}</h6>
				<a href='/' className='post__btn'>
					Home
				</a>
			</div>
		</div>
	)
}

export default Post
