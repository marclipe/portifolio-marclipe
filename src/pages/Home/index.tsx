import { ContentContainer, HomeContainer, ImageContainer } from './styles'
import imgProfile from '../../assets/profile-pic.png'
import pdfFile from '../../pdfs/resumeMarcosFelipe.pdf'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
import iconGitHub from '../../assets/icons/bxl-github.svg'
import iconLinkedin from '../../assets/icons/bxl-linkedin-square.svg'
import iconInstagram from '../../assets/icons/bxl-instagram.svg'

export function Home() {
  const handleDownloadButton = () => {
    const pdfUrl = pdfFile
    const link = document.createElement('a')
    link.href = pdfUrl
    link.target = '_blank'
    // link.download = 'resumeMarcosFelipeSL.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
    <HomeContainer>
      <ContentContainer className="animated">
        <div>
          <p>Hello World,</p>
          <h1>I am Marcos, Front-end Developer</h1>
          <p>Welcome to my website portfolio</p>
        </div>
        <div>
          <button onClick={handleDownloadButton}>Download CV</button>
        </div>
        <div className="social__icon-container">
          <div>
            <a
              href="https://github.com/marclipe"
              target="_blank"
              rel="noreferrer"
            >
              <img src={iconGitHub} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/marclipe/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={iconLinkedin} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/marclipe_sl/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={iconInstagram} alt="" />
            </a>
          </div>
        </div>
      </ContentContainer>

      <ImageContainer className="animated">
        <div>
          <img className="home_img" src={imgProfile} alt="" />
        </div>
      </ImageContainer>
    </HomeContainer>
  )
}
