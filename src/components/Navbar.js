import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li> */}
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

           <div className="form-check form-switch my-1">
           <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
           </div>
          </div>
        </div>
      </nav>
    )
}

// Used just to avoid erros further in the project. (Tell which type of props to be accepted)
//isRequired --> o that something is passed orelse it will show error.
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
}

//Normally i will pass props to this componenet but if i dont than pass these. 
Navbar.defaultProps={
    title: "Set title here",
    about: "About"
}

//When we are passing things(variables), into a componenet we do it through props. We pass props in the function and call the particular properties by props.property1


// `  ` -> this is a template lietral. You can use JS by $ sign to use nay variable