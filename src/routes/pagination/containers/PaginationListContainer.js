import React from 'react';
import { createPaginationContainer, graphql } from 'react-relay';
import PaginationList from '../components/PaginationList';

class PaginationListContainer extends React.Component {
  state = { loading: false };

  onLoadMore = () => {
    const { relay } = this.props;

    this.setState({ loading: true });

    relay.loadMore(10, () => this.setState({ loading: false }));
  };

  render() {
    const { list: { allGenreTypes: { edges } }, relay } = this.props;
    const { loading } = this.state;

    return (
      <PaginationList
        edges={edges}
        loading={loading}
        onLoadMore={relay.hasMore() && this.onLoadMore}
      />
    );
  }
}


export default createPaginationContainer(
  PaginationListContainer,
  {
    list: graphql`
    fragment PaginationListContainer_list on Query
    @argumentDefinitions(
      count: {type: "Int", defaultValue: 10}
      cursor: {type: "String", defaultValue: null}
    ) {
      allGenreTypes(
        first: $count
        after: $cursor
      ) @connection(key: "PaginationListContainer_allGenreTypes") {
        edges {
          node {
            id
            ...PaginationItemContainer_item
          }
        }
      }
    }
  `,
  },
  {
    direction: 'forward',

    getConnectionFromProps(props) {
      const { list } = props;

      return list && list.allGenreTypes;
    },

    getFragmentVariables(prevVars, totalCount) {
      return {
        count: totalCount,
      };
    },

    getVariables(props, { cursor, count }) {
      return {
        count,
        cursor,
      };
    },

    query: graphql`
      query PaginationListContainerQuery(
        $count: Int!
        $cursor: String
      ) {
        ...PaginationListContainer_list @arguments(count: $count, cursor: $cursor)
      }
    `,
  },
);
