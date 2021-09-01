import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import vitaminApi from '../vitaminAPI.json';

export function VitaminNavigation() {
  return (
    <div>
      <Row className="vitamin-navigation-row">
        <Col className="vitamin-navigation">
          <div className="vitamin-navigation-div pt-5 text-right">
            <div className="vitamin-navigation-header">
              <h3>Vitamin List</h3>
            </div>
            <ul className="vitamin-navigation-links pt-2">
              {
                vitaminApi.map(vitamin => (
                  <li key={vitamin.id}>
                    <Link to={`/vitamins/${vitamin.id}`}>{vitamin.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  )
}