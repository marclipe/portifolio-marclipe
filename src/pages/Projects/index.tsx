import {
  ContainerCat,
  ContainerProjects,
  ContentProjects,
  MyProjects,
} from './styles'
import catGif from '../../assets/cat-typing-img.gif'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

export function Projects() {
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
    <ContainerProjects>
      <ContainerCat className="animated">
        <img src={catGif} alt="" />
      </ContainerCat>
      <ContentProjects className="animated">
        <h1>
          My <br /> Portfolio
        </h1>
        <p>Estes são alguns dos trabalhos e projetos que já realizei</p>
      </ContentProjects>
      <MyProjects className="animated">
        <a href="https://apiflix.vercel.app/" target="_blank" rel="noreferrer">
          <div className="first-project projects">
            <span>React</span>
            <span>Typescript</span>
            <span>styled-components</span>
          </div>
        </a>
        <a href="#">
          <div className="second-project projects">
            <span>HTML</span>
            <span>Typescript</span>
            <span>Typescript</span>
          </div>
        </a>
        <a href="#">
          <div className="third-project projects">
            <span>React</span>
            <span>Typescript</span>
            <span>Typescript</span>
          </div>
        </a>
        <a href="#">
          <div className="fourth-project projects">
            <span>React</span>
            <span>Typescript</span>
            <span>Typescript</span>
          </div>
        </a>
        <a href="#">
          <div className="fifth-project projects">
            <span>React</span>
            <span>Typescript</span>
            <span>Typescript</span>
          </div>
        </a>
        <a href="#">
          <div className="sixth-project projects">
            <span>React</span>
            <span>Typescript</span>
            <span>Typescript</span>
          </div>
        </a>
      </MyProjects>
    </ContainerProjects>
  )
}
