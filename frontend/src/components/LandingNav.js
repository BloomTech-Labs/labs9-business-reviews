import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { backendLink } from '../assets/config';

const NavBar = styled.div`

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
