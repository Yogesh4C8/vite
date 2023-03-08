import React, { useEffect, useState } from 'react'
import Data from '../Data/Data'
import { DataHolderProps } from './DataHolder.types'
import {StyledSection}  from './DataHolderStyles'


const DataHolder = ({visibility,high,low,wind,direction,humidity,pressure,sunrise,sunset}:DataHolderProps) => {
  return (
    <StyledSection>
        <Data title='High/Low' value={`${high}/${low}`}  initial={{ opacity: 0,x:-250}} animate={{ opacity: 1,x:0}}  transition={{delay:0.1}} key={high} />
        <Data title='Wind' value={`${wind} km/hr`} initial={{ opacity: 0,x:-250}} animate={{ opacity: 1,x:0}}  transition={{delay:0.2}} key={wind}/>
        <Data title='Humidity' value={`${humidity} %`} initial={{ opacity: 0,x:-250}} animate={{ opacity: 1,x:0}}  transition={{delay:0.3}} key={humidity}/>
        <Data title='Wind Direction' value={`${direction} deg`} initial={{ opacity: 0,x:-250}} animate={{ opacity: 1,x:0}}  transition={{delay:0.4}} key={direction}/>
        <Data title='Pressure' value={` ${pressure} hPa`} initial={{ opacity: 0,x:-250}} animate={{ opacity: 1,x:0}}  transition={{delay:0.5}} key={pressure}/>
        <Data title='Sunrise' value={`${sunrise} AM`} initial={{ opacity: 0,x:-250}} animate={{ opacity: 1,x:0}}  transition={{delay:0.6}} key={sunrise}/>
        <Data title='Visibility' value={visibility} initial={{ opacity: 0,x:-250}} animate={{ opacity: 1,x:0}}  transition={{delay:0.7}} key={visibility}/>
        <Data title='Sunset' value={`${sunset} PM`} initial={{ opacity: 0,x:-250}} animate={{ opacity: 1,x:0}}  transition={{delay:0.8}} key={sunset}/>
    </StyledSection>
  )
}

export default DataHolder