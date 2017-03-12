import React from 'react';

import './EmptyViewComponent.css';

const EmptyViewComponent = React.createClass({
  render() {
    return (
      <div className="empty-view">
        <i className="fa fa-cog fa-spin fa-3x fa-fw" aria-hidden="true"></i>
        <span className="sr-only">Data in the wire. Hang tight ..</span>
      </div>
    );
  }
});

export default EmptyViewComponent;
