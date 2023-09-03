import { styled } from 'styled-components'

export const ContainerProjects = styled.section``

export const ContainerCat = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.125rem;
  img {
    border-radius: 10px;
  }
`

export const ContentProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.688rem;
  margin-top: 3.688rem;

  @media screen and (max-width: 599px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  h1 {
    font-size: 2rem;
    font-weight: 900;
    color: ${(props) => props.theme['main-color']};
  }

  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${(props) => props.theme['color-text']};
    max-width: 398px;
    padding-top: 1.688rem;
  }
`

export const MyProjects = styled.div`
  margin: 6.5rem 0 8rem;
  display: grid;
  place-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  .projects {
    border-radius: 1.75rem;
    flex-shrink: 0;
    background-color: ${(props) => props.theme['main-color']};
  }

  .first-project {
    width: 340px;
    height: 190px;
    margin-bottom: 3.125rem;
  }

  .second-project {
    width: 340px;
    height: 250px;
  }

  .third-project {
    width: 340px;
    height: 190px;
    margin-bottom: 3.125rem;
  }

  .fourth-project {
    width: 340px;
    height: 250px;
  }

  .fifth-project {
    width: 340px;
    height: 190px;
    margin-top: 3.625rem;
  }

  .sixth-project {
    width: 340px;
    height: 250px;
  }

  @media screen and (max-width: 599px) {
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 2.125rem;
    margin-top: 3rem;
    .projects {
      width: 320px;
      height: 190px;
      margin: 0;
    }
  }
`
