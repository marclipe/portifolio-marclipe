import { styled } from 'styled-components'

export const LayoutContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0 2.5rem;

  max-width: 74rem;
  height: calc(100vh - 10rem);

  @media screen and (max-width: 599px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
