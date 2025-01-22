import './styles.css';
import { useEffect, useState, useCallback } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const Home = () => {
	// state = {
	// 	posts: [],
	// 	allPosts: [],
	// 	page: 0,
	// 	postsPerPage: 10,
	// 	searchValue: '',
	// }
	const [posts, setPosts] = useState([]);
	const [allPosts, setAllPosts] = useState([]);
	const [page, setPage] = useState(0);
	const [postsPerPage] = useState(10);
	const [searchValue, setSearchValue] = useState('');

	const noMorePosts = page + postsPerPage >= allPosts.length;
	const filteredPosts = !!searchValue ?
		allPosts.filter((post => {
			return post.title.toLowerCase().includes(searchValue.toLowerCase());
		}))
		: posts;


	const hundleLoadPosts = useCallback(async (page, postsPerPage) => {
		const postsAndPhotos = await loadPosts();

		setPosts(postsAndPhotos.slice(page, postsPerPage))
		setAllPosts(postsAndPhotos)

	}, [])

	useEffect(() => {
		hundleLoadPosts(0, postsPerPage);
	}, [hundleLoadPosts, postsPerPage]);


	const loadMorePosts = () => {
		const nextPage = page + postsPerPage;
		const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
		posts.push(...nextPosts);

		setPosts(posts);
		setPage(nextPage);
	}

	const hundleChange = (e) => {
		const { value } = e.target;
		setSearchValue(value);
	}

	return (
		<section className='container'>
			{!!searchValue && (
				<h2>Valor buscado: {searchValue}</h2>
			)}

			<Input onChange={hundleChange} value={searchValue} />

			{filteredPosts.length > 0 && (
				<Posts posts={filteredPosts} />
			)}

			{filteredPosts.length === 0 && (
				<p>Não existem posts</p>
			)}

			{!searchValue && (
				<Button onClick={loadMorePosts} text={'Carregar posts'} disabled={noMorePosts} />
			)}
		</section>
	);
}

// export class Home2 extends Component {
// 	state = {
// 		posts: [],
// 		allPosts: [],
// 		page: 0,
// 		postsPerPage: 10,
// 		searchValue: '',
// 	}

// 	async componentDidMount() {
// 		await this.loadPosts();
// 	}

// 	loadPosts = async () => {
// 		const { page, postsPerPage } = this.state

// 		const postsAndPhotos = await loadPosts();
// 		this.setState({
// 			posts: postsAndPhotos.slice(page, postsPerPage),
// 			allPosts: postsAndPhotos,
// 		})

// 	}

// 	loadMorePosts = () => {
// 		const {
// 			page,
// 			postsPerPage,
// 			allPosts,
// 			posts
// 		} = this.state;
// 		const nextPage = page + postsPerPage;
// 		const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

// 		posts.push(...nextPosts);
// 		this.setState({ posts, page: nextPage });
// 	}

// 	hundleChange = (e) => {
// 		const { value } = e.target;
// 		this.setState({ searchValue: value });

// 		console.log(value);
// 	}

// 	// componentDidUpdate() {
// 	// }

// 	// componentWillUnmount() {
// 	// }

// 	render() {
// 		const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
// 		const noMorePosts = page + postsPerPage >= allPosts.length

// 		const filteredPosts = !!searchValue ?
// 			allPosts.filter((post => {
// 				return post.title.toLowerCase().includes(searchValue.toLowerCase());
// 			}))
// 			: posts;

// 		return (
// 			<section className='container'>
// 				{!!searchValue && (
// 					<h2>Valor buscado: {searchValue}</h2>
// 				)}

// 				<Input onChange={this.hundleChange} value={searchValue} />

// 				{filteredPosts.length > 0 && (
// 					<Posts posts={filteredPosts} />
// 				)}

// 				{filteredPosts.length === 0 && (
// 					<p>Não existem posts</p>
// 				)}

// 				{!searchValue && (
// 					<Button onClick={this.loadMorePosts} text={'Carregar posts'} disabled={noMorePosts} />
// 				)}
// 			</section>
// 		);
// 	}
// }
// function App() {
//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           {1 + 1}
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             {/* Edit <code>src/App.js</code> and save to reload. */}
//             Olá mundo!
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>

//       <div>oioi</div>
//     </>
//   );
// }

