import React from 'react';

class Nav extends React.Component{
	render() {
		return(
			<ul class="nav text-center">
				<li class="nav-item">
					<a class="nav-link" href="#">
						<div class="dropdown">
							<button class="dropdown-toggle" type="button" id="dropdownMenuButtonCars" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Cars
							</button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButtonCars">
								<a class="dropdown-item" href="#">Action</a>
								<a class="dropdown-item" href="#">Another action</a>
								<a class="dropdown-item" href="#">Something else here</a>
							</div>
						</div>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">
						<div class="dropdown">
							<button class="dropdown-toggle" type="button" id="dropdownMenuButtonBikes" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Bikes
							</button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButtonBikes">
                                <a class="dropdown-item" href="https://www.droomdiscovery.com/new-bikes">Find New Bikes</a>					                                
                                <a class="dropdown-item" href="https://www.droomdiscovery.com/popular-bikes">Popular Bikes</a>					                                
                                <a class="dropdown-item" href="https://www.droomdiscovery.com/newly-launched-bikes">Newly Launched Bikes</a>
                                <a class="dropdown-item" href="#">Bikes By Brand </a>
                                <a class="dropdown-item" href="#">Bikes by Body Type</a>					                                
                            </div>
						</div>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">
						<div class="dropdown">
							<button class="dropdown-toggle" type="button" id="dropdownMenuButtonScooters" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Scooters
							</button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButtonScooters">
                                <a class="dropdown-item" href="https://www.droomdiscovery.com/new-bikes">Find New Bikes</a>					                                
                                <a class="dropdown-item" href="https://www.droomdiscovery.com/popular-bikes">Popular Bikes</a>					                                
                                <a class="dropdown-item" href="https://www.droomdiscovery.com/newly-launched-bikes">Newly Launched Bikes</a>
                                <a class="dropdown-item" href="#">Bikes By Brand </a>
                                <a class="dropdown-item" href="#">Bikes by Body Type</a>					                                
                            </div>
						</div>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">
						<div class="dropdown">
							<button class="dropdown-toggle" type="button" id="dropdownMenuButtonResearch" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Research
							</button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButtonResearch">
                                <a class="dropdown-item" href="https://www.droomdiscovery.com/new-bikes">Find New Bikes</a>					                                
                                <a class="dropdown-item" href="https://www.droomdiscovery.com/popular-bikes">Popular Bikes</a>					                                
                                <a class="dropdown-item" href="https://www.droomdiscovery.com/newly-launched-bikes">Newly Launched Bikes</a>
                                <a class="dropdown-item" href="#">Bikes By Brand </a>
                                <a class="dropdown-item" href="#">Bikes by Body Type</a>					                                
                            </div>
						</div>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">
						<div class="dropdown">
							<button class="dropdown-toggle" type="button" id="dropdownMenuButtonAutoNews" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Auto News
							</button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButtonAutoNews">
                                <a class="dropdown-item" href="https://www.droomdiscovery.com/new-bikes">Find New Bikes</a>					                                
                                <a class="dropdown-item" href="https://www.droomdiscovery.com/popular-bikes">Popular Bikes</a>					                                
                                <a class="dropdown-item" href="https://www.droomdiscovery.com/newly-launched-bikes">Newly Launched Bikes</a>
                                <a class="dropdown-item" href="#">Bikes By Brand </a>
                                <a class="dropdown-item" href="#">Bikes by Body Type</a>					                                
                            </div>
						</div>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Auto Expo 2018</a>
				</li>
			</ul>
		)
	}
}

export default Nav;