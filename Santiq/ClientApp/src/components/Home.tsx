import React from 'react'; 

type Props = {
    time: Date
}

interface State {
    id: string;
    service: string;
}

export class Home extends React.Component<Props, State> {

    state: State;

    constructor(props: Props) {
        super(props);
        this.state = { id: '', service: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        this.setState({ id: event.target.value });
    }

    login() {
        console.log(this.state);
        fetch('api/login?value=' + this.state.id, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
        });/*
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });*/
    }

    componentWillMount() {
    }

    componentDidMount() {
        // this.state = { id: "",  };
    }

    render() {

        const { service } = this.state;
        const { id } = this.state;

        return (
            <div>
                <React.Fragment>
                    <h1>Log in</h1>
                    <div>
                        <select value={service} onChange={(e) => this.setState({ service: e.target.value })} className="ui dropdown">
                            <option value="EZShild">EZShild</option>
                            <option value="Identity Force">Identity Force</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <input type="text" name="id" value={id} id="id" onChange={this.handleChange} />
                    </div>
                    <br />
                    <button type="button"
                            className="btn btn-primary btn-lg"
                            onClick={() => { this.login(); }}>
                        Submit
                    </button>
                </React.Fragment>
            </div>
        );
    }
}

export default Home;