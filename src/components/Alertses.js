import React from 'react'

export default function Alertses(props) {
  return (
 
     props.ALERTS && <div class="alert alert-warning alert-dismissible fade show" role="alert" >
        
  <strong>{props.ALERTS.type}</strong>{props.ALERTS.message} 
</div>

  )
}
