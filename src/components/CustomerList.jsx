import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';


class CustomerList extends Component {

    constructor(props){
        super(props)
        this.state = {
            customers : []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
        this.list = this.list.bind(this);
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res)=>{

            this.setState({
                
                customers : res.data

            });

        });

    }

    addCustomer(){

        this.props.history.push('/list-customer');
    }

    updateCustomer(){

        this.props.history.push('/update-customer');
    }

    list() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="jumbotron" style={{color: "red",backgroundColor:'lightpink'}}>
                    <h1 className="text-center">Welcome to Customer Operations</h1>
                </div>
                <div>
                <h2 className = "text-center">List of Customers</h2>
                </div>
                
                
                    <table className="table table-striped table-bordered" style={{backgroundColor:'white'}}>
                        <thead className="table-dark">
                            <tr>
                                <th>Customer-Id</th>
                                <th>Customer-Acc.No</th>
                                <th>Customer-Balance</th>
                                <th>Customer-Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customers.map(
                                    customer =>
                                    <tr key={customer.id}>
                                        <td>{customer.id}</td>
                                        <td>{customer.acno}</td>
                                        <td>{customer.bal}</td>
                                        <td>{customer.cname}</td>
                                    </tr>    
                                )
                                    
                                
                            }
                           
                        </tbody>
                    </table>
                    <div>
                   <a href="/" onClick = {this.list}>Back</a>
                 </div>
               {/*<div className="row">
                    <button className="btn btn-primary" onClick={this.addCustomer}>Add Customer</button>
                        </div>*/}
            </div>
        );
    }
}

export default CustomerList;