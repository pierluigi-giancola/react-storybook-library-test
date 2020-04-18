import React from 'react'

export default (props) => {
    console.log(props.complexObj.nested.nested.title)
return <div>{props.children}</div>
}