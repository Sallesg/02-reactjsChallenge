import React from 'react'
import logo from './assets/logo.svg'
import gostack from './assets/gostack.svg'
import {HeaderDiv} from './styles'

export function Header () {
  return (
    <>
    <HeaderDiv>
      <img src={logo} alt=""/>
      <img src={gostack} alt=""/>
      
    </HeaderDiv>
    </>
  )
}