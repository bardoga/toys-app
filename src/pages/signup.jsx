import React from "react"
import { signup } from "../store/actions/user.action.js"
import { connect } from "react-redux"

export class _Signup extends React.Component {

    state = {
        credentials: {
            username: '',
            password: '',
            fullname: ''
        },
        isSignup: true,
    }

    clearState = () => {
        const clear = {
            credentials: {
                username: '',
                password: '',
                fullname: ''
            },
            isSignup: false,

        }
        this.setState({ clear })
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState({
            credentials: { ...this.state.credentials, [field]: value },
        })
    }

    onSignup = (ev = null) => {

        if (
            !this.state.credentials.username ||
            !this.state.credentials.password ||
            !this.state.credentials.fullname
        )
            return
        if (ev) ev.preventDefault()
        console.log('this.state.credentials:', this.state.credentials)
        this.props.signup(this.state.credentials)
        this.clearState()
        this.props.history.push('/toys')
    }

    toggleSignup = () => {
        this.setState({ isSignup: !this.state.isSignup })
    }


    render() {
        const { username, password, fullname } = this.state.credentials
        const { isSignup } = this.state
        const { user } = this.props
        return (
            <section className="signup">
                <div className='signup-section'>
                    {isSignup && !user && (
                        <>
                            <h1>Sign up</h1>
                            <form
                                className='signup-form'
                                onSubmit={this.onSignup}
                            >
                                <input
                                    type='text'
                                    name='fullname'
                                    value={fullname}
                                    placeholder='Full Name'
                                    onChange={this.handleChange}
                                    required
                                    style={{margin:'7px'}}
                                />
                                <input
                                    type='text'
                                    name='username'
                                    value={username}
                                    placeholder='Username'
                                    onChange={this.handleChange}
                                    required
                                    style={{margin:'7px'}}
                                />
                                <input
                                    type='password'
                                    name='password'
                                    value={password}
                                    placeholder='Password'
                                    onChange={this.handleChange}
                                    required
                                    style={{margin:'7px'}}
                                />
                                <button
                                    onClick={this.onSignup}
                                >
                                    Signup!
                                </button>
                            </form>
                        </>
                    )}
                </div>
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
    signup,
}

export const Signup = connect(mapStateToProps, mapDispatchToProps)(_Signup)
