import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { backendLink } from '../assets/config';
import { Link } from 'react-router-dom';
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
	.nav_links {
		display: flex;
		justify-content: space-between;
		width: 50%;
		height: auto;
	}
	a,
	p {
		color: white;
		text-decoration: none;
		cursor: pointer;
	}
	img {
		border-radius: 100px;
	}
	.menu__user {
		display: flex;
		justify-content: space-between;
		width: 15%;
		margin-right: 20px;
	}

	@media (max-width: 900px) {
		flex-direction: column;
		height: 500px;
		align-items: center;
		justify-content: center;
		.logo {
			width: 200px;
			height: 200px;
			margin: 0 auto;
		}
		.nav_links {
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			height: 40%;
			margin-top: 20px;
		}
		.menu__user {
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			height: 20%;
			padding-left: 15px;
			margin-bottom: 15px;
		}
	}
`;

class NavBar extends React.Component {
	state = { user: {}, loggedIn: false };
	handleLogout = async () => {
		const res = await axios.get(`${backendLink}/api/user/logout`, {
			withCredentials: 'include'
		});
		res.status === 200 ? this.setState({ loggedIn: false }) : console.log('Error Logging Out');
	};
	async componentDidMount() {
		const res = await axios.get(`${backendLink}/api/user/me`, {
			withCredentials: 'include'
		});
		if (!res.data.user) return this.setState({ loggedIn: false });
		const [ user ] = res.data.user;
		this.setState({ user, loggedIn: true });
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
					{!this.state.loggedIn ? (
						<React.Fragment className="fragment">
							<Link to="/login" className="menu__user--text">
								sign in
							</Link>
							<Link to="/register" className="menu__user--text">
								sign up
							</Link>
						</React.Fragment>
					) : (
						<p onClick={this.handleLogout}>sign out</p>
					)}
				</div>
			</NavBarStyles>
		);
	}
}

export default NavBar;
