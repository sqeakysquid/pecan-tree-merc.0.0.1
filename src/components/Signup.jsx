import React from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default class Signup extends React.Component {

    userData;

    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            open: true,
            email: ""
        }
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onSubmit(e) {
        e.preventDefault()
        this.onCloseModal()
        console.log(localStorage)
    }

    componentDidMount() {

        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                email: this.userData.email
            })
        } else {
            this.setState({
                email: ''
            })
        }

    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        const { open } = this.state;
        return (
            <div>
                <Modal
                    open={open}
                    center
                    onClose={this.onCloseModal}
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}
                >
                    <div className="signup">
                        <div className="container">
                            <form>
                                <div className="form-container">
                                    <h1>Sign Up</h1>
                                    <p>Fill out your email to receive 15% off!</p>
                                    <label htmlFor="email"><b>Email: </b></label>
                                    <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.onChangeEmail} required />
                                    <div className="clearfix">
                                        <button type="button" className="cancelbtn">Cancel</button>
                                        <button type="submit" className="signupbtn" onClick={this.onSubmit}>Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div >
                    </div >
                </Modal>
            </div >
        );
    }
}
