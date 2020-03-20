import React, { Component } from 'react';
import styles from './Checkout.module.css';
import Input from '../../components/UI/Input/Input';

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
                valid: false
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
                valid: false
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
                valid: false
            },
            delivery: {
                fieldType: 'select',
                fieldConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest Shipping' },
                        { value: 'cheapest', displayValue: 'Cheapest Shipping' }
                    ]
                },
                value: ''
            },
            comments: {
                fieldType: 'textArea',
                fieldConfig: {
                    type: 'text',
                    placeholder: 'Information to our courrier...'
                },
                value: ''
            }
        }
    }

    inputChangedHandler = (event, id) => {
        let updatedForm = { ...this.state.form };
        let updatedFormElement = { ...updatedForm[id] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.inputValidation(updatedFormElement.value, updatedFormElement.validation)
        updatedForm[id] = updatedFormElement;
        console.log(updatedForm[id])
        this.setState({ form: updatedForm })
    }

    inputValidation = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.zipLength) {
            isValid = value.length === 5 && isValid;
        }

        return isValid;
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
                shouldValidate={element.config.validation} />
        })

        return (
            <div className={styles.CheckoutContainer}>
                <h2>Please Enter Your Shipping Information</h2>
                <form className={styles.Form}>
                    {shippingForm}
                </form>
                <button className={styles.Order}>ORDER</button>
            </div>
        )
    }
}

export default Checkout;