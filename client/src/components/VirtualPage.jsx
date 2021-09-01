import { VitaminNavigation } from './VitaminNavigation';
import { Container } from 'react-bootstrap';

export function VirtualPage(props) {
  return (
    <Container className="vitamin-site-container">
      <VitaminNavigation />
      <div>
        {props.children}
      </div>
    </Container>
  )
}