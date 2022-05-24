import React from "react"
import { connect } from "react-redux"
import { HashRouter as Link } from 'react-router-dom'

import { logout } from "../store/actions/user.action"
import { loadToys, removeToy, saveToy } from "../store/actions/toy.action"


class _AppHeader extends React.Component {
    componentDidMount() {
        this.props.loadToys()
    }

    onLogout = () => {
        this.props.logout()
    }

    render() {
        const { user } = this.props
        return (
            <header>
                {/* <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                    <Link to='/toys'>Toys</Link>
                </nav> */}
                {user && (
                    <section className='user-info'>
                        <p>
                            Welcome, {user.fullname}{' '}
                        </p>
                        <button onClick={this.onLogout}>
                            Logout
                        </button>
                    </section>
                )}
            </header>
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
    logout,
    loadToys
}

export const AppHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(_AppHeader)
