import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentA from './../../store/action/ContentA';
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
      <div>
      <Query
        query={GET_SHOWS}
        variables={{ number: 1, network: "telemundocms" }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          //REDUX THIS THING PLEASE DATA SHOULD BE PASSED TO ACTION IF IT IS TO WORK
          //data
          console.log("Inside GQL")
          console.log(data.shows.data);
          this.props.contentFn.getTelemundo(data.shows.data);
          return <React.Fragment />;
        }}
      </Query>

      <Query
      query={GET_SHOWS}
      variables={{ number: 1, network: "syfy" }}
      >
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        //REDUX THIS THING PLEASE DATA SHOULD BE PASSED TO ACTION IF IT IS TO WORK
        //data
        console.log("Inside GQL")
        console.log(data.shows.data);
        this.props.contentFn.getSyfy(data.shows.data);
        return <React.Fragment />;
      }}
      </Query>

       <Query
        query={GET_SHOWS}
        variables={{ number: 1, network: "usa" }}
        >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

        //REDUX THIS THING PLEASE DATA SHOULD BE PASSED TO ACTION IF IT IS TO WORK
        //data
        console.log("Inside GQL")
        console.log(data.shows.data);
        this.props.contentFn.getUSA(data.shows.data);
        return <React.Fragment />;
      }}
      </Query>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contents: state.ContentR.contents,
    responses: state.ResponseR.responses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    contentFn: ContentA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GQL);

// export default GQL;
