import React, { Component } from "react";
import PropTypes from 'prop-types';

class KumlokkViewer extends Component {
  render() {
    return (
      <div style={{textAlign: "center"}} >
        {this.props.kumlokk ? (
          <img
            style={{ maxWidth: "100%", maxHeight: "500px" }}
            src={this.props.kumlokk.url}
            alt="/"
          />
        ) : (
          <div style={{marginBottom: 20, marginLeft: 50, marginRight: 50, textAlign: 'center', color: '#fff', fontWeight: 500 }}>{this.props.searchTerm === "" ? "Skriv inn en by i søkefeltet eller velg en by i kartet" : `Ingen kumlokk med navn ${this.props.searchTerm}`}</div>
        )}
      </div>
    );
  }
}

KumlokkViewer.propTypes = {
  isLoading: PropTypes.bool,
  searchTerm: PropTypes.string
};

KumlokkViewer.defaultProps = {
  isLoading: true,
  searchTerm: ""
};

export default KumlokkViewer;
