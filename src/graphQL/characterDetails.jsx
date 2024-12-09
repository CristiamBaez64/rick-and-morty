import { gql } from "@apollo/client";

export const get_characters = gql`
query {
    characters {
      results {
        name
        image
        species
        status
        gender
        origin{
            name
        }
      }
    }
}`