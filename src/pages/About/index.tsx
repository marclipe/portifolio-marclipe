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
import sassIcon from '../../assets/icons/sass-icon.svg'
import gitIcon from '../../assets/icons/git-icon.svg'
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
        <img
          src="https://user-images.githubusercontent.com/70382532/138322189-2db8df52-9dcb-40a0-88a8-c365466bd33d.gif"
          alt=""
        />
        <h1>Marcos Felipe</h1>
        <p>
          My name is Marcos Felipe de Sousa Lima 👋 I am from Brazil, São
          Paulo/SP.
        </p>
      </ContainerContent>

      <ContainerSkills className="animated">
        <div>
          <h2>- Hard Skills -</h2>
        </div>
        <ContentSkills>
          <div className="containerCardSkills">
            <h3>HTML</h3>
            <img src={htmlIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>CSS</h3>
            <img src={cssIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>Javascript</h3>
            <img src={javascriptIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>Typescript</h3>
            <img src={typescriptIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>ReactJS</h3>
            <img src={reactIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>Node.JS</h3>
            <img src={nodeIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>Sass</h3>
            <img src={sassIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>GIT</h3>
            <img src={gitIcon} alt="" />
          </div>
        </ContentSkills>
      </ContainerSkills>
    </ContainerAbout>
  )
}
