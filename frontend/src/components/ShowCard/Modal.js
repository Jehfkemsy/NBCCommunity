import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Comments from '../ResponseCard/ResponseCard';

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
              <Comments comments={response.comment}/>
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

export default showModal;
