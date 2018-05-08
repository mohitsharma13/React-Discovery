import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './layout/header.jsx';
import Home from './home/home.jsx';
import Login from './login/login.jsx';
import Footer from './layout/footer.jsx';

class App extends React.Component {
   render() {
      return (
      	<Router>
	        <div>
	            <Header />
	            <Switch>
		            <Route exact path="/" component={Home}/>
		            <Route exact path="/login" component={Login}/>
	            </Switch>
	            <Footer />
	        </div>
        </Router>
      );
   }
}
export default App;