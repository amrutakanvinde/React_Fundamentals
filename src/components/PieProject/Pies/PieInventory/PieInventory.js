import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const PieInventory = (props) => {
    return (

                    <Col xs="12" sm="4">
                    <Card>
                        <CardTitle >
                            {props.pie.nameOfPie}
                        </CardTitle>
                        {props.pie.baseOfPie}
                    </Card>
                    <Card>
                        {props.pie.crust}
                    </Card>
                    </Col>
                    
    )
}

export default PieInventory;