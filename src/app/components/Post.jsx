import Link from 'next/link'
import React from 'react'

const Post = ({ title, body }) => {
	return (
		<div className='post'>
			<h4 className='post__name'>{title}</h4>
			<h6 className='post__name'>{body}</h6>
			<Link href='/' className='post__btn'>
				Home
			</Link>
		</div>
	)
}

export default Post
