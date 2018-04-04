import React from 'react';
import Nav from './partials/header-nav.jsx';
import '../public/layout/header.css';

class Header extends React.Component {
	render() {
		return(
			<header class="global">
				<div class="container">
					<div class="row">
						<div class="col-md-2">
							<figure>
	                        	<img class="img-responsive" src="https://cdn1.droom.in/imgusr/web/droomDiscovery/logo/discovery-logo-beta.png" alt="Droom Logo Small" />
	                        </figure>
						</div>
						<div class="col-md-8">
							<Nav />
						</div>
						<div class="col-md-2">
							<div class="location">
								<a href="">
									Location
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;