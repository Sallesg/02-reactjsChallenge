import styled from 'styled-components'

export const HeaderDiv = styled.div`
  background-color: #131217;
  max-width: 1024px;
  height: 180px;
  margin: auto;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 2px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  background-color: #131217;
  max-width: 1024px;
  height: 100vh;
  margin: auto;
  margin-bottom: 40px;
  border-radius: 2px;
`

export const AddButton = styled.button`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 3px;
  padding: 20px 105px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  margin: 25px 0;
`

export const RemoveButton = styled.button` 
  background: #ca4949;
  color: #fff;
  border: 0;
  border-radius: 3px;
  padding: 15px 20px;
  cursor: pointer;
  margin-left: 50px;
`