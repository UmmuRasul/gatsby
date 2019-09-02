import React from 'react'
import {Link} from 'gatsby'

export default props => (
    <header>
        <h2>
        Workshop{''}
        {props.workshopNumber}
        </h2>
        <nav>
            <Link to={'/'}>home</Link>{''}
            <Link to={'/about'}>About</Link>
        </nav>
    </header>
)