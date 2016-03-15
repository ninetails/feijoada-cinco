import React, {Component, PropTypes} from 'react';

export default class TextInput extends Component {
  static propTypes = {
    itemId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    doneEditing: PropTypes.func.isRequired,
    cancelEditing: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.text
    };
  }

  handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
        return this.props.doneEditing(this.props.itemId, this.state.value);
      case 'Escape':
        return this.cancelEditing(this.props.itemId);
    }
  };

  handleOnBlur = (e) => {
    return this.cancelEditing(this.props.itemId);
  };

  handleOnChange = (e) => {
    this.setState({value: e.target.value});
  };

  cancelEditing() {
    this.setState({value: this.props.text});
    return this.props.cancelEditing(this.props.itemId);
  }

  render() {
    return (
      <input className="edit"
             autoFocus={true}
             type="text"
             ref="itemInput"
             value={this.state.value}
             onChange={this.handleOnChange}
             onKeyDown={this.handleKeyDown}
             onBlur={this.handleOnBlur}/>
    );
  }
}
