import React, { Fragment, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Dealer from './Dealer'
import {requestFromBackend} from '../Request/request'
const DealerList = () =>{
    const [dealerList, setDealers] = useState([]);
    useEffect(() => {
        requestFromBackend('http://localhost:5000/dealers', setDealers);
    }, []);

    return(
        <Fragment>
        <h2> Dealers List</h2>    
          <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>BAC</th>
                    <th>Brand</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                {                       
                    dealerList.map((dealer,index)=>      
                        <Dealer dealer={dealer} key={index}/> 
                )}      
              </tbody>
            </Table>
            { !dealerList.length && <div>No Record</div>}
        </Fragment>
    )
}

export default DealerList;