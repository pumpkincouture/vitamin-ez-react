import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { VirtualPage } from './VirtualPage';

export function VitaminInfoContainer(props) {
  return (
    <VirtualPage>
      <Row className="vitamin-info-row">
        <Col className="vitamin-info-col">
          <div className="vitamin-info-div pt-5">
            <h1>{props.data.name}</h1>
          </div>
          <div className="vitamin-info-div pt-5">
            <p>{props.data.description}</p>
          </div>
        </Col>
      </Row>
    </VirtualPage>
  )
}