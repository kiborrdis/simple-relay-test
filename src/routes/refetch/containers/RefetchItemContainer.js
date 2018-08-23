import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import ListItem from 'shared/components/ListItem';

const RefetchItemContainer = ({ item: { hallName, slug, technology } }) => (
  <ListItem data={[hallName, slug, technology]} />
);

export default createFragmentContainer(
  RefetchItemContainer,
  graphql`
    fragment RefetchItemContainer_item on CinemaDetailNode {
      slug
      hallName
      technology
    }
  `,
);
