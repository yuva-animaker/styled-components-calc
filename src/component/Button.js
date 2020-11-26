import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Buttons = styled.button`
  background-color: #e0e0e0;
  border: 0;
  font-size: 1.5rem;
  margin: 0 1px 0 0;
  flex: 1 0 auto;
  padding: 0;
`;
const OrangeButtons = styled.button`
  background-color: #f5923e;
  color: white;
  border: 0;
  font-size: 1.5rem;
  margin: 0 1px 0 0;
  flex: 1 0 auto;
  padding: 0;
`;

const WideButton = styled.button`
  width: 50%;
  border: 0;
  font-size: 1.5rem;
  margin: 0 1px 0 0;
  flex: 1 0 auto;
  padding: 0;
`;

const ComponentDiv = styled.div`
  display: inline-flex;
  width: 25%;
  flex: 1 0 auto;
`;

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {

    return (
      <ComponentDiv>
        {this.props.orange ? (
          <OrangeButtons onClick={this.handleClick}>
            {this.props.name}
          </OrangeButtons>
        ) : this.props.wide ? (
          <WideButton onClick={this.handleClick}>{this.props.name}</WideButton>
        ) : (
          <Buttons onClick={this.handleClick}>{this.props.name}</Buttons>
        )}
      </ComponentDiv>
    );
  }
}
