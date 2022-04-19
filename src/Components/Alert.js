import React from 'react'

function Alert(props) {
  const capitalize = (word)=> {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return (  
    props.alert &&  <div className={`container alert alert-${props.alert.type} alert-dismissible fade show my-3`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
    </div>
  )
}

export default Alert
