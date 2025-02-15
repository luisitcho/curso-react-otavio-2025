import { Component } from 'react';

export default class App extends Component {

	state = {
		posts: [
			{
				id: 1,
				title: 'O título 1',
				body: 'O corpo 1'
			},
			{
				id: 2,
				title: 'O título 2',
				body: 'O corpo 2'
			},
			{
				id: 3,
				title: 'O título 3',
				body: 'O corpo 3'
			},

		]
	}

	render() {
		const { posts } = this.state;

		return (
			<div className="App">

				{posts && posts.map((post) => (
					<div key={post.id}>
						<h3 className="title text-2xl font-bold">{post.title}</h3>
						<p className="body font-medium">{post.body}</p>
					</div>
				))}
			</div>
		);
	}
}
