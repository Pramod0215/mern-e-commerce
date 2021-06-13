import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Container>
         <Switch>
           <Route exact path="/" component={HomeScreen}/>
           <Route exact path="/product/:id" component={ProductScreen}/>
         </Switch>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
