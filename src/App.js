import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import KumlokkViewer from "./components/KumlokkViewer";
import { kumlokk } from "./photos/kumlokk";
import { Title } from "./styles/fonts";
import Map from "./components/MapView";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      isLoading: false,
      currentKumlokk: undefined,
      center: [12.4918262, 64.3326249]
    };
  }

  render() {
    return (
      <AppFrame>
        <ContentFrame>
          <Header>
            <Title>Aasbøenes kumlokksøkeside</Title>
            <Input value={this.state.searchTerm} onChange={this.handleSearch} />
          </Header>
          <div style={{ height: 40 }} />
          <Grid>
            <KumlokkViewer
              searchTerm={this.state.searchTerm}
              kumlokk={this.state.currentKumlokk}
            />
            <Map handleSearch={this.handleSearch} />
          </Grid>
        </ContentFrame>
      </AppFrame>
    );
  }

  handleSearch = e => {
    this.setState({
      searchTerm: e.target.value,
      currentKumlokk: kumlokk[e.target.value.toLowerCase().trim()]
    });
  };
}

const Grid = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 700px) {
    & {
      display: block;
    }
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    & {
      margin-bottom: 0px;
    }
  }
`;

const Input = styled.input`
  width: 50%;
  height: 40px;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  outline: none;
  border: 1px solid #eee;

  border-radius: 20px;
`;

const ContentFrame = styled.div`
  height: 800px;
  width: 1000px;
  border-radius: 4px;

@media (max-height: 1000px) {
  margin-top: -10%;
  transform: scale(0.7);
}

  @media (max-width: 1000px) {
    & {
      height: 100%;
      width: 100%;
    }
  }
`;

const AppFrame = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
  background-image: linear-gradient(
    20deg,
    rgb(219, 112, 147),
    rgb(218, 163, 87)
  );
`;

export default App;
