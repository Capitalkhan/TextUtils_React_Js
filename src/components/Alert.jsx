import React from "react";


export default function Alert(props) {
    const capatilize = (word)=>{
        let str = word.toLowerCase();
        return word.charAt(0).toUpperCase() + str.slice(1)

    }
    return(
            props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capatilize(props.alert.type)}</strong>: {props.alert.message}
            </div>
    );
}