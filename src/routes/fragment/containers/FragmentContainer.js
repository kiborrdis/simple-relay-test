import React from 'react';
import environment from 'shared/relay/environment';
import { graphql, QueryRenderer } from 'react-relay';
import LoadableRelayRoot from 'shared/components/LoadableRelayRoot';
import FragmentCardContainer from './FragmentCardContainer';

const FragmentContainer = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
    query FragmentContainerQuery($id: ID!) {
      ...FragmentCardContainer_card @arguments(id: $id)
    }
   
  `}
    variables={{ id: 'Q29tcGFueU5vZGU6Nw==' }}
    render={props => (
      <LoadableRelayRoot {...props}>
        {() => <FragmentCardContainer card={props.props} />}
      </LoadableRelayRoot>
    )}
  />
);

export default FragmentContainer;
