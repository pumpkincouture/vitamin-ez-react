import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { VirtualPage } from './VirtualPage';

export function WelcomePage() {
  return (
    <VirtualPage>
      <Row className="welcomepage-row">
        <Col className="welcomepage-vitamin-col">
          <div className="welcome-div pt-5">
            <h1 className="font-weight-bold">Welcome!</h1>
            <p>So - you're here to learn about vitamins.</p>
            <p>First, let's start with the basics.</p>
            <section>
              <h2>What are vitamins?</h2>
              <p>Vitamins are organic substances produced by plants or animals.</p>
            </section>
            <section>
              <h2>Where do vitamins come from?</h2>
              <p>Most vitamins need to come from food because the body either does not produce them or produces very little.</p>
              <ul className="extra-vitamin-info">Each organism has different vitamin requirements. For example, humans need to get vitamin C from their diets -- while dogs can produce all the vitamin C that they need.</ul>
            </section>
            <section>
              <h2>What kinds of vitamins are there?</h2>
              <p>There are currently 13 recognized vitamins.</p>
              <ul className="extra-vitamin-info">Vitamins are either soluble, or dissolvable, in fat or water.</ul>
              <section className="fat-soluble-vitamin-section">
                <h4>Fat-soluble vitamins</h4>
                <p>The body stores fat-soluble vitamins in fatty tissue and the liver, and reserves of these vitamins can stay in the body for days and sometimes months.</p>
              </section>
              <section className="water-soluble-vitamin-section">
                <h4>Water-soluble vitamins</h4>
                <p>The body does not store water-soluble vitamins - they leave the body via urine. Because of this, people need a more regular supply of water-soluble vitamins than fat-soluble ones.</p>
              </section>
            </section>
            <section>
              <h2>What about minerals? Are those the same as vitamins?</h2>
              <p>Minerals are inorganic elements that originate from rocks, soil, or water. However, you can absorb them indirectly from the environment or an animal that has eaten a particular plant.</p>
            </section>
          </div>
        </Col>
      </Row>
    </VirtualPage>
  )
}