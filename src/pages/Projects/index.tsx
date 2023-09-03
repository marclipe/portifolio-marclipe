import {
  ContainerCat,
  ContainerProjects,
  ContentProjects,
  MyProjects,
} from './styles'
import catGif from '../../assets/cat-typing-img.gif'

export function Projects() {
  return (
    <ContainerProjects>
      <ContainerCat>
        <img src={catGif} alt="" />
      </ContainerCat>
      <ContentProjects>
        <h1>
          My <br /> Portfolio
        </h1>
        <p>Estes são alguns dos trabalhos e projetos que já realizei</p>
      </ContentProjects>
      <MyProjects>
        <a href="#">
          <div className="first-project projects">
            <span>React</span>
            <span>Typescript</span>
          </div>
        </a>
        <a href="#">
          <div className="second-project projects">
            <span>HTML</span>
            <span>Typescript</span>
          </div>
        </a>
        <a href="#">
          <div className="third-project projects">
            <span>React</span>
            <span>Typescript</span>
          </div>
        </a>
        <a href="#">
          <div className="fourth-project projects">
            <span>React</span>
            <span>Typescript</span>
          </div>
        </a>
        <a href="#">
          <div className="fifth-project projects">
            <span>React</span>
            <span>Typescript</span>
          </div>
        </a>
        <a href="#">
          <div className="sixth-project projects">
            <span>React</span>
            <span>Typescript</span>
          </div>
        </a>
      </MyProjects>
    </ContainerProjects>
  )
}
