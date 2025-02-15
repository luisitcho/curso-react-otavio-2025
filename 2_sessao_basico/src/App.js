import { Component } from 'react';

export default class App extends Component {

	state = {
		counter: 0,
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
	};

	timeoutUpdate = null;

	handleTimeout = () => {
		const { posts, counter } = this.state;
		posts[0].title = 'O titulo mudou';

		// Simulando uma chamada assíncrona
		this.timeoutUpdate = setTimeout(() => {
			this.setState({ counter: counter + 1 });
		}, 1000);
	}

	componentDidMount() {
		this.handleTimeout();
		// Chama o método handleTimeout() para iniciar o monitoramento do tempo
		// Isso pode envolver a configuração de um setTimeout ou setInterval.
	}



	componentDidUpdate() {
		clearTimeout(this.handleTimeout());
		this.handleTimeout();
		// Chama o método handleTimeout() após cada renderização para garantir
		// que o monitoramento do tempo continue funcionando corretamente após a atualização.
	}

	componentWillUnmount() {
		clearTimeout(this.handleTimeout());
		// Chama o clearTimeout() para cancelar o monitoramento do tempo quando o componente é desmontado.
	}



	render() {
		const { posts, counter } = this.state;

		return (
			<div className="App">
				<div className="container">

					<p className="counter">{counter}</p>

					{posts && posts.map((post) => (
						<div key={post.id}>
							<h3 className="title text-2xl font-bold">{post.title}</h3>
							<p className="body font-medium">{post.body}</p>
						</div>
					))}
				</div>
			</div>
		);
	}
}
