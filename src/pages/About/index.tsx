import {
  ContainerAbout,
  ContainerContent,
  ContainerSkills,
  ContentSkills,
} from './styles'
import htmlIcon from '../../assets/icons/html5-icon.svg'
import cssIcon from '../../assets/icons/css3-icon.svg'
import javascriptIcon from '../../assets/icons/javascript-icon.svg'
import typescriptIcon from '../../assets/icons/typescript-icon.svg'
import reactIcon from '../../assets/icons/react-icon.svg'
import nodeIcon from '../../assets/icons/nodejs-icon.svg'
import styledCompIcon from '../../assets/icons/styled-components-icon.svg'
import gitIcon from '../../assets/icons/git-icon.svg'
import imageProfileAbout from '../../assets/profile-about.png'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

export function About() {
  useEffect(() => {
    const sr = ScrollReveal()
    sr.reveal('.animated', {
      delay: 300,
      duration: 800,
      distance: '20px',
      easing: 'ease-in-out',
      origin: 'bottom',
    })
  }, [])

  return (
    <ContainerAbout>
      <ContainerContent className="animated">
        <img src={imageProfileAbout} alt="" />
        <h1>Marcos Felipe</h1>
        <p>
          My name is Marcos Felipe de Sousa Lima 👋 I am from Brazil, São
          Paulo/SP. <br /> I graduated in Análise e Desenvolvimento de Sistemas.
          <br />I live intensely in the technology area. My focus at the moment
          is on Web Development.
        </p>
      </ContainerContent>

      <ContainerSkills className="animated">
        <div>
          <h2>- Hard Skills -</h2>
        </div>
        <ContentSkills>
          <div className="containerCardSkills">
            <h3>
              <code>HTML</code>
            </h3>
            <img src={htmlIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>
              <code>CSS</code>
            </h3>
            <img src={cssIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>
              <code>Javascript</code>
            </h3>
            <img src={javascriptIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>
              <code>Typescript</code>
            </h3>
            <img src={typescriptIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>
              <code>ReactJS</code>
            </h3>
            <img src={reactIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>
              <code>Node.JS</code>
            </h3>
            <img src={nodeIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>
              <code>Styled Components</code>
            </h3>
            <img src={styledCompIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>
              <code>GIT</code>
            </h3>
            <img src={gitIcon} alt="" />
          </div>
        </ContentSkills>
      </ContainerSkills>
    </ContainerAbout>
  )
}
