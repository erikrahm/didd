// script.js
var React = require('react');
var ReactDOM = require('react-dom');

// script.js
var React = require('react');
var ReactDOM = require('react-dom');

// Holy crap, React!
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('hello')
);

var HelloWorld = React.createClass({
  render: function() {
    return <h1>Hello, world!</h1>
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById('hello'));