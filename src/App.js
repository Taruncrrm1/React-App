import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import CustomerList from './components/CustomerList';
import CustomerApp from './components/CustomerApp';
import AddCustomer from './components/AddCustomer';
import DeleteCustomer from './components/DeleteCustomer';
import UpdateCustomer from './components/UpdateCustomer';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Router>
   
      <div className="container">
        <Switch>
          <Route path="/" exact component = {CustomerApp}></Route>
          <Route path="/list-customer" component = {CustomerList}></Route>
          <Route path="/add-customer" component = {AddCustomer}></Route>
          <Route path="/delete-customer" component = {DeleteCustomer}></Route>
          <Route path="/update-customer" component = {UpdateCustomer}></Route>
          <CustomerApp></CustomerApp>
          
        </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;


