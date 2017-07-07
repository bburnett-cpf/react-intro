const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game Of Thrones', color: 'red' }),
    ce(MyTitle, { title: 'The Boondocks', color: 'blue' }),
    ce(MyTitle, { title: 'Blackish', color: 'purple' }),
    ce(MyTitle, { title: 'The Waire', color: 'pink' })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
