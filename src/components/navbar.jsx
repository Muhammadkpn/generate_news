import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap'

const NavbarReactstrap = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Navbar color="dark" light expand="md">
                <NavbarBrand className="text-white" href="/">Tutorial NewsAPI</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link className="text-white" to='/'>Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link className="text-white" to='/generate-news'>Generate News</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText className="text-white">Muhammadkpn</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarReactstrap