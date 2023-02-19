import React from 'react'

function Alerts(props) {

    const capitalize = (msg) =>{
        const str = msg;
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        return str2
    }
  return (
    <div class={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)} + : + {props.alert.msg}</strong>
    </div>
  )
}

export default Alerts