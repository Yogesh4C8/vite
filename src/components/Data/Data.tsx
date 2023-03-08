import React from 'react'
import { DataProps } from './Data.types';
import {Styleddiv, Span1, Span2 } from './DataStyles'


const Data = ({title,value,initial,animate,transition}:DataProps) => {
  return (
    <Styleddiv initial={initial} animate={animate} transition={transition}>
        <Span1>{title}</Span1>
        <Span2>{value}</Span2>
    </Styleddiv>
  )
}

export default Data