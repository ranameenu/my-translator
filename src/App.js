import React from 'react';

function App() {
  return (
    <div class="container">
      <div class="row ">
        <div class="col-6 mt-3">
          <select class="form-select p-2" aria-label="Default select example">
            <option selected>Select Language</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <div class="col-6 mt-3">
          <select class="form-select p-2" aria-label="Default select example">
            <option selected>Select Resultant language</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
