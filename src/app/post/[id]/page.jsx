import Post from '@/app/components/Post'

const fetchData = async id => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
	const result = await res.json()
	return result
}

export async function generateMetadata({ params }) {
	const post = await fetchData(params.id)
	return {
		title: post.title.substring(0, 20) + '...',
		description: post.body,
	}
}

export default async function PostPage({ params }) {
	const res = await fetchData(params.id)
	return (
		<div className='post-page container'>
			<Post {...res} />
		</div>
	)
}
