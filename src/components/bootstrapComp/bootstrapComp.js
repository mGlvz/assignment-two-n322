import {CardGroup, Card} from "react-bootstrap";

function BootstrapComponent(){
    return (
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://healthmatters.nyp.org/wp-content/uploads/2022/02/winter-activities-hero.jpg" />
        <Card.Body>
          <Card.Title>Snowboarding</Card.Title>
          <Card.Text>
            Snowboards, protective equipment, and the best technical clothing to keep you warm. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.redstarsurf.com/wp-content/uploads/2022/03/The-essential-surfing-equipment-1536x614.png" />
        <Card.Body>
          <Card.Title>Surfing</Card.Title>
          <Card.Text>
            Shop the top rated collection of surf gear. Top picks by staff that know the ocean like the back of their hand. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://scl.cornell.edu/sites/scl/files/2020-05/COE%20ROCK%20Peterskill6%20HRZ.jpg" />
        <Card.Body>
          <Card.Title>Rock Climbing</Card.Title>
          <Card.Text>
            Selections for those wanting to hit the crag with top rated gear. Rope, harnesses, carabiners, calk, shoes, etc. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    );
}

export default BootstrapComponent;