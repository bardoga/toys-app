import React from "react"
import { login } from "../store/actions/user.action"
import { HashRouter as Link } from 'react-router-dom'
import { connect } from "react-redux"

export class _Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: '',
        },
        isSignup: false,
    }

    clearState = () => {
        const clearTemplate = {
            credentials: {
                username: '',
                password: '',
            },
            isSignup: false,
        }
        this.setState({ clearTemplate })
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState({
            credentials: { ...this.state.credentials, [field]: value },
        })
    }

    onLogin = (ev) => {
        ev.preventDefault()
        if (
            !this.state.credentials.username ||
            !this.state.credentials.password
        )
            return
        this.props.login(this.state.credentials)
        this.clearState()
    }

    toggleSignup = () => {
        this.setState({ isSignup: !this.state.isSignup })
    }


    moveToSignup = () => {
        this.props.history.push('/signup')

    }


    render() {
        const { username, password } = this.state.credentials
        const { isSignup } = this.state
        const { user } = this.props
        return (
            <section className="login">
                {user && <h1>Logout before you login</h1>}
                {!isSignup && !user && (
                    <form onSubmit={(ev) => this.onLogin}>
                        <input
                            type='text'
                            name='username'
                            value={username}
                            placeholder='Username'
                            onChange={this.handleChange}
                            required
                            autoComplete='off'
                            autoFocus
                            style={{ margin: '7px' }}
                        />
                        <input
                            type='password'
                            name='password'
                            value={password}
                            placeholder='Password'
                            onChange={this.handleChange}
                            required
                            autoComplete='off'
                            style={{ margin: '7px' }}
                        />
                        <button onClick={this.onLogin} variant='contained'>
                            Login!
                        </button>
                    </form>
                )}
                {!isSignup && !user && (
                    <>
                        <h2>Don't have an account? <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={this.moveToSignup}>Register Here!</span></h2>
                        {/* <Link to='/signup'>Signup</Link> */}
                    </>

                )}
            </section>
        )
    }
}







const mapStateToProps = (storeState) => {
    return {
        user: storeState.userModule.user,
        toys: storeState.toyModule.toys,
    }
}

const mapDispatchToProps = {
    login,
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login)
