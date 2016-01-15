import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

import Rotator from './jsx/shared/Rotator';

var View = {};

/**
 * Hero
 * Renders all of the heros into the rotator
 *
 * @class
 */
View.Hero = React.createClass({
    displayName: 'Hero',

    render: function () {
        return (
          <section className="hero">
            <Rotator className="hero-promotions" hasNav hasArrows automatic>
              <div>Rotator Content</div>
            </Rotator>
          </section>
        );
    }
});

$(function () {
  ReactDOM.render(<View.Hero />, $('.hero-view').get(0));
});