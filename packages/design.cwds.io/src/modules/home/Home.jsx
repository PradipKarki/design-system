import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  PageHeader,
  Container,
  Button,
  Card,
  CardDeck,
} from '@cwds/components';

export default () => (
  <div>
    <AppBar />
    <PageHeader title="Design Guide" />
    <Container>
      <CardDeck>
        <Card>
          <Card.Header>
            <Card.Title>Principles</Card.Title>
          </Card.Header>
          <Card.Body>
            Guiding principles for CARES including tone, goals and methods for
            building a great product!
          </Card.Body>
          <Card.Footer>
            <Link to="/principles">
              <Button color="primary">Go!</Button>
            </Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Components</Card.Title>
          </Card.Header>
          <Card.Body>You want Components?</Card.Body>
          <Card.Footer>
            <Link to="/components">
              <Button color="primary">Go!</Button>
            </Link>
          </Card.Footer>
        </Card>
        <div className="w-100 d-none d-sm-block d-md-none mb-3" />
        <Card>
          <Card.Header>
            <Card.Title>Patterns</Card.Title>
          </Card.Header>
          <Card.Body>Cool Stuff</Card.Body>
          <Card.Footer>
            <Link to="/patterns">
              <Button color="primary">Go!</Button>
            </Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Core</Card.Title>
          </Card.Header>
          <Card.Body>asdflkjasdlkfjasdlfkj</Card.Body>
          <Card.Footer>
            <Link to="/core">
              <Button color="primary">Go!</Button>
            </Link>
          </Card.Footer>
        </Card>
        <div className="w-100 d-none d-md-block d-lg-none mb-3" />
        <Card>
          <Card.Header>
            <Card.Title>Layouts</Card.Title>
          </Card.Header>
          <Card.Body>Common page layouts for CARES</Card.Body>
          <Card.Footer>
            <Link to="/page-layouts">
              <Button color="primary">Go!</Button>
            </Link>
          </Card.Footer>
        </Card>
        <div className="w-100 d-none d-sm-block d-md-none mb-3" />
        <Card>
          <Card.Header>
            <Card.Title>Labs</Card.Title>
          </Card.Header>
          <Card.Body>
            Not everything in here is ready for general use, but it should be
            showcased for the purposes of design critique and soliciting general
            feedback!
          </Card.Body>
          <Card.Footer>
            <Link to="/labs">
              <Button color="primary">Go!</Button>
            </Link>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  </div>
);
