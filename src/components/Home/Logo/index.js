import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import DrawSVG from 'react-svg-drawing'
import LogoS from '../../../assets/images/logohc.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVG)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 30,
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

      <DrawSVG width="inherit" duration="6000">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 6000 6000">
                    <path ref={outlineLogoRef} class="st0" d="M3237.43,5513.4c-207.02-125-412.08-252.57-622.25-373.45c-64.44-37.06-87.72-76.19-87.05-142.69
	                      c3.71-368.77,3.58-737.6,0.11-1106.37c-0.62-65.97,19.86-105.26,87.51-141.09c621.06-328.96,1239.07-662.25,1859.7-991.83
	                      c62.46-33.17,87.25-69.05,86.12-133.18c-4.36-247.86-1.87-495.81-1.93-743.73c-0.01-30.39,0-60.78,0-106.07
	                      c266.62,0,522.63,0,778.64,0c0,1072.54,0,2145.09,0,3217.63c-256.08,0-512.16,0-781.45,0c0-524.22,0-1039.28,0-1560.12
	                      c-23.57,7.59-34.07,9.36-42.54,13.94c-399.54,216.06-799.84,431.1-1196.54,651.03c-32.01,17.74-55.06,69.15-55.4,105.11
	                      c-4.09,436.92-3.13,873.88-3.48,1310.82C3251.72,5513.4,3244.58,5513.4,3237.43,5513.4z"/>
                      <path ref={outlineLogoRef} class="st0" d="M622.09,491.66c838.83-0.72,1677.66-0.64,2516.47-3.3c93.68-0.3,120.24,44.98,120.85,109.66
	                      c2.35,247.06,0.95,494.14,0.95,748.23c-241.52,0-478.51,0-727.18,0c0-113.32,0-226.37,0-345.79c-405.55,0-799.6,0-1201.99,0
	                      c0,648.47,0,1296.8,0,1955.03c303.61,0,605.46,0,936.9,0c-91.55,94.81-164.56,172.2-239.82,247.91
	                      c-97.73,98.32-177.38,232.59-301.57,282.35c-124.03,49.71-293.41,14.76-442.91,15.94c-110.65,0.87-221.31,0.27-331.97,0.15
	                      c-184-0.2-249.25-41.42-304.66-190.94c-6.16-16.61-16.61-32.02-25.07-47.99C622.09,2339.16,622.09,1415.41,622.09,491.66z"/>
                      <path ref={outlineLogoRef} class="st0" d="M2537.95,1783.68c237.09,0,471,0,714.51,0c2.47,26.34,7.07,52.78,7.11,79.22
	                      c0.52,334.26-1.19,668.54,1.89,1002.78c0.55,59.14-17.52,95.14-78.46,126.82c-213.29,110.87-422.53,227.6-645.04,348.49
	                      C2537.95,2815.96,2537.95,2302.41,2537.95,1783.68z"/>
              </svg>
        </DrawSVG>

          {/* <svg xmlns="http://www.w3.org/2000/svg" width="6000" height="6000" viewBox="0 0 6000 6000">
            
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
        </svg> */}
    </div>
  )
}

export default Logo
