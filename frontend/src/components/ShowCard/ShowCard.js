/*
Full cards to display the shows 
    * on mouse peak, shows title, and description 
    * on click onpen show page 
*/
import React, { Component } from 'react';
import { CardImg } from 'reactstrap';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Card from '@material-ui/core/Card';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import CardActionArea from '@material-ui/core/CardActionArea';

export default class MediaCard extends Component {
  state = {
    modalOpenState: false
  };

  handleModalOpen = () => {
    this.setState({ modalOpenState: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpenState: false });
  };

  render() {
    return (
      <div>
        <Card style={cardStyle}>
          <CardActionArea onClick={this.handleModalOpen}>
            <CardImg height="100%" width="100%" src={this.props.image} />
          </CardActionArea>
        </Card>

        <Dialog
          open={this.state.modalOpenState}
          onClose={this.handleModalClose}
          aria-labelledby="form-dialog-title"
        >
          <div onClick={this.handleModalClose}>
            <CloseIcon />
          </div>

          <Modal
            responses={this.props.responses}
            buttonLabel={this.props.title}
            image={this.props.image}
            userName="test"
            openDialog={this.handleModalOpen}
            handleCloseDialog={this.handleModalClose}
            description={this.props.description}
          />
        </Dialog>
      </div>
    );
  }
}

MediaCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

const cardStyle = {
  marginTop: 10,
  marginLeft: 30,
  marginBottom: 50,
  boxShadow: '1px 3px 1px',
  borderRadius: 10
};
