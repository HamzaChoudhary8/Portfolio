import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

          <svg xmlns="http://www.w3.org/2000/svg" width="6000" height="6000" viewBox="0 0 6000 6000">
            
            <path ref={outlineLogoRef} id="Line_3" data-name="Line 3" class="cls-1" d="M2568,962l6,1031Z"/>
            <path ref={outlineLogoRef} id="Line_4" data-name="Line 4" class="cls-1" d="M2556,1981L592,3192Z"/>
            <path ref={outlineLogoRef} id="Line_5" data-name="Line 5" class="cls-1" d="M584,4618l12-1432Z"/>
            <path ref={outlineLogoRef} id="Line_6" data-name="Line 6" class="cls-1" d="M602,4630l678,462Z"/>
            <path ref={outlineLogoRef} id="Line_7" data-name="Line 7" class="cls-1" d="M1280,5079l18-1516Z"/>
            <path ref={outlineLogoRef} id="Line_8" data-name="Line 8" class="cls-1" d="M1298,3563l1264-791Z"/>
            <path ref={outlineLogoRef} id="Line_9" data-name="Line 9" class="cls-1" d="M2574,2772l-18,1709Z"/>
            <path ref={outlineLogoRef} id="Line_10" data-name="Line 10" class="cls-1" d="M2552,4481l190,222Z"/>
            <path ref={outlineLogoRef} id="Line_11" data-name="Line 11" class="cls-1" d="M2742,4703l1397,5Z"/>
            <path ref={outlineLogoRef} id="Line_12" data-name="Line 12" class="cls-1" d="M4139,4708l561-687Z"/>
            <path ref={outlineLogoRef} id="Line_13" data-name="Line 13" class="cls-1" d="M4700,4021l-1364,16Z"/>
            <path ref={outlineLogoRef} id="Line_14" data-name="Line 14" class="cls-1" d="M3334,4041l2-2468Z"/>
            <path ref={outlineLogoRef} id="Line_15" data-name="Line 15" class="cls-1" d="M3324,1581l1308,4Z"/>
            <path ref={outlineLogoRef} id="Line_16" data-name="Line 16" class="cls-1" d="M4628,1585l4,724Z"/>
            <path ref={outlineLogoRef} id="Line_17" data-name="Line 17" class="cls-1" d="M4624,2301l848-4Z"/>
            <path ref={outlineLogoRef} id="Line_18" data-name="Line 18" class="cls-1" d="M5472,2301l-16-1252Z"/>
            <path ref={outlineLogoRef} id="Line_19" data-name="Line 19" class="cls-1" d="M5460,1061L5356,937Z"/>
            <path ref={outlineLogoRef} id="Line_20" data-name="Line 20" class="cls-1" d="M5356,950l-2776-1Z"/>
            <path ref={outlineLogoRef} id="Line_21" data-name="Line 21" class="cls-1" d="M608,950l730-4Z"/>
            <path ref={outlineLogoRef} id="Line_22" data-name="Line 22" class="cls-1" d="M1326,954l4,1312Z"/>
            <path ref={outlineLogoRef} id="Line_23" data-name="Line 23" class="cls-1" d="M1340,2266L624,2706Z"/>
            <path ref={outlineLogoRef} id="Line_24" data-name="Line 24" class="cls-1" d="M618,946l4,1756Z"/>
        </svg>
    </div>
  )
}

export default Logo
