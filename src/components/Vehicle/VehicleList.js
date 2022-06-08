import React, { Fragment, useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { Table } from 'react-bootstrap';
import Vehicle from './Vehicle'
import {requestFromBackend} from '../Request/request'
const VehicleList = () =>{
    const [vehicleList, setVehicle] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        requestFromBackend(`http://localhost:5000/vehicles/${id}`, setVehicle);
    }, [id]);

    return(
        <Fragment>
        <h2> Vehicles List</h2>    
          <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>BAC</th>
                    <th>Vin</th>
                    <th>Ctp Status</th>
                    <th>Onstar Status</th>
                    <th>Create Time</th>
                    <th>Color</th>
                    <th>Stock Number</th>
                    <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                {                       
                    vehicleList.map((vehicle,index)=>      
                        <Vehicle vehicle={vehicle} key={index}/> 
                )}      
              </tbody>
            </Table>
            { !vehicleList.length && <div>No Record</div>}
        </Fragment>

    )
}

export default VehicleList;