import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
    let inputElement = null;

    let inputStyles = [styles.InputElement]

    if (props.notValid && props.touched) {
        inputStyles.push(styles.Invalid)
    }

    switch (props.fieldType) {
        case ('input'):
            inputElement = (<div>
                <input
                    className={inputStyles.join(' ')}
                    {...props.attributes}
                    value={props.value}
                    onChange={props.inputChanged} />
                {props.notValid && props.touched ? <p className={styles.ErrMessage}>Please enter correct value...</p> : null}
            </div>)
            break;
        case ('textArea'):
            inputElement = <textarea
                className={inputStyles.join(' ')}
                style={{ margin: '10px auto', height: '70px' }}
                {...props.attributes}
                value={props.value}
                onChange={props.inputChanged} />
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputStyles.join(' ')}
                    value={props.value}
                    onChange={props.inputChanged}>
                    {props.attributes.options.map(opt => {
                        return <option key={opt.value} value={opt.value}>{opt.displayValue}</option>
                    })}
                </select>
            )
            break;
        default:
            inputElement = <input
                className={inputStyles.join(' ')}
                {...props.attributes}
                value={props.value}
                onChange={props.inputChanged} />
    }

    return inputElement;
}

export default Input;