import React from 'react';
import ResponseA from './../../store/action/ResponseA';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  Input
} from 'reactstrap';
import ResponseCard from '../ResponseCard/ResponseCardMUI';
import { connect } from 'react-redux';
import DialogTitle from '@material-ui/core/DialogTitle';

class showModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      currentComment: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleCommentOnChange = this.handleCommentOnChange.bind(this);
    this.handlePostResponse = this.handlePostResponse.bind(this);
  }

  nameRef = React.createRef();

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleCommentOnChange(e) {
    this.setState({
      currentComment: e.target.value
    });
  }

  handlePostResponse() {
    let data = {
      percentageRating: 0,
      userId: '',
      comment: this.state.currentComment,
      image: this.props.image,
      video: '',
      type: '',
      show: this.props.buttonLabel,
      dislikes: 1,
      likes: 1,
      decorations: true,
      views: 0
    };

    this.props.responseFn.postResponse(data);
  }

  render() {
    return (
      <div>
        <DialogTitle className="h2_title" style={{ marginLeft: '-10px' }}>
          {this.props.buttonLabel}
        </DialogTitle>

        <div className="row half_row">
          <div className="col-md-5 offset-md-1">
            <img className="img-fluid " alt="Responsive image" src={this.props.image} alt="nbc_images" />
          </div>
          <div className="col-md-6">
            <p className="desc_p">{this.props.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10 offset-sm-1 comments">
            {this.props.responses.map(response => {
              console.log(response);
              return (
                <div>
                  <ResponseCard
                    id={response.id}
                    rating={response.percentageRating}
                    comments={response.comment}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <InputGroup>
              {/* <InputGroupAddon addonType="prepend">@</InputGroupAddon> */}
              <Input
                type="textarea"
                placeholder="Share your thought ..."
                value={this.state.inputValue}
                onChange={evt => this.handleCommentOnChange(evt)}
              />
            </InputGroup>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-sm-10 offset-sm-1">
            <ul className="modal_btns p-0 d-flex justify-content-between">
              <li>
                <Button color="primary" onClick={this.handlePostResponse}>
                  Comment
                </Button>
              </li>
              <li>
                <Button color="secondary" onClick={this.props.handleCloseDialog}>
                  Go Back
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    responseFn: ResponseA(dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(showModal);
