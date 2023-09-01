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
    margin: 1rem 0 1.5rem;
    color: ${(props) => props.theme['main-color']};
    font-size: 2rem;
    text-align: center;
    font-weight: 900;
  }

  p {
    color: ${(props) => props.theme['color-text']};
    font-size: 1.25rem;
    font-weight: 500;
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

  @media screen and (max-width: 599px) {
    grid-template-columns: 1fr 1fr;
    /* margin-right: 2.5rem; */

    .containerCardSkills {
      width: 150px;
      margin: 0 15px 15px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .containerCardSkills {
    background-color: ${(props) => props.theme['skills-color']};
    margin: 0 1rem 1rem;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  img {
    height: 75px;
    width: 170px;
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
    color: #000;
  }
`
