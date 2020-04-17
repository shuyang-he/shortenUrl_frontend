import React, {Component} from 'react';
import Spinner from './Spinner';
import history from '../helpers/history';
import {Container, Row, Col, Card, Navbar, Form, FormControl, Button} from 'react-bootstrap';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.mounted = true;
    this.props.getPage(this.mounted);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <>
      {this.props.loading ? <Spinner /> : 
      <Container>
        <Row>
          <Col>
            {this.props.error === '' ? 
            this.props.data.map((ele) => {
              return (
                <Card key={ele._id}>
                  <Card.Body>
                    <Card.Title>Original url</Card.Title>
                    <Card.Text>{ele.originalUrl}</Card.Text>
                    <Card.Title>Short url</Card.Title>
                    <Card.Text>{ele.shortUrl}</Card.Text>
                    <Card.Title>Url code</Card.Title>
                    <Card.Text>{ele.urlCode}</Card.Text>
                    <Card.Title>Update at</Card.Title>
                    <Card.Text>{ele.updatedAt}</Card.Text>
                    <Card.Title>Created at</Card.Title>
                    <Card.Text>{ele.createdAt}</Card.Text>
                  </Card.Body>
                </Card>
              );
            }) : this.props.error}
          </Col>
        </Row>
      </Container>}
      </>
    );
  }
}

export default Main;
