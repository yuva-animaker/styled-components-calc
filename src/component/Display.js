import React from "react";
import PropTypes from "prop-types";

// import "./Display.css";
import styled from "styled-components";

const ComponentDisplay = styled.div`
background-color: #858694;
  color: white;
  text-align: right;
  font-weight: 200;
  flex: 0 0 auto;
  width: 100%;
`

const ComponentDivNew = styled.div`
font-size: 2.5rem;
  padding: 0.2rem 0.7rem 0.1rem 0.5rem;
`

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <ComponentDisplay>
        <ComponentDivNew>{this.props.value}</ComponentDivNew>
      </ComponentDisplay>
    );
  }
}
