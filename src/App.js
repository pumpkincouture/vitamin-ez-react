import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap';

import './App.css';

import { HomePage } from './components/HomePage';

function App() {
  return (
    <Container className="homepage-container">
      <Row className="homepage-row w-75">
        <HomePage></HomePage>
      </Row>

    </Container>
  )
}

export default App;
