import React, { Component } from "react";
import { kumlokk } from "../photos/kumlokk";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoiam9uYXNtdzk0IiwiYSI6ImNqZWw1Nnp2MTBvdHYyd284dHkxcHdsYmEifQ.GkRndh_FQG7xNy_MyC_8cQ"
});
const zoom = [3.8];

export default class MapView extends Component {
    shouldComponentUpdate() {
        return false;
    }

  render() {
    const markers = Object.keys(kumlokk).map(by => (
      <Feature
        onClick={() => this.props.handleSearch({ target: { value: by } })}
        key={by}
        coordinates={kumlokk[by].position.reverse()}
      />
    ));
    return (
      <Map
      // eslint-disable-next-line
        style="mapbox://styles/mapbox/streets-v8"
        zoom={zoom}
        containerStyle={{
          height: "500px",
          width: "100%"
        }}
        center={[12.4918262, 64.1326249]}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          {markers}
        </Layer>
      </Map>
    );
  }
}
