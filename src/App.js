import React, { Component } from 'react';
import api from './api';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import "./App.css"

class App extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('star%20wars');

    this.setState({ filmes: response.data });
  }

  render() {

    const { filmes } = this.state;

    return (
      <div>

        <h1 style={{ textAlign: 'center' }}>List of movies (comsuming API by Hugo Leonardo)</h1>

        {filmes.map(filme => (
          <Container>
            <Card className="mt-2">
              <Card.Body>
                <p><b>Id:</b>{filme.show.id}</p>

                <Card.Title>Título: </Card.Title>
                {filme.show.name}

                <Card.Text>

                  {filme.show.url}

                </Card.Text>

              </Card.Body>

            </Card>
          </Container>


        ))}
      </div>
    );
  };
};

export default App;
