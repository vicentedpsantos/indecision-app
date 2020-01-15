// @format
import React from 'react';

import Option from './Option';

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}>
        Remove All
      </button>
    </div>

    <ol>
      {props.options.map((option, i) => (
        <Option
          key={i}
          option={option}
          handleRemoveOption={props.handleRemoveOption}
        />
      ))}
    </ol>
    {props.options.length === 0 && (
      <p className="widget__message">Please add an option to get started!</p>
    )}
  </div>
);

export default Options;
