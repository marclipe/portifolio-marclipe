import {
  ContainerAbout,
  ContainerContent,
  ContainerSkills,
  ContentSkills,
} from './styles'
import htmlIcon from '../../assets/icons/new-icons/html5.svg'
import cssIcon from '../../assets/icons/new-icons/css3.svg'
import javascriptIcon from '../../assets/icons/new-icons/js.svg'
import typescriptIcon from '../../assets/icons/new-icons/typescript.svg'
import reactIcon from '../../assets/icons/new-icons/reactjs.svg'
import nodeIcon from '../../assets/icons/new-icons/nodejs.svg'
import styledCompIcon from '../../assets/icons/new-icons/styles-components.svg'
import gitIcon from '../../assets/icons/new-icons/git.svg'
import imageProfileAbout from '../../assets/profile-about.png'
import imageNextjs from '../../assets/icons/new-icons/nextjs2.svg'
import imageDocker from '../../assets/icons/new-icons/docker.svg'
import imageSass from '../../assets/icons/new-icons/sass.svg'
import imageRedux from '../../assets/icons/new-icons/redux.svg'
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
          Paulo/SP. <br /> I started to like technology when I got my first
          computer and got to know the Internet. I graduated in ADS and, during
          my studies, I was able to learn a lot from my classmates and teachers.
          <br />I understand that I need to learn every day and always be
          prepared for new challenges. Furthermore, I believe that knowing how
          to use technology to your advantage is super important.
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
              <code>Next.js</code>
            </h3>
            <img src={imageNextjs} alt="" />
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
          <div className="containerCardSkills">
            <h3>
              <code>Sass</code>
            </h3>
            <img src={imageSass} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>
              <code>Node.JS</code>
            </h3>
            <img src={nodeIcon} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>
              <code>Docker</code>
            </h3>
            <img src={imageDocker} alt="" />
          </div>
          <div className="containerCardSkills">
            <h3>
              <code>Redux</code>
            </h3>
            <img src={imageRedux} alt="" />
          </div>
        </ContentSkills>
      </ContainerSkills>
    </ContainerAbout>
  )
}
