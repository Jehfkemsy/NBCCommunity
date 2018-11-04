import React, { Component } from 'react';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import ContentA from './../../store/action/ContentA';

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
        variables={{ number: 25, network: 'telemundocms' }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          //REDUX THIS THING PLEASE DATA SHOULD BE PASSED TO ACTION IF IT IS TO WORK
          //data
          console.log(data);
          // this.props.contentFn.getContents(data);
          return <React.Fragment />;
        }}
      </Query>
    );
  }
}

// const mapStateToProps = state => {
//   return {
     
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     contentFn: ContentA(dispatch)
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(GQL);

export default GQL;

