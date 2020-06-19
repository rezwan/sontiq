import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as LoginStore from '../store/LoginStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Col, Form, Row,
    FormGroup, Label, Input,
    Button
} from 'reactstrap';
type LoginProps = LoginStore.ILoggedInUserState &
    typeof LoginStore.actionCreators &
    RouteComponentProps<{}>;

class Login extends React.PureComponent<LoginProps> {

    constructor(props: any) {
        super(props);
    }
    state = {
        loginId: "",
        provider: ""
    }

    handleChange(e: any) {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e: any) {
        e.preventDefault();
        this.props.submitLogin(this.state.loginId, this.state.provider);
    }

    public render() {
        const { loginId, provider } = this.state;
        return (
            <React.Fragment>
                <Container className="App">
                    <Form className="form">
                        <h1>Log inn</h1>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <FormGroup>
                                    <Label>Portal Name</Label>
                                    <select className="ui dropdown" name="provider" onChange={(e: any) => this.handleChange(e)} >
                                        <option value="1">EZShild</option>
                                        <option value="2">Identity Force</option>
                                    </select>

                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <FormGroup>
                                    <Label for="examplePassword">User ID</Label>
                                    <Input type="text" className="form-control" value={loginId} name="loginId" placeholder="User ID" onChange={(e: any) => this.handleChange(e)} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <Button type="button"
                                    className="btn btn-lg"
                                    onClick={(e: any) => this.handleSubmit(e)}>
                                    Submit
                                 </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.loggedInUser,
    LoginStore.actionCreators
)(Login as any);