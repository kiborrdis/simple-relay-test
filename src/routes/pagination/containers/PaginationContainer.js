import React from 'react';
import environment from 'shared/relay/environment';
import { graphql, QueryRenderer } from 'react-relay';
import LoadableRelayRoot from 'shared/components/LoadableRelayRoot';
import PaginationListContainer from './PaginationListContainer';

const PaginationContainer = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
    query PaginationContainerQuery($count: Int!) {
      ...PaginationListContainer_list @arguments(count: $count)
    }
   
  `}
    variables={{ count: 10 }}
    render={props => (
      <LoadableRelayRoot {...props}>
        {() => <PaginationListContainer list={props.props} />}
      </LoadableRelayRoot>
    )}
  />
);

export default PaginationContainer;
