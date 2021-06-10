import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { VirtualPage } from './VirtualPage';

export function VitaminInfoPage() {
  return (
    <VirtualPage>
      <Row classname="vitamin-info-row">
        <Col className="vitamin-info-col">
          <div className="vitamin-info-div pt-5">
            <h1>Hello!</h1>
          </div>
        </Col>
      </Row>
    </VirtualPage>
  )
}