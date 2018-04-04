import React from 'react';
import Header from './layout/header.jsx';
import Home from './home/home.jsx';
import Footer from './layout/footer.jsx';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './node_modules/bootstrap/dist/js/bootstrap.js';
import './public/layout/main.css';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Home />
            <Footer />
         </div>
      );
   }
}
export default App;