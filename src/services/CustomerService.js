import axios from 'axios'

const CUSTOMER_LIST = "http://localhost:8032/api/findAll";
const CUSTOMER_ADD = "http://localhost:8032/api/create";
const CUSTOMER_UPDATE = "http://localhost:8032/api/update";

class CustomerService {

    getCustomers(){

        return axios.get(CUSTOMER_LIST);
    }

    addCustomer(customer){


        return axios.post(CUSTOMER_ADD, customer);
    }
    updateCustomer(customer){


        return axios.put(CUSTOMER_UPDATE, customer);
    }
}


export default new CustomerService()