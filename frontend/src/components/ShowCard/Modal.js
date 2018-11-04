import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ResponseA from './../../store/action/ResponseA';
import Comments from '../ResponseCard/ResponseCard';
import { connect } from 'react-redux';

class showModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  postResponse = () => {
    let data = {
      percentageRating: 0,
      userId: localStorage.getItem("userId"),
      comment,
      image,
      video,
      type,
      show,
      dislikes:1,
      likes:1,
      views: 0
  }
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className="show_content">
          <ModalHeader toggle={this.toggle}>{this.props.buttonLabel}</ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-md-6">
                <img className="img-fluid" src={this.props.image} alt="" />
              </div>
              <div className="col-md-6">{this.props.buttonLabel}</div>
            </div>
            <div className="row">
              <div className="col-sm-10 comments">
            
              </div>
            </div>
          </ModalBody>
          {this.props.responses.map(response => {
            console.log('modal')
            console.log(response)
            return(
              <div>
              <Comments id = {response.id} rating = {response.percentageRating} comments={response.comment}/>
              </div>
            )
          })}
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Comment
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Go Back
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    responseFn: ResponseA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(showModal);

