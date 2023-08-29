import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  margin-top: 5rem;
`

export const ContentContainer = styled.div`
  h1 {
    color: ${(props) => props.theme['main-color']};
    padding-bottom: 0.125rem;
  }

  p {
    font-weight: 400;
    font-size: 1.5rem;
    color: ${(props) => props.theme['color-text']};
    padding-bottom: 0.125rem;
  }

  button {
    /* display: inline-block; */
    background-color: ${(props) => props.theme['main-color']};
    border: none;
    padding: 0.75rem 2.5rem;
    border-radius: 0.5rem;
    color: ${(props) => props.theme['white-color']};
    font-weight: 500;
    margin-top: 4rem;
  }

  .social__icon-container {
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`

export const ImageContainer = styled.div`
  position: absolute;
  right: 10%;

  .home_img {
    border-radius: 50%;
    width: 18.75rem;
  }
`
