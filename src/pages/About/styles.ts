import { styled } from 'styled-components'

export const ContainerAbout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
  img {
    width: 300px;
    border-radius: 10%;
  }

  @media screen and (max-width: 320px) {
    img {
      width: 100%;
    }
  }
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 6.75rem;

  img {
    margin: 0 auto;
  }

  h1 {
    margin: 1.5rem 0 1.5rem;
    color: ${(props) => props.theme['main-color']};
    font-size: 2rem;
    text-align: center;
    font-weight: 900;
  }

  p {
    color: ${(props) => props.theme['white-color']};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.3;
    margin: 0 10rem 0;
    text-align: justify;
  }

  @media screen and (max-width: 599px) {
    p {
      margin: 0 1rem 0;
      font-size: 1rem;
    }
  }
`
export const ContainerSkills = styled.div`
  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme['main-color']};
    padding-bottom: 3.875rem;
    text-align: center;
  }
`

export const ContentSkills = styled.div`
  display: grid;
  margin: 0 auto;
  margin-bottom: 8.5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  .containerCardSkills {
    h3 {
      font-size: 1rem;
      color: ${(props) => props.theme['color-text']};
      font-weight: 900;
    }

    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }

  @media screen and (min-width: 960px) {
    .containerCardSkills {
      margin: 0 2rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  img {
    height: 85px;
    width: 85px;
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
    color: #000;
  }

  @media screen and (max-width: 599px) {
    grid-template-columns: 1fr 1fr;

    .containerCardSkills {
      width: 150px;
      margin: 0 15px 15px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
