import React from 'react';
import environment from 'shared/relay/environment';
import { graphql, QueryRenderer } from 'react-relay';
import LoadableRelayRoot from 'shared/components/LoadableRelayRoot';
import RefetchListContainer from './RefetchListContainer';

const RefetchContainer = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
    query RefetchContainerQuery($count: Int!) {
      ...RefetchListContainer_list @arguments(count: $count)
    }
   
  `}
    variables={{ count: 10 }}
    render={props => (
      <LoadableRelayRoot {...props}>
        {() => <RefetchListContainer list={props.props} />}
      </LoadableRelayRoot>
    )}
  />
);

export default RefetchContainer;
