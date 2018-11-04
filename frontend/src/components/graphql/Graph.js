import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_SHOWS = gql`
  query shows($number: Int, $network: String) {
    shows(number: $number, network: $network) {
      data {
        id
        attributes {
          provider
          genre
          category
          description
          name
          type
          showColor
          promoKicker
          promoDescription
        }
        relationships {
          media {
            data {
              relationships {
                image {
                  data {
                    attributes {
                      provider
                      path
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

class GQL extends Component {
  render() {
    // the variables prop can be programatically set up if wanted to by redux, I guess.
    return (
      <Query
        query={GET_SHOWS}
        variables={{ number: 5, network: 'telemundocms' }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          //REDUX THIS THING PLEASE DATA SHOULD BE PASSED TO ACTION IF IT IS TO WORK
          //data
          console.log(data);
          return <React.Fragment />;
        }}
      </Query>
    );
  }
}

export default GQL;
