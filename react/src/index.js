import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { builder, BuilderComponent } from '@builder.io/react'
import './index.css';

builder.init("cf4859942e52424f854abb53f63e408c");

export const DocsPage = () => (
  <BuilderComponent model="docs-page" />
)
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=> <BuilderComponent model="page"/>} />
          <Route path="/about" exact render={()=> <BuilderComponent model="page"/>} />
          <Route path="/register" exact render={()=> <BuilderComponent model="page"/>} />
          <Route path="/log" exact render={()=> <BuilderComponent model="page"/>} />
          <Route path="/dashboard" exact render={()=> <BuilderComponent model="page"/>} />
          <Route render={({ location }) => <CatchallPage key={location.key} />} />
        </Switch>
    </BrowserRouter>
  );
}

class CatchallPage extends React.Component {
  state = { notFound: false };

  render() {
    return !this.state.notFound ? (
      <BuilderComponent
        apiKey="cf4859942e52424f854abb53f63e408c"
        model="page"
        contentLoaded={content => {
          if (!content) {
            this.setState({ notFound: true });
          }
        }}
      >
        <div className="loading">Loading...</div>
      </BuilderComponent>
    ) : (
      <NotFound /> // Your 404 content
    );
  }
}

const NotFound = () => <h1>No page found for this URL, did you publish it?</h1>;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
