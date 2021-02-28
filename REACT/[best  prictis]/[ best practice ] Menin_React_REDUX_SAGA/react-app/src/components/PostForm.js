import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, showAlert, hideAlert } from "../redux/actions";
import { Alert } from "../components/Alert";

export class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        };
    }

    submitHandler = (event) => {
        event.preventDefault();

        const { createPost, showAlert, hideAlert } = this.props;

        const { title } = this.state;
        if (title.trim() === "") {
            showAlert();
            setTimeout(() => {
                hideAlert();
            }, 1500);
            return;
        }

        const newPost = {
            title: title,
            id: Date.now().toString(),
        };
        createPost(newPost);

        this.setState({
            title: "",
        });
    };

    changeInputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        const { alert } = this.props;
        return (
            <form onSubmit={this.submitHandler}>
                {alert ? <Alert /> : null}
                <div className='form-group'>
                    <label htmlFor='title' />
                    Заголовок поста
                    <input
                        type='text'
                        className='form-control'
                        id='title'
                        value={this.state.title}
                        name='title'
                        onChange={this.changeInputHandler}
                        autoComplete='off'
                    />
                </div>

                <button className='btn btn-success' type='submit'>
                    Срздать
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    createPost: createPost,
    showAlert: showAlert,
    hideAlert: hideAlert,
};
const mapStateToProps = (state) => {
    return {
        alert: state.app.alert,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
