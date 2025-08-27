//import node modules libraries
import { Card, CardBody, Button, Image } from "react-bootstrap";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const AIBanner = () => {
  return (
    <Card
      className="card-lg mb-6"
      style={{
        background: `linear-gradient(97.05deg, #008fba 0%, #00a76f 100%)`,
      }}
    >
      <CardBody>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <div className="fs-3 fw-bold text-white mb-3">
              How AI assist will <br />
              help you ?
            </div>
            <Button href="#!" variant="white" className="text-dark">
              Start AI
            </Button>
          </div>
          <div>
            <Image src={`${BASE_PATH}/images/png/dasher-ai.png`} alt="" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AIBanner;
