import { gql } from "@apollo/client";

export const GET_WEATHER = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      country
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }       
        timestamp
      }     
    }
  }
`;
