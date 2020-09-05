import React, { useState, useEffect }from 'react';
import './Pies.css';
import PieInventory from './PieInventory/PieInventory';
import {Row} from 'reactstrap';

const Pies = (props) => {
   const [pies, setPies] = useState(true);
    const [inventory, setInventory] = useState([]);
   
   useEffect (() => {
       console.log('hello');
       let url = 'http://localhost:4000/pies/';
       fetch(url, {
           method: 'GET',
           headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => {
                console.log(json);
                setInventory(json);
            })
        .catch(err => console.log(err)) 
        
    }, [])

    return (
        <Row>
        {
            inventory.length > 0 ? 
            inventory.map(pie => 
              <PieInventory pie= {pie} />
            )
            : ''
        }
    </Row>
        
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Name of Pie</th>
        //             <th>Base of Pie</th>
        //             <th>Crust</th>
        //             <th>Bake Time</th>
        //             <th>Servings</th>
        //             <th>Rating</th>
        //         </tr>
        //         <tr>
                   
        //         </tr>
        //     </thead>
        // </table>
    )
}

export default Pies;