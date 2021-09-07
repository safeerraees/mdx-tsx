/* eslint-disable*/

import * as React from 'react';
import MdxDoc, { frontMatter } from '!babel-loader!mdx-loader!./mdx-doc.mdx';
import logo from './logo.svg';
import './App.css';

// import { RedocStandalone } from 'redoc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h2>{frontMatter.title}</h2>	  
        <MdxDoc />
        {/* <RedocStandalone specUrl="https://redocly.github.io/redoc/openapi.yaml" /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
