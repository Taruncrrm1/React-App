import axios from 'axios';

const ADD = "http://localhost:8032/api/create";

class AddCustomerService {
   
        AddCustomer(obj){
            return axios.post(ADD,obj);
        }
       
}

export default new AddCustomerService();