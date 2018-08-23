import React from 'react';
import { hot } from 'react-hot-loader';
import 'reset-css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import RootRoutes from './routes';

const App = () => (
  <Router>
    <Layout>
      <RootRoutes />
    </Layout>
  </Router>
);

export default hot(module)(App);
