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

    .active-link {
      color: ${(props) => props.theme['color-text']};
      font-weight: 500;
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 599px) {
    gap: 2rem;
    nav {
      gap: 1rem;
    }

    /* h3 {
      display: none;
    } */
  }

  &.active-link {
    font-weight: bold;
    color: blue; /* ou a cor desejada */
  }
`
