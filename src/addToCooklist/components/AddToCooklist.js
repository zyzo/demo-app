import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddToCooklist = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="add-to-cooklist-form">
          <h2>Schedule for</h2>
          <Form>
            <FormGroup>
              <Label htmlFor="timeInput">Date</Label>
              <Input type="datetime" id="timeInput" placeholder="Enter a date"/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="noteInput">Notes (optional)</Label>
              <Input type="textarea" id="noteInput" placeholder="Enter a note"/>
            </FormGroup>
            <Button color="primary" block>Save this</Button>
          </Form>
        </div>
      </div>
    );
  }
});

export default AddToCooklist;
