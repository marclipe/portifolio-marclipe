import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
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
`

export const Menu = styled.div`
  /* Customize os estilos do menu de acordo com o seu design */
  background-color: ${(props) => props.theme.background};
  padding: 2.5rem;
  font-size: 1.5rem;

  /* Customize os estilos dos itens do menu */
  .menu-item {
    display: block;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['color-text']};
    font-weight: 500;
    font-size: 1.25rem;
    text-decoration: none;
    cursor: pointer;
  }
`
