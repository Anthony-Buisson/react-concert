import React from 'react';
import { Error, Retry } from "../../style/components/shared/ErrorMessage.style";

const ErrorMessage = (props) => {
    const {message, retry} = props;

    return (
        <Error onClick={retry}>{message}<Retry>recharger</Retry></Error>
    )
}

export default ErrorMessage;
