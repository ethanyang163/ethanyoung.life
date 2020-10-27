import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  height: 70px;
  margin: 20px auto;

  @media screen and (min-width: 768px) {
    height: 120px;
  }
`

export const Logo = styled.img`
  max-width: 100px;

  @media screen and (min-width: 768px) {
    max-width: 250px;
  }
`
export const Title = styled.div`
  color: #6fadc6;
  font-size: 24px;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`
