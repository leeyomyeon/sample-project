import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import CounterGrid from './CounterGrid';

const CounterPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8}>
                        <CounterGrid />
                    </Col>
                    <Col sm={4}>

                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    )
}

export default React.memo(CounterPage);