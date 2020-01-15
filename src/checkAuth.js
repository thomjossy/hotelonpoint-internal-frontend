import { Redirect, Route } from 'react-router-dom'

import React from 'react'
import { connect } from 'react-redux'

const CheckAuth = ({component: Component, authenticated, ...rest}) => (
    <Route 
        {...rest}
        render = {(props) => authenticated === false ? <Redirect to='/unauthenticated' /> : <Component {...props} />}
    />
)

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(CheckAuth)