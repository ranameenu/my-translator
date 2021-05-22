import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    language: {},
    inputlang: '',
    outputlang: '',
    input: '',
    output: '',
  };

  getLangs = async () => {
    const res = await axios.get(
      'https://api.cognitive.microsofttranslator.com/languages?api-version=3.0'
    );

    this.setState({ language: res.data.translation });
  };

  componentDidMount() {
    this.getLangs();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getOptions = () => {
    let options = [];
    for (let key in this.state.language) {
      options.push(
        <option key={key} value={key}>
          {this.state.language[key].name}
        </option>
      );
    }
    return options;
  };

  getTranslate = async () => {
    var subscriptionKey = 'bbce00cf9d3c44d88c0bbea72a017304';
    var endpoint = 'https://api.cognitive.microsofttranslator.com';
    var location = 'centralindia';

    const res = await axios({
      baseURL: endpoint,
      url: '/translate',
      method: 'post',
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
      },
      params: {
        'api-version': '3.0',
        from: this.state.inputlang,
        to: this.state.outputlang,
      },
      data: [
        {
          text: this.state.input,
        },
      ],
      responseType: 'json',
    });

    this.setState({ output: res.data[0].translations[0].text });
  };

  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className="col-6 mt-5">
            <select
              className="form-select p-2"
              aria-label="Default select example"
              name="inputlang"
              value={this.state.inputlang}
              onChange={this.onChange}
            >
              {this.getOptions()}
            </select>
            <textarea
              className="form-control"
              rows="5"
              name="input"
              value={this.state.input}
              onChange={this.onChange}
            ></textarea>
          </div>
          <div className="col-6 mt-5">
            <select
              className="form-select p-2"
              aria-label="Default select example"
              name="outputlang"
              value={this.state.outputlang}
              onChange={this.onChange}
            >
              {this.getOptions()}
            </select>
            <textarea
              className="form-control"
              rows="5"
              value={this.state.output}
              // name="output"
              disabled
            ></textarea>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-3">
            <button
              type="button"
              onClick={this.getTranslate}
              className="btn btn-primary"
            >
              Translate
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
