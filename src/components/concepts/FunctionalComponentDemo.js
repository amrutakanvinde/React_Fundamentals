import React  from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    Row,
    Col
}
from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        <Container className="main">
            <Row>
                <Col xs="12">
                <h1> Functional Component</h1>
                <p>
                    Functional components are the primary tool in React to build a small, modular piece of your page..
                </p>
                <dl>
                    <dt>
                        Can use state
                    </dt>
                    <dd>
                        With the 'useState' hook, functionnal components can now contain State values within it. This gives you the ability to use internal data within the component, and when that data is changed it will case a "re-render"of the component, refreshing data that is placed on the dom.
                    </dd>
                    <dt>No 'this' keyword</dt>
                    <dd>
                        React has what is called a 'class based component' where you use an ES6 javascript class object for your components. In orser to store data specifically for that indiadual 'instance' of the class object, to refer to its location it uses a keyword called 'this'. Think of having multiple Image components, and you want to change the url that the second Image is showing. In order to do that, you can choose that component and it refreshes "its" internal data. "This" means "me" when it comes to specific objects.
                    </dd>
                    <dt>Can use effects</dt>
                    <dd>
                        React components have different eveny moments through the lifecycle of the component. You can utilize the 'useEffect' react hook function to perform a specific task at one of those event moments. An example would be when yourr component is going to be mounted to the screen, maaybe you would like to send a message to the server saying 'this user is now on their profile page'. This is incredibly useful because you can update some data based on when some other thing updates. More on this later.
                    </dd>
                    <dt>return()</dt>
                    <dd>
                        Must return a single element, but this element may have nested elements inside.
                    </dd>
                </dl>
                <h1>Functional Syntax vs Arrow Function</h1>
                </Col>
            </Row>
            <hr />
            <h1> Challenge</h1>
            <Row>
                <Col md="6">
                    <HelloWorldFatArrow className="logo"/>
                </Col>
                <Col md="6">
                    <HelloWorld />
                </Col>
            </Row>
        </Container>
    );
};

const HelloWorld = () => {
    return (
        <div>
            <Card>
                <img width="100%" height="280px"
                src=""
                alt="Card Cap" />
            <CardBody>
                <CardTitle> Regular '01 Function</CardTitle>
                <CardSubtitle>A JS library</CardSubtitle>
                <CardText><pre>const HelloWorld = function() </pre></CardText>
                <Button> Go Elsewhere</Button>
            </CardBody>
            </Card>
        </div>
    )
    }
    const HelloWorldFatArrow = function () {
        return (
            <div>
                <Card>
                <img width="100%" height="280px"
                src=""
                alt="Card Cap" />
                </Card>
                <CardBody>
                <CardTitle> Fat Arrow</CardTitle>
                <CardSubtitle>A JS library</CardSubtitle>
                <CardText><pre>const HelloWorld = () =&gt; </pre></CardText>
                <Button> Go Elsewhere</Button>
            </CardBody>
            </div>
        )
    }


export default FunctionalComponentDemo; 