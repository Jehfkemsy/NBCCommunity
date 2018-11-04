import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentA from './../../store/action/ContentA';
import ResponseA from './../../store/action/ResponseA';
import './style.css';
import ShowCard from './../../components/ShowCard/ShowCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Caro extends Component {
  state = {
    contents: [
      [
        {
          title: '',
          image: '',
          description: ''
        }
      ],
      [
        {
          title: '',
          image: '',
          description: ''
        }
      ],
      [
        {
          title: '',
          image: '',
          description: ''
        }
      ]
    ],
    telemundoLoaded: false,
    syfyLoaded: false,
    usaLoaded: false
  };

  componentDidUpdate(prevProp) {
    if (prevProp.telemundoShows !== this.props.telemundoShows) {
      let telemundoReform = this.remap(this.props.telemundoShows, 'Telemundo');
      let syfyReform = this.remap(this.props.syfyShows, 'SYFY');
      let usaReform = this.remap(this.props.usaShows, 'USA');
      let tmp = [telemundoReform, syfyReform, usaReform];
      this.setState({ contents: tmp });
      this.setState({ telemundoLoaded: true });
    }

    if (prevProp.syfyShows !== this.props.syfyShows) {
      let telemundoReform = this.remap(this.props.telemundoShows, 'Telemundo');
      let syfyReform = this.remap(this.props.syfyShows, 'SYFY');
      let usaReform = this.remap(this.props.usaShows, 'USA');
      let tmp = [telemundoReform, syfyReform, usaReform];
      this.setState({ contents: tmp });
      this.setState({ syfyLoaded: true });
    }
    if (prevProp.usaShows !== this.props.usaShows) {
      let telemundoReform = this.remap(this.props.telemundoShows, 'Telemundo');
      let syfyReform = this.remap(this.props.syfyShows, 'SYFY');
      let usaReform = this.remap(this.props.usaShows, 'USA');
      let tmp = [telemundoReform, syfyReform, usaReform];
      this.setState({ contents: tmp });
      this.setState({ usaLoaded: true });
    }
  }

  remap = src => {
    return src.map(show => {
      return {
        title: show.attributes.name,
        image: show.relationships.media.data[0].relationships.image.data.attributes.path,
        description: show.attributes.description
      };
    });
  };

  render() {
    console.log(this.state.contents);
    return (
      <div>
        {this.state.telemundoLoaded && this.state.syfyLoaded && this.state.usaLoaded
          ? this.state.contents.map(channel => {
              return (
                <div className="scrolling-wrapper">
                  <h1>{channel[0].channel}</h1>
                  {channel.map(show => {
                    let responses = [];

                    this.props.responses.map(response => {
                      if (response.show === show.title) responses.push(response);
                    });

                    return (
                      <ShowCard
                        className="card"
                        key={show.image}
                        responses={responses}
                        image={show.image}
                        title={show.title}
                        description={show.description}
                      />
                    );
                  })}
                </div>
              );
            })
          : console.log('Empty channel list')}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    telemundoShows: state.ContentR.telemundoShows,
    syfyShows: state.ContentR.syfyShows,
    usaShows: state.ContentR.usaShows,
    responses: state.ResponseR.responses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    contentFn: ContentA(dispatch),
    responseFn: ResponseA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Caro);
