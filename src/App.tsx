import * as React from 'react';
import styled from 'styled-components'

const Input = styled.input`
background: transparent;
border: none;
border-bottom: 1px solid gray;
:focus {
  outline: 0;
}
`;

const Circle = styled.button`
width: 80px;
height: 80px;
margin-top: 40px;
background: ${props => props.color || "blue"};
border: none;
border-radius: 80px;
-moz-border-radius: 80px;
-webkit-border-radius: 80px;
transition: background-color 0.5s ease-in;
-webkit-transition: background-color 0.5s ease-in;
:focus {
  outline: 0;
}
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
`

interface ColorState {
  inputColor: string;
}

class App extends React.Component<{}, ColorState> {
  constructor() {
    super({});
    this.state = {
      inputColor: ""
    };
  }

  colorChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    const getInputColor: string = event.currentTarget.value;
    // console.log(getInputColor); 
    this.setState({
      inputColor: getInputColor
    });
  }

  render() {
    return (
      <Container>
        <Input 
        placeholder="Type the color..."
        onChange={ e => this.colorChange(e) } 
        value={ this.state.inputColor }
        >
        </Input>
        <Circle color={this.state.inputColor}></Circle>
      </Container>
    );
  }
}

export default App;