import React, { Component } from 'react';
import { Button , Form, FormGroup, Label} from 'react-bootstrap';

class RegisterMaaling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maalerNummer: props.maalerNummer,
            maalingHovedValue: props.maalingHovedValue,
            maalingLeietakerValue: props.maalingLeietakerValue
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
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
            <Form inline onSubmit={this.handleSubmit}>
                <FormGroup controlId="maalerNummer">
                    <ControlLabel>Måler nummer</ControlLabel>{' '}
                    <FormControl type="text" placeholder="Måler nummer" />
                </FormGroup>{' '}
                <FormGroup controlId="hovedmaaler">
                    <ControlLabel>Hovedmåler</ControlLabel>{' '}
                    <FormControl type="text" placeholder="Hovedmåler" />
                </FormGroup>{' '}
                <FormGroup controlId="leitagermaaler">
                    <ControlLabel>Leietager måler</ControlLabel>{' '}
                    <FormControl type="text" placeholder="Leietager måler" />
                </FormGroup>{' '}
                <Button type="submit">Registrer</Button>
            </Form>
        );
    }
}

export default RegisterMaaling;