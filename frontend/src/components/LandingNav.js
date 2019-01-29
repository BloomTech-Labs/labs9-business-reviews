import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import SearchBar from './SearchBar';

const NavBar = styled.div`
	width: 100%;
	height: 600px;
	background-image: url('https://images.unsplash.com/photo-1512805147242-c3e79caf64bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	@import url('https://fonts.googleapis.com/css?family=Patua+One:300,500');
	@media (max-width: 900px) {

	}
	.blur-container {
		width: 100%;
		height: 75px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    box-sizing: border-box;    
    margin-bottom: 70px;
		.top-nav-items {
      box-sizing: border-box;
      max-width: 1200px;
      height: auto;
			display: flex;
			padding-top: 20px;
			margin: 0 auto;
			.menu__menuItems {
				width: 50%;
				height: auto;
				display: flex;
				align-items: center;
				@media (max-width: 900px) {
					width: 100%;
					flex-direction: row;
					font-size: 2.6rem;
				}
				a {
					font-size: 1.4rem;
					box-sizing: border-box;
					color: white;
					width: 100%;
					text-decoration: none;
					text-align: center;
					margin: 10px;
					@media (max-width: 900px) {
						color: white;
						font-size: 1rem;
						padding: 5px;
						margin: 0;
					}
				}
			}
			.menu__user {
				box-sizing: border-box;
				color: black;
				width: 50%;
				display: flex;
				justify-content: flex-end;
				
				@media (max-width: 900px) {
				box-sizing: border-box;
					display: flex;
					justify-content: flex end;
					width: 100%;
					color: white;
					margin: 0;
				}
				.menu__user--text {
					text-decoration: none;
					font-size: 1.4rem;
					color: white;
					margin: 10px;
					@media (max-width: 900px) {
						color: white;
						font-size: 1rem;
					}
				}
			}
		}
	}
	.inner-nav-container {
		max-width: 1200px;
		height: auto;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row wrap;
		font-family: 'Patua One';
		@media (max-width: 900px) {
			flex-direction: column;
			padding: 0;
		}
		.menu__logo--logo {
			height: 225px;
      width: 225px;
      margin-bottom: 30px;
			border-radius: 50%;
			@media (max-width: 900px) {
				height: 225px;
				width: 225px;
				margin-bottom: 20px;
				margin-top: 20px;
				border-radius: 50%;
			}
		}
	}
`;

function LandingNav() {
	return (
		<NavBar>
			<div className="blur-container">
				<div className="top-nav-items">
					<div className="menu__menuItems">
						<a href="/addreview">add a review</a>
						<a href="/categories">categories</a>
						<a href="/toprated">top rated</a>
					</div>
					<div className="menu__user">
						<Link to="/login" className="menu__user--text">
							sign in
						</Link>
						<a href="/register" className="menu__user--text">
							sign up
						</a>
					</div>
				</div>
			</div>
			<div className="inner-nav-container">
				<a href="/">
					<img src={logo} alt="logo" className="menu__logo--logo" />
				</a>
				<SearchBar />
			</div>
		</NavBar>
	);
}

export default LandingNav;
