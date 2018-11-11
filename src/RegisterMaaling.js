import React, { Component } from 'react';

class RegisterMaaling extends Component {
    constructor(props) {
        super(props);
        this.state = {maalerNummer: props.maalerNummer,maalingHovedValue: props.maalingHovedValue,maalingLeietakerValue: props.maalingLeietakerValue};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState( {
            maalerNummer: event.target.maalerNummer,
            maalingHovedValue: event.target.maalingLeietakerValue,
            maalingLeietakerValue: event.target.maalingHovedValue
        });

    }

    handleSubmit(event) {
        let sentence = 'Målernummer'+ this.state.maalerNummer + ' er registrert';
        alert(sentence);
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} >
              <div>
                    Målenummer:
                    <input disabled={true} type="text" value={this.state.maalerNummer} onChange={this.handleChange} />
                <br />
                    Hoved måling:
                    <input type="text" value={this.state.maalingHovedValue} onChange={this.handleChange} />
                <br />
                    Leietaker måling:
                    <input type="text" value={this.state.maalingLeietakerValue} onChange={this.handleChange} />
                <br />
                <input type="submit" value="Submit" />
              </div>
            </form>
            </div>
        );
    }
}

export default RegisterMaaling;