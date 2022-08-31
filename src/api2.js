import React from 'react';
import axios from 'axios'
class AxiosReactExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
    }
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      console.log(response.data);
      this.setState({ imageURL: response.data.message });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const { imageURL } = this.state;
    return (
      <div>
        <h1>Axios with React Example</h1>
        <h2>How to make API requests in React using Axios</h2>
        <img  width="200" height="200" src={imageURL} alt="dog" />
      </div>
    );
  }
}

export default AxiosReactExample;