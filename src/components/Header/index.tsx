import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import imgLogo from '../../assets/imgLogo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={imgLogo} alt="" />
        <h3>MarcLipe</h3>
      </div>
      <nav>
        <NavLink to={'/'} className="active-link">
          home
        </NavLink>
        <NavLink to={'/about'} className="active-link">
          about
        </NavLink>
        <NavLink to={'/skills'} className="active-link">
          skills
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
