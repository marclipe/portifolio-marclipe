import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { TerminalWindow } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <TerminalWindow size={45} />
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
          projects
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
