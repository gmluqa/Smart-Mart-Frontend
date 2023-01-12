import { Alert } from "react-bootstrap";

const EventMessage = props => {
  return (
    <div>
      <Alert variant="warning">{props.message}</Alert>
    </div>
  );
};

export default EventMessage;
