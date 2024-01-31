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
        <p>These are some of the jobs and projects I have already done</p>
      </ContentProjects>
      <MyProjects className="animated">
        <a href="https://psifranleao.web.app/" target="_blank" rel="noreferrer">
          <div className="first-project projects"></div>
        </a>
        <a
          href="https://beautysalon-tan.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="second-project projects"></div>
        </a>
        <a
          href="https://marclipe-blog.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="third-project projects"></div>
        </a>
        <a
          href="https://main--velvety-moxie-c46960.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="fourth-project projects"></div>
        </a>
        <a
          href="https://college-list-marclipe.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="fifth-project projects"></div>
        </a>
        <a
          href="https://marclipe.github.io/marcscript-/delivery-landing-page/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="sixth-project projects"></div>
        </a>
      </MyProjects>
    </ContainerProjects>
  )
}
