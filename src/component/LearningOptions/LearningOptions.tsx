import React, { Component } from 'react';
import "./LearningOptions.css";
class LearningOptions extends Component<{props:any}>  {
  options = [
    {
      text: "Javascript",
      // handler: this.props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Data visualization", handler: () => {}, id: 2 },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Interview prep", handler: () => {}, id: 5 },
  ];
  optionsMarkup = this.options.map((option:any) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));
  render() {
    
  return (
    <div className="learning-options-container">{this.optionsMarkup}</div>);
};
}
export default LearningOptions;