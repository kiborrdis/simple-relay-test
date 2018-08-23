import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import ListItem from 'shared/components/ListItem';

const PaginationItemContainer = ({
  item: {
    id, slug, genreDescription, summary,
  },
}) => (
  <ListItem data={[id, slug, genreDescription, summary]} />
);

export default createFragmentContainer(
  PaginationItemContainer,
  graphql`
    fragment PaginationItemContainer_item on GenreTypeNode {
      id
      slug
      genreDescription
      summary
    }
  `,
);
