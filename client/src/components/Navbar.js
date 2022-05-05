import React from 'react'

function Navbar() {
    return (
        <div className='m-5'>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        My GFG Articles
                    </a>
                    <form class="d-flex">
                        <button class="btn btn-outline-success m-2" type="submit">
                            Login
                        </button>
                        <button class="btn btn-outline-success m-2" type="submit">
                            Sign Up
                        </button>
                    </form>
                    {/* <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
