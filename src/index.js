import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Docs from './docs/Docs';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/highlight.js/styles/ocean.css';
import m from 'mithril';

ReactDOM.render(<Docs />, document.getElementById('root'));
registerServiceWorker();

const links = [
  {
    name: 'Home',
  },
  {
    name: 'About',
  }
]

const MithrilNavigation = {
  view: () => {
    return [
      m('ul', [
        links.map(link => m('li', link.name))
      ])
    ];
  }
}

const MithrilDocs = {
  view: (vnode) => {
    const { name } = vnode.attrs;
    return [
      m(MithrilNavigation),
      m('div', `Hello world ${name}`),
    ];
  }
}

const render = () => {
  m.render(document.getElementById('mithril-root'), m(MithrilDocs, {name: 'Ferdi'}));
};

render();
