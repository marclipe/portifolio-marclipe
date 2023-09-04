import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3.75rem;
  color: ${(props) => props.theme['color-text']};

  div {
    display: flex;
    gap: 1.125rem;
    align-items: center;

    h2 {
      font-weight: 900;
      font-size: 2.25rem;
    }
  }

  nav {
    display: flex;
    gap: 5.813rem;

    a {
      color: ${(props) => props.theme['color-text']};
      font-weight: 500;
      font-size: 1.25rem;

      display: flex;
      justify-content: center;
      align-items: center;

      height: 3rem;
      border-top: 2px solid transparent;
      border-bottom: 2px solid transparent;
      border-radius: 2px;

      transition: all 0.2s ease-in-out 0s;

      &active,
      &:focus,
      &:hover {
        border-bottom: 2px solid ${(props) => props.theme['main-color']};
      }
    }
  }

  @media screen and (max-width: 599px) {
    gap: 2rem;
    nav {
      gap: 1.5rem;
    }

    h3 {
      display: none;
    }
  }
`
