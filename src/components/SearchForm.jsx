import React from "react";
import { Button, InputGroup, Form } from "reactstrap";
import '../App.css';

function SearchForm(props) {
    return (
      <Form inline>
          <div className="form-group my-5">
            <label htmlFor="search"></label>
            <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for a book"
                id="search"
            />
            <InputGroup>
            <Button onClick={props.handleFormSubmit} className="btn btn-secondary"> 
                Search
            </Button>
            </InputGroup>
          </div>
      </Form>  
    );
}

export default SearchForm;