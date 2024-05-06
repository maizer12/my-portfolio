<ul className='articles'>
	{res.map(e => (
		<li className='articles-item' key={e.id}>
			<div className='articles-item__top'>
				<h2>{e.id}</h2>
				<h4>{e.title}</h4>
			</div>
			<Link href={'/post/' + e.id} className='articles-item__link'>
				more info
			</Link>
		</li>
	))}
</ul>;
const fetchData = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const result = await res.json();
	return result;
};
const res = await fetchData();
