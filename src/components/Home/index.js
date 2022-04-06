import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle1 from '../../assets/images/H.png'
import LogoTitle2 from '../../assets/images/C.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray1 = ['a','m','z','a']
  const nameArray2 = ['h','o','u','d','h','a','r','y']
  const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
      <div className="text-zone">
                <h1>
                    <sapn className={letterClass}>H</sapn>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle1} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray1}
                    idx={15} />
                    <img src={LogoTitle2} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray2}
                    idx={19} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={27} />
                </h1>
                <h2>Frontend Developer / JavaScript </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
