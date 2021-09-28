import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';
import axios from 'axios';
class DeleteCustomer extends Component {

    constructor(props){
        super(props)
        this.state = {
            customers : []
        }        
        this.list = this.list.bind(this);
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res)=>{

            this.setState({
                
                customers : res.data

            });

        });

    }

    list() {
        this.props.history.push('/');
    }


    deleteRow(id, e){  

        axios.delete(`http://localhost:8032/api/del/${id}`)  
          .then(res => {  
            console.log(res);  
            console.log(res.data);  
        
            const customers = this.state.customers.filter(item => item.id !== id);  
            this.setState({ customers });  
          })  
        
      }  
        
      render() {  
        return (  
          <div>  
              <div className="jumbotron" style={{color: "red",backgroundColor:'lightpink'}}>
                    <h1 className="text-center">Welcome to Customer Operations</h1>
                </div>
                <div>
                <h2 className = "text-center">Delete Customers</h2>
                </div>
            <table className="table table-striped table-bordered" style={{backgroundColor:'white'}}>  
                <thead className="table-dark">  
                  <tr>  
                      <th>ID</th>  
                      <th>Account No</th>  
                      <th>Balance</th>  
                      <th>Name</th>
                      <th></th>  
                  </tr>  
                </thead>  
        
                <tbody>  
                  {this.state.customers.map((customer) => (  
                    <tr>  
                      <td>{customer.id}</td>
                      <td>{customer.acno}</td>
                      <td>{customer.bal}</td>
                       <td>{customer.cname}</td>
                       <td><button className="btn btn-danger" onClick={(e) => this.deleteRow(customer.id, e)}>Delete</button>  
                      </td>  
                    </tr>  
                  ))}  
                  
                </tbody>  
        
            </table> 
            <div>
                   <a href="/" onClick = {this.list}>Back</a>
                 </div> 
          </div>  
        )  
      }  
}

export default DeleteCustomer;