import { styled } from 'styled-components'
import imageFlix from '../../assets/apiflix-image.png'
import imageFormCompany from '../../assets/form-company.png'
import imageBeautySalon from '../../assets/image-beaty-salon.png'
import imageCampIn from '../../assets/image-campin.png'
import imagePricingTable from '../../assets/image-pricing-table.png'
import imageDelivery from '../../assets/image-delivery.png'

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
    background-color: ${(props) => props.theme['main-color']};
    transition: 1s;
    box-shadow: 0 4px 25px rgba(14, 36, 49, 0.15);

    &:hover {
      transform: scale(1.1);
      transition: 0.5s;

      span {
        display: block;
        background-color: ${(props) => props.theme['skills-color']};
        border-radius: 3px;
        padding: 0.125rem 0.5rem;
        color: #000;
        margin-bottom: 1rem;
        font-weight: 500;
        font-size: 0.625rem;
        text-transform: uppercase;
      }
    }

    span {
      display: none;
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
  }

  .first-project {
    width: 340px;
    height: 190px;
    margin-bottom: 3.125rem;

    background-image: url(${imageFlix});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .second-project {
    width: 340px;
    height: 250px;

    background-image: url(${imageBeautySalon});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
  }

  .third-project {
    width: 340px;
    height: 190px;
    margin-bottom: 3.125rem;

    background-image: url(${imageCampIn});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .fourth-project {
    width: 340px;
    height: 250px;

    background-image: url(${imageFormCompany});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .fifth-project {
    width: 340px;
    height: 190px;
    margin-top: 3.625rem;

    background-image: url(${imagePricingTable});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .sixth-project {
    width: 340px;
    height: 250px;

    background-image: url(${imageDelivery});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
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
