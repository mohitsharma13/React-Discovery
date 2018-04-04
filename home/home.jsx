import React from 'react';
import Banner from './partials/main-banner.jsx';
import '../public/home/partials/banner.css';

class Home extends React.Component{
	render() {
		return(
			<section>
				<Banner />
			</section>
		)
	}
}

export default Home;