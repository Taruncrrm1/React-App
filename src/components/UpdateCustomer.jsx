import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';
class UpdateCustomer extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            acno:'',
            bal:'',
            cname:'',
            errors:{}
        }
        this.changeIdHandler.bind(this);
        this.changeAccountNoHandler.bind(this);
        this.changeBalanceHandler.bind(this);
        this.changeName.bind(this);
        this.list = this.list.bind(this);
    }
    
    changeIdHandler=(event)=>{
        this.setState({id: event.target.value})
    }
 
    changeAccountNoHandler=(event)=>{
        this.setState({acno: event.target.value})
    }
 
    changeBalanceHandler=(event)=>{
        this.setState({bal:event.target.value})
    }
    changeName=(event)=>{
        this.setState({cname:event.target.value})
    }
 
    list() {
        this.props.history.push('/');
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;
    
        let acno = this.state.acno;
        let bal = this.state.bal;
        let cname=this.state.cname;


        if(!acno) {
            formIsValid = false;
            errors["acno"] = "Cannot be empty";
          }

        if(acno){
           const numberRegEx = /^[0-9\b]+$/;
           if((String(acno).length!=6)){
            formIsValid = false;
            errors["acno"] = "must be of length 6";
            if(!numberRegEx.test(acno)){
            
                errors["acno"] = "only integer";
                
               }
            } 

            if(!bal) {
                formIsValid = false;
                errors["bal"] = "Cannot be empty";
              }

        if(bal){
            const numberRegEx = /^[0-9\b]+$/;
            if(!numberRegEx.test(bal)){
                formIsValid = false;
                errors["bal"] = "only integer";
                
               }
            }
        }


        if (!cname) {
          formIsValid = false;
          errors["cname"] = "Cannot be empty";
        }
    
        if (cname) {
          if (!cname.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["cname"] = "Only letters";
          }
        }
    
        this.setState({ errors: errors });
        return formIsValid;
      }

    handleSubmit(event) {
        event.preventDefault();
        if (this.handleValidation()) {
            alert("Form submitted");
          } else {
            alert("Form has errors.");
            return;
          }

        alert('A Customer added');
        
 
        const data ={
            id:this.state.id,
            acno:this.state.acno,
            bal:this.state.bal,
            cname:this.state.cname
        };

        CustomerService.updateCustomer(data).then(res => {this.props.history.push('/list-customer');});

        {/*axios
        .post("http://localhost:8032/api/create",data)
        .then(res => console.log(res))
        .catch(err => console.log(err));*/}
      }
 
    
    render() {
        return (
            <div className="container">
                <div className="jumbotron" style={{color: "red",backgroundColor:'lightpink'}}>
                    <h1 className="text-center">Welcome to Customer Operations</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <span class="anchor" id="formUserEdit"></span>
            
                        <div class="card card-outline-secondary">
                        <div class="card-header" style={{backgroundColor:'#ffc107'}}>
                            <h3 class="mb-0" style={{color:'white'}}>Update Customer</h3>
                        </div>
                        <div class="card-body">
                        <form autocomplete="off" class="form" role="form">
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Customer Id:</label>
                            <div class="col-lg-9">
                            <input className="form-control" name="id" placeholder="Enter Customer Id" value={this.state.id} onChange={this.changeIdHandler}/>
                            </div>
                        </div>
                        <div class="form-group row" style={{marginTop:'10px'}}>
                            <label class="col-lg-3 col-form-label form-control-label">Account No.:</label>
                            <div class="col-lg-9">
                            <input className="form-control" name ="acno" placeholder="Enter account value" value={this.state.acno} onChange={this.changeAccountNoHandler}/>
                            <small class="form-text text-muted" id="passwordHelpBlock">Your account number must be 6 characters long, contains only digits, and must not contain spaces, special characters</small><br/>
                            <span style={{ color: "red" }}>{this.state.errors["acno"]}</span>
                            </div>
                        </div>
                        <div class="form-group row" style={{marginTop:'10px'}}>
                            <label class="col-lg-3 col-form-label form-control-label">Balance:  </label>
                            <div class="col-lg-9">
                            <input className="form-control" name="bal" placeholder="Enter balance" value={this.state.bal} onChange={this.changeBalanceHandler}/>
                            <span style={{ color: "red" }}>{this.state.errors["bal"]}</span>
                            </div>
                        </div>
                        <div class="form-group row" style={{marginTop:'15px'}}>
                            <label class="col-lg-3 col-form-label form-control-label">Customer Name:  </label>
                            <div class="col-lg-9">
                            <input className="form-control" name="cname" placeholder="Enter Name" value={this.state.cname} onChange={this.changeName}/>
                            <small class="form-text text-muted" id="passwordHelpBlock">Your Name contains only alphabets, and must not contain digits,spaces, special characters</small><br/>
                            <span style={{ color: "red" }}>{this.state.errors["cname"]}</span>
                            </div>
                        </div>
                  
                        <div class="form-group row">
                        <label class="col-lg-3 col-form-label form-control-label"></label>
                            <div class="col d-grid gap-2 d-md-flex justify-content-md-end">
							    <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-warning float-right" style={{color:"white"}}>UPDATE CUSTOMER</button>
                            </div>
                        </div>
                        </form>
                        <div>
                        <a href="/" onClick = {this.list}>Back</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
            
        );
    }
}

export default UpdateCustomer;