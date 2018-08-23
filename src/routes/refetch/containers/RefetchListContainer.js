import React from 'react';
import { createRefetchContainer, graphql } from 'react-relay';
import RefetchList from '../components/RefetchList';

class RefetchListContainer extends React.Component {
  state = { loading: false };

  onNextPageClick = () => {
    const { list: { allCinemaDetails: { pageInfo: { endCursor } } } } = this.props;

    this.changePage(prevVariables => ({ ...prevVariables, cursor: endCursor }));
  };

  onPrevPageClick = () => {
    const { list: { allCinemaDetails: { pageInfo: { startCursor } } } } = this.props;

    this.changePage(prevVariables => ({ ...prevVariables, startCursor }));
  };

  onLoadEnd = () => {
    this.setState({ loading: false });
  };

  changePage(newVariables) {
    const { relay } = this.props;

    this.setState({ loading: true });

    relay.refetch(
      newVariables,
      undefined,
      this.onLoadEnd,
    );
  }

  render() {
    const {
      list: {
        allCinemaDetails: { edges, pageInfo: { hasNextPage, hasPreviousPage } },
      },
    } = this.props;
    const { loading } = this.state;

    return (
      <RefetchList
        edges={edges}
        loading={loading}
        onPrevClick={hasPreviousPage && this.onPrevPageClick}
        onNextClick={hasNextPage && this.onNextPageClick}
      />
    );
  }
}

export default createRefetchContainer(
  RefetchListContainer,
  {
    list: graphql`
    fragment RefetchListContainer_list on Query
    @argumentDefinitions(
      count: {type: "Int", defaultValue: 10}
      cursor: {type: "String", defaultValue: null}
      startCursor: {type: "String", defaultValue: null}
    ) {
      allCinemaDetails(
        first: $count
        after: $cursor
        before: $startCursor
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            ...RefetchItemContainer_item
          }
        }
      }
    }
  `,
  },
  graphql`
    query RefetchListContainerQuery(
      $count: Int!
      $cursor: String = null
      $startCursor: String = null
    ) {
      ...RefetchListContainer_list @arguments(count: $count, cursor: $cursor, startCursor: $startCursor)
    }
  `,
);
