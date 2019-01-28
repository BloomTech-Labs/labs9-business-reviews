import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { backendLink } from '../assets/config';

const NavBar = styled.div`
	width: 100%;
	height: auto;
	@import url('https://fonts.googleapis.com/css?family=Quicksand:300,500');
	background-color: #eed974;
	@media (max-width: 900px) {
		background-color: white;
	}
	.inner-nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		font-family: 'Quicksand';
		@media (max-width: 900px) {
			flex-direction: column;
			padding: 0;
		}
		.menu__logo--logo {
			height: 150px;
			width: 150px;
			border-radius: 50%;
			@media (max-width: 900px) {
				height: 400px;
				width: 400px;
				margin-bottom: 20px;
				margin-top: 20px;
				border-radius: 0;
			}
		}
		.menu__menuItems {
			width: 60%;
			height: auto;
			font-size: 1.4rem;
			display: flex;
			align-items: center;
			flex-direction: row;
			text-transform: uppercase;

			@media (max-width: 1130px) {
				font-size: 1rem;
			}

			@media (max-width: 900px) {
				width: 100%;
				flex-direction: column;
				font-size: 2.6rem;
			}
			a {
				box-sizing: border-box;
				color: black;
				width: 100%;
				text-decoration: none;
				text-align: center;
				margin: 10px;
				@media (max-width: 900px) {
					background: #142e41;
					color: white;
					padding: 5px;
					margin: 0;
				}
			}
			a:hover {
				letter-spacing: 2px;
				border-top: 1px solid white;
				border-bottom: 1px solid white;
				transition: all 280ms ease-in-out;
			}
		}
		.menu__user {
			box-sizing: border-box;
			color: black;
			width: 15%;
			padding: 10px;
			@media (max-width: 900px) {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				background: #142e41;
				color: white;
				margin: 0;
			}
			.menu__user--login {
				text-decoration: none;
				color: black;
				margin-right: 30px;

				@media (max-width: 1130px) {
					font-size: 0.7rem;
				}

				@media (max-width: 900px) {
					color: white;
					:hover {
						letter-spacing: 2px;
						border-top: 1px solid white;
						border-bottom: 1px solid white;
						transition: all 280ms ease-in-out;
					}
				}
			}
			.menu__user--signup {
				text-decoration: none;
				border: 2px solid black;
				padding: 8px;
				color: black;
				margin-right: 30px;

				@media (max-width: 1130px) {
					font-size: 0.7rem;
					border: 1px solid black;
					padding: 2px;
				}

				@media (max-width: 900px) {
					color: white;
					:hover {
						letter-spacing: 2px;
						border-top: 1px solid white;
						border-bottom: 1px solid white;
						transition: all 280ms ease-in-out;
					}
				}
      }
      .menu__user--logout {
        cursor: pointer;
      }
		}
	}
`;

class LandingNav extends React.Component{
  state= {
    loggedIn:false
  }
  handleLogout=()=>{
    Axios.get(`${backendLink}/api/user/logout`, {withCredentials:"include"}).then(res => console.log("success", res.status)).catch(err => console.log('unable to logout', err));
    this.setState({loggedIn:false})
  }  
	getCreds = async () => {
		const res = await Axios.get(`${backendLink}/api/user/me`, {
			withCredentials: 'include'
		});
    if (!res.data.user) return null
    else{
      console.log('user logged in', res.data.user)
      this.setState({loggedIn:true})
    }
	};
  componentDidMount() {
    this.getCreds();
  }  
	render() {
		return (
			<NavBar>
				<div className="inner-nav-container">
					<Link to="/">
						<img src={logo} alt="logo" className="menu__logo--logo" />
					</Link>
					<div className="menu__menuItems">
						<Link to="/addreview">add a review</Link>
						<Link to="/categories">categories</Link>
						<Link to="/toprated">top rated</Link>
					</div>
					<div className="menu__user">
            {this.state.loggedIn?<p onClick={this.handleLogout} to="/logout" className="menu__user--logout">Logout</p>:
            <>
            <Link to="/login" className="menu__user--login">Login</Link>
						<Link to="/register" className="menu__user--signup">Sign Up</Link>
            </>}						
					</div>
				</div>
			</NavBar>
		);
	}
}

export default LandingNav;
