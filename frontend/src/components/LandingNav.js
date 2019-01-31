import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import {backendLink} from '../assets/config';
import background from '../assets/kitchen.jpg';
import SearchBar from './SearchBar';

const NavBar = styled.div`
  width: 100%;
  height: 600px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
				.menu__user--text, p {
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

	svg {
		filter: invert(1) sepia(0) saturate(0) hue-rotate(175deg);
	}
	@media(max-width:700px){
		height: 650px;
	}
`;

class LandingNav extends React.Component {
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
			<NavBar>
				<div className="blur-container">
					<div className="top-nav-items">
						<div className="menu__menuItems">
							<a href="/addreview">add a review</a>
							<a href="/categories">categories</a>
							<a href="/toprated">top rated</a>
						</div>
						<div className="menu__user">
            {!this.state.loggedIn ? (
						<React.Fragment>
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
					</div>
				</div>
				<div className="inner-nav-container">
					<a href="/">
						{/* <img src={logo} alt="logo" className="menu__logo--logo" /> */}

						<svg
							version="1.0"
							xmlns="http://www.w3.org/2000/svg"
							width="300"
							height="300"
							preserveAspectRatio="xMidYMid meet"
						>
							<g
								transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
							>
								<path d="M1325 2869 c-776 -100 -1300 -828 -1145 -1591 95 -464 430 -842 881
-992 148 -50 259 -67 429 -67 389 0 712 146 992 449 154 167 266 401 312 651
21 109 21 341 1 457 -72 409 -340 770 -712 958 -233 117 -510 166 -758 135z
m395 -43 c172 -33 344 -104 495 -204 92 -61 279 -248 342 -342 61 -92 122
-210 157 -308 31 -87 31 -92 8 -92 -14 0 -23 14 -35 58 -24 87 -120 271 -187
360 -70 93 -202 222 -290 284 -324 229 -749 290 -1130 162 -390 -130 -690
-443 -814 -846 -3 -10 -14 -18 -25 -18 -19 0 -19 2 4 69 112 332 355 610 668
767 119 60 288 107 457 128 63 8 273 -3 350 -18z m10 -51 c396 -79 750 -367
905 -738 23 -56 46 -114 49 -129 6 -26 4 -28 -22 -28 -25 0 -30 5 -41 43 -22
72 -88 206 -145 291 -175 260 -424 427 -756 508 -37 9 -118 13 -245 12 -173 0
-199 -3 -288 -27 -381 -102 -689 -378 -824 -737 -29 -79 -34 -85 -61 -88 l-30
-3 28 78 c160 449 560 775 1021 833 96 12 314 4 409 -15z m-43 -79 c302 -54
580 -231 751 -479 53 -77 145 -257 157 -309 l7 -28 -1120 0 -1121 0 25 68
c146 387 486 675 886 747 99 18 314 18 415 1z m1067 -863 c35 -127 38 -384 5
-540 l-10 -53 -1267 2 -1267 3 -12 65 c-24 125 -27 286 -9 409 10 63 20 119
22 123 3 4 574 8 1269 8 1195 0 1264 -1 1269 -17z m-2474 -680 c105 -320 351
-602 653 -747 86 -42 226 -88 322 -107 104 -21 369 -19 472 4 448 96 798 400
948 820 21 58 39 93 49 95 22 5 20 -10 -14 -106 -125 -354 -417 -652 -772
-786 -348 -130 -780 -97 -1093 86 -268 156 -467 387 -575 666 -43 110 -48 142
-26 142 9 0 23 -26 36 -67z m71 2 c61 -199 229 -429 412 -565 478 -356 1139
-312 1563 105 121 119 238 305 292 464 15 46 22 54 45 57 15 1 27 -1 27 -5 0
-20 -51 -154 -85 -221 -204 -408 -598 -667 -1061 -696 -119 -7 -289 13 -416
50 -376 110 -689 405 -822 774 -32 91 -32 98 0 97 23 0 28 -7 45 -60z m2245
31 c-9 -44 -88 -205 -140 -285 -55 -86 -186 -225 -276 -292 -134 -102 -330
-185 -505 -216 -132 -23 -347 -13 -478 21 -370 96 -662 355 -802 709 -18 47
-32 87 -30 89 2 2 506 3 1120 3 l1117 0 -6 -29z" />
								<path d="M1342 2493 c-18 -82 -23 -134 -16 -170 8 -44 70 -108 113 -118 30 -6
31 -8 31 -66 0 -56 -2 -60 -32 -79 -18 -11 -48 -23 -65 -26 -73 -14 -25 -24
113 -24 136 0 172 8 107 25 -16 3 -43 13 -60 22 -32 15 -33 17 -33 77 0 61 0
62 34 74 19 7 51 31 71 54 l38 41 -6 91 c-2 50 -10 103 -16 119 l-11 27 -129
0 -129 0 -10 -47z m248 -8 c0 -25 -1 -25 -85 -25 l-84 0 -8 -37 c-20 -101 -5
-145 59 -177 37 -19 35 -12 -8 37 -34 37 -36 43 -31 89 4 26 9 53 12 58 4 6
37 9 74 8 37 -1 72 1 77 5 7 4 11 -14 13 -46 1 -28 4 -53 6 -56 2 -2 -4 -20
-15 -40 -13 -26 -34 -46 -69 -64 -28 -14 -51 -22 -51 -17 0 6 -15 16 -33 24
-18 7 -46 28 -61 47 -27 32 -28 37 -22 104 11 123 3 115 122 115 l104 0 0 -25z" />
								<path d="M754 1628 c3 -13 6 -60 6 -104 l0 -82 43 0 c59 -2 73 5 87 38 25 60
-12 119 -66 106 -22 -6 -24 -3 -24 29 0 31 -3 35 -26 35 -22 0 -25 -3 -20 -22z
m102 -94 c9 -34 -11 -76 -34 -72 -17 3 -29 56 -18 84 9 24 45 16 52 -12z" />
								<path d="M1592 1638 c-7 -7 -12 -22 -12 -34 0 -12 -6 -25 -12 -28 -10 -5 -10
-7 0 -12 14 -7 17 -90 2 -99 -22 -13 -8 -25 29 -25 44 0 65 18 32 27 -17 4
-21 13 -21 49 0 40 2 44 25 44 14 0 25 5 25 10 0 6 -11 10 -25 10 -25 0 -31
14 -16 38 7 12 12 12 29 1 24 -15 37 -7 29 16 -8 18 -67 21 -85 3z" />
								<path d="M1732 1633 c4 -22 43 -25 43 -3 0 8 -11 16 -23 18 -19 3 -23 0 -20
-15z" />
								<path d="M2137 1643 c-4 -3 0 -15 10 -25 20 -22 13 -30 -29 -33 -39 -4 -58
-27 -58 -73 0 -61 12 -71 85 -71 49 1 65 4 65 15 0 8 -4 14 -10 14 -6 0 -10
37 -10 90 0 88 -1 90 -23 90 -13 0 -27 -3 -30 -7z m17 -126 c1 -45 -16 -66
-39 -47 -15 13 -21 71 -8 84 4 4 16 6 27 4 15 -2 19 -11 20 -41z" />
								<path d="M980 1572 c-17 -14 -23 -29 -23 -60 0 -54 16 -72 63 -72 47 0 74 28
74 77 0 63 -66 94 -114 55z m71 -35 c10 -23 -2 -77 -18 -77 -29 1 -46 40 -33
75 12 31 37 32 51 2z" />
								<path d="M1150 1575 c0 -8 5 -15 10 -15 6 0 10 -20 10 -44 0 -25 -4 -48 -10
-51 -21 -13 -9 -25 24 -25 l33 0 -1 58 c-1 51 1 57 19 57 16 0 21 -8 23 -39 2
-21 -1 -43 -7 -49 -20 -20 -12 -27 29 -27 38 0 52 12 30 25 -5 3 -10 25 -10
48 0 63 -9 71 -84 74 -52 2 -66 -1 -66 -12z" />
								<path d="M1385 1577 c-10 -8 -15 -19 -11 -25 9 -15 36 -16 36 -2 0 6 9 10 20
10 13 0 20 -7 20 -20 0 -15 -7 -20 -27 -20 -41 0 -55 -13 -51 -46 3 -29 4 -29
71 -31 53 -2 67 1 67 12 0 8 -4 15 -10 15 -5 0 -10 22 -10 50 0 38 -4 52 -19
60 -27 14 -64 13 -86 -3z m65 -91 c0 -8 -5 -18 -10 -21 -13 -8 -42 14 -34 26
9 15 44 10 44 -5z" />
								<path d="M1720 1576 c0 -8 5 -18 10 -21 6 -3 10 -24 10 -46 0 -21 -4 -39 -10
-39 -5 0 -10 -7 -10 -15 0 -10 11 -15 35 -15 34 0 46 12 25 25 -5 3 -10 33
-10 66 0 56 -1 59 -25 59 -15 0 -25 -6 -25 -14z" />
								<path d="M1843 1577 c-3 -6 -1 -13 5 -15 15 -5 16 -88 2 -97 -21 -13 -9 -25
24 -25 l33 0 -1 58 c-1 51 1 57 19 57 18 0 20 -6 19 -57 l-1 -58 33 0 c33 0
45 12 24 25 -5 3 -10 28 -10 55 0 28 -5 52 -12 57 -21 12 -127 13 -135 0z" />
								<path d="M1468 706 c-15 -30 -23 -36 -48 -36 -36 0 -38 -6 -6 -31 21 -16 23
-24 16 -54 -9 -39 -6 -40 30 -21 21 12 29 12 54 -1 l29 -15 -7 33 c-5 27 -2
38 21 61 l27 28 -36 0 c-31 0 -37 4 -49 36 l-14 37 -17 -37z m48 -73 c-3 -8
-6 -18 -6 -23 0 -4 -11 -7 -24 -7 -31 0 -43 36 -19 54 21 16 57 -2 49 -24z" />
								<path d="M1801 707 c-11 -34 -16 -37 -49 -37 l-36 0 27 -28 c23 -23 26 -34 21
-61 l-7 -33 29 15 c25 13 33 13 54 1 36 -19 39 -18 30 21 -7 30 -5 38 16 54
31 25 30 31 -6 31 -24 0 -33 7 -48 37 l-19 37 -12 -37z m39 -52 c18 -21 4 -50
-26 -53 -14 -1 -23 2 -19 7 3 5 1 12 -5 16 -12 7 10 45 26 45 6 0 17 -7 24
-15z" />
								<path d="M1133 700 c-10 -26 -16 -30 -49 -30 l-38 0 28 -29 c23 -24 28 -36 23
-60 -7 -36 -5 -37 28 -15 23 15 27 15 50 0 33 -22 35 -21 28 15 -5 24 0 36 23
60 l28 29 -38 0 c-33 0 -39 4 -49 30 -6 17 -14 30 -17 30 -3 0 -11 -13 -17
-30z m39 -44 c24 -18 13 -56 -17 -56 -30 0 -50 42 -26 58 21 14 23 14 43 -2z" />
							</g>
						</svg>
					</a>
					<SearchBar />
				</div>
			</NavBar>
		);
	}
}

export default LandingNav;
