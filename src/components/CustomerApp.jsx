import React, { Component } from 'react';
import Footer from './Footer';
class CustomerApp extends Component {
    constructor(props) {
        super(props);
        this.addCustomer = this.addCustomer.bind(this);
        this.listcustomer = this.listcustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
    }
    
    addCustomer() {

        this.props.history.push('/add-customer')
    }

    listcustomer(){
        this.props.history.push('/list-customer')
    }

    deleteCustomer(){
        this.props.history.push('/delete-customer')
    }

    updateCustomer(){
        this.props.history.push('/update-customer')
    }

    render() {
        return (
            <div>
                <center>
                <h1> Welcome to Customer Operations</h1>
                    <div class="container">
                            <button className="btn btn-block btn-primary ms-1" onClick ={this.addCustomer}> Add Customer</button>
                            <button className="btn btn-success ms-1" onClick={this.listcustomer}>List Customer</button>
                            <button className="btn btn-danger ms-1" onClick={this.deleteCustomer}>Delete Customer</button>
                            <button className="btn btn-warning ms-1" onClick={this.updateCustomer} style={{color:"white"}}>Update Customer</button>
                    
                    </div>
                    
                </center>
            </div>
        );
    }
}
export default CustomerApp;