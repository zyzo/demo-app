import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddToCooklist = React.createClass({
  getInitialState() {
    return {
      dateInput: '',
      noteInput: ''
    };
  },
  render() {
    const {
      addBookmark
    } = this.props;
    return (
      <div className="container">
        <div className="add-to-cooklist-form">
          <h2>Schedule for</h2>
          <Form>
            <FormGroup>
              <Label htmlFor="timeInput">Date</Label>
              <Input type="datetime" id="dateInput" placeholder="Enter a date"
                value={this.state.dateInput}
                onChange={e => {
                  this.setState({ dateInput: e.target.value });
                }}/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="noteInput">Notes (optional)</Label>
              <Input type="textarea" id="noteInput" placeholder="Enter a note"
                value={this.state.noteInput}
                onChange={e => {
                  this.setState({ noteInput: e.target.value });
                }}
              />
            </FormGroup>
            <Button color="primary" block onClick={(e) => {
              e.preventDefault();
              addBookmark({
                date: this.state.dateInput,
                note: this.state.noteInput
              });
            }}>Save this</Button>
          </Form>
        </div>
      </div>
    );
  }
});

export default AddToCooklist;
