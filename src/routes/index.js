import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import RefetchPage from './refetch';
import PaginationPage from './pagination';
import FragmentPage from './fragment';

const RootRoutes = () => (
  <Switch>
    <Route path="/refetch" component={RefetchPage} />
    <Route path="/pagination" component={PaginationPage} />
    <Route path="/fragment" component={FragmentPage} />
    <Redirect to="/refetch" />
  </Switch>
);

export default RootRoutes;
