import React, { Component } from 'react';
import styles from './Checkout.module.css';
import Input from '../../components/UI/Input/Input';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';

class Checkout extends Component {
    state = {
        form: {
            name: {
                fieldType: 'input',
                fieldConfig: {
                    type: 'text',
                    placeholder: 'Your name...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                isTouched: false
            },
            address: {
                fieldType: 'input',
                fieldConfig: {
                    type: 'text',
                    placeholder: 'Your address...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                isTouched: false
            },
            zipCode: {
                fieldType: 'input',
                fieldConfig: {
                    type: 'text',
                    placeholder: 'Your ZIP...'
                },
                value: '',
                validation: {
                    required: true,
                    zipLength: 5
                },
                valid: false,
                isTouched: false
            },
            delivery: {
                fieldType: 'select',
                fieldConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest Shipping' },
                        { value: 'cheapest', displayValue: 'Cheapest Shipping' }
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            },
            comments: {
                fieldType: 'textArea',
                fieldConfig: {
                    type: 'text',
                    placeholder: 'Information to our courrier...'
                },
                value: '',
                validation: {},
                valid: true
            }
        },
        formValidity: false
    }

    inputChangedHandler = (event, id) => {
        let updatedForm = { ...this.state.form };
        let updatedFormElement = { ...updatedForm[id] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.inputValidation(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.isTouched = true;
        updatedForm[id] = updatedFormElement;

        let formValid = true;
        for (let formID in updatedForm) {
            formValid = updatedForm[formID].valid && formValid
        }

        this.setState({ form: updatedForm, formValidity: formValid })
    }

    inputValidation = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.zipLength) {
            isValid = value.trim().length === 5 && isValid;
        }

        return isValid;
    }

    sendData = () => {
        const orderData = {
            products: this.props.order,
            contact: {
                name: this.state.form.name.value,
                address: this.state.form.address.value,
                zipCode: this.state.form.zipCode.value,
                delivery: this.state.form.delivery.value,
                comments: this.state.form.comments.value
            }
        }
        axios.post('https://react-my-burger-48405.firebaseio.com/barbora.json', orderData)
            .then(response => {
                this.props.history.push('/')
                window.location.reload();
            })
            .catch(err => {
                alert('Oops...Someting went wrong!')
            })
    }

    render() {
        const formArray = [];
        for (let key in this.state.form) {
            formArray.push({
                id: key,
                config: this.state.form[key]
            })
        }

        const shippingForm = formArray.map(element => {
            return <Input
                key={element.id}
                fieldType={element.config.fieldType}
                attributes={element.config.fieldConfig}
                value={element.config.value}
                inputChanged={(event) => this.inputChangedHandler(event, element.id)}
                notValid={!element.config.valid}
                touched={element.config.isTouched} />
        })

        return (
            <div className={styles.CheckoutContainer}>
                <h2>Please Enter Your Shipping Information</h2>
                <form className={styles.Form}>
                    {shippingForm}
                </form>
                <button
                    className={styles.Order}
                    disabled={!this.state.formValidity}
                    onClick={this.sendData}>ORDER</button>
            </div>
        )
    }
}

export default withRouter(Checkout);