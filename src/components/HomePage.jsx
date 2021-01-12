import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function HomePage() {
    return (
        <>
        <div className="h-100 w-100 mb-2 homepage-div text-center">
            {/* <Jumbotron className="homepage-jumbotron" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}> */}
                <h1 className="home-title mb-8 pt-5 font-weight-bold h1">Vitamin EZ</h1>
                <p className="home-description mb-8 mt-4">
                  Vitamin EZ helps you learn about, discover, and keep track of your vitamins!
                </p>
          <div className="h-100 w-100 mb-2 homepage-get-started-button-div">
                  <Link className="nav-link home-button w-15" to="/vitamins">
                      <Button variant="primary mb-8 mt-4 mb-5">Get Started</Button>
                  </Link>
          </div>
        </div>
        </>
    )
}