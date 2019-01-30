import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { backendLink } from '../assets/config';
import logo from '../assets/logo.png';

const NavBarStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 130px;
	background: #142e41;
	.logo {
		height: 100px;
		width: 100px;
		margin-left: 50px;
	}
	.nav-links {
		width: 50%;
		height: auto;
	}
	a,p {
		color: white;
		text-decoration: none;
		padding-left: 50px;
		margin-right: 100px;
    cursor:pointer;
	}
	img {
		border-radius: 100px;
	}
`;

class NavBar extends React.Component {
  state = { user: {} };
  handleLogout = () =>{

  }
	async componentDidMount() {
		const res = await axios.get(`${backendLink}/api/user/me`, {
			withCredentials: 'include'
		});
		if (!res.data.user) return null;
		const [ user ] = res.data.user;
		this.setState({ user });
	}
	render() {
		return (
			<NavBarStyles>
				<div className="logo_container">
					<a href="/">
						<img src={logo} alt="logo" className="logo" />
					</a>
				</div>
				<div className="nav_links">
					<a href="/addreview">add a review</a>
					<a href="/categories">categories</a>
					<a href="/toprated">top rated</a>
				</div>
				<div className="menu__user">
          {!this.state.user?<><Link to="/login" className="menu__user--text">sign in</Link><Link to="/register"className="menu__user--text">sign up</Link></>:<p>Sign Out</p>}					
				</div>
			</NavBarStyles>
		);
	}
}

export default NavBar;
