import { createFragmentContainer, graphql } from 'react-relay';
import FragmentCard from '../components/FragmentCard';

export default createFragmentContainer(
  FragmentCard,
  {
    card: graphql`
      fragment FragmentCardContainer_card on Query @argumentDefinitions(
        id: {type: "ID!"}
      ) {
        company(id: $id) {
          companyName
          description
          companyPosterImage
        }
      }
    `,
  },
);
