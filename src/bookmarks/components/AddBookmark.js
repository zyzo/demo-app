import React from 'react';
import { browserHistory } from 'react-router';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddToCooklist = React.createClass({
  getInitialState() {
    return {
      dateInput: '',
      mealInput: '',
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
              <Input type="date" id="dateInput" value={this.state.dateInput}
                onChange={e => {
                  this.setState({ dateInput: e.target.value });
                }}/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="mealInput">Meal</Label>
              <Input type="select" id="mealInput" value={this.state.mealInput}
                onChange={e => {
                  this.setState({ mealInput: e.target.value });
                }}>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </Input>
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
                meal: this.state.mealInput,
                note: this.state.noteInput
              });
              browserHistory.push(`/bookmarks`);
            }}>Save this</Button>
          </Form>
        </div>
      </div>
    );
  }
});

export default AddToCooklist;
