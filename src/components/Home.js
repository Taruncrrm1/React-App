import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div class="container">
                <div class="row align-items-start">
                    <div class="col">
                    <button type="button" class="btn btn-primary">View All</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-warning">View By Id</button>
                    </div>
                    <div class="col">
                    <button type="button" class="btn btn-success">Add</button>
                    </div>
                    <div class="col">
                    <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div> 
            </div>      
           
        );
    }
}

export default Home;