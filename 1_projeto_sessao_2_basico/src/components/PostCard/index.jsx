import './styles.css';

export const PostCard = ({ post }) => (
    <div className="post" key={post.id} data-list={post.id}>
        <img src={post.cover} alt={post.title} />
        <div className='post-content'>
            <p>ID: {post.id}</p>
            <h3 data-title={post.id}>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    </div>
)

// const postsResponse = fetch('https://fakestoreapi.com/products');
// const cartsResponse = fetch('https://fakestoreapi.com/carts')
// const [posts, carts] = await Promise.all([postsResponse, cartsResponse]);
// const postsJson = await posts.json();
// const cartsJson = await carts.json();

// this.setState({ posts: postsJson, carts: cartsJson });

// console.log(postsJson)

// <div className="post" key={post.id} data-list={post.id}>
// 	{console.log(post)}
// 	<img src={post.image} alt={post.title} />
// 	<div className='post-content'>
// 		<h3 data-title={post.id}>{post.title}</h3>
// 		<br />
// 		<h4>price {post.price.toLocaleString('en-US', { style: 'currency', currency: 'BRL' })}</h4>
// 		<br />
// 		<br />


// 		<p>{post.description}</p>
// 	</div>
// </div>