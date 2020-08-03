import React from 'react'
import functCompHoc from './Hoc'

const functComp = (props: any): any => (
  <p>
    {props.name}, {props.message}
  </p>
)

export default functCompHoc(functComp)
