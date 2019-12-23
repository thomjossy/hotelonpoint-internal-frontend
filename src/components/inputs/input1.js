import React from 'react'
function  Input (props){

return(
    <div>
    <label>{props.Label}</label>
    <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} className="form-control"  placeholder={props.placeholder}/>
    <small>{props.smallText}</small>  
    </div>
)

}

function Input2(props){
    return(
<div>
<input class="form-check-input" type={props.type} value={props.value} onChange={props.onChange} />
<label class="form-check-label h6">{props.range}</label>
</div>
    )

}
export { Input, Input2}
