import * as React from 'react'

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 551.034 551.034"
    role="img"
    aria-label="Instagram"
    {...props}
  >
    <defs>
      <linearGradient
        id="instaGradient1"
        gradientUnits="userSpaceOnUse"
        x1="275.517"
        y1="549.7202"
        x2="275.517"
        y2="4.5714"
      >
        <stop offset="0" stopColor="#E09B3D" />
        <stop offset="0.3" stopColor="#C74C4D" />
        <stop offset="0.6" stopColor="#C21975" />
        <stop offset="1" stopColor="#7024C4" />
      </linearGradient>

      <linearGradient
        id="instaGradient2"
        gradientUnits="userSpaceOnUse"
        x1="275.517"
        y1="549.7202"
        x2="275.517"
        y2="4.5714"
      >
        <stop offset="0" stopColor="#E09B3D" />
        <stop offset="0.3" stopColor="#C74C4D" />
        <stop offset="0.6" stopColor="#C21975" />
        <stop offset="1" stopColor="#7024C4" />
      </linearGradient>

      <linearGradient
        id="instaGradient3"
        gradientUnits="userSpaceOnUse"
        x1="418.306"
        y1="549.7202"
        x2="418.306"
        y2="4.5714"
      >
        <stop offset="0" stopColor="#E09B3D" />
        <stop offset="0.3" stopColor="#C74C4D" />
        <stop offset="0.6" stopColor="#C21975" />
        <stop offset="1" stopColor="#7024C4" />
      </linearGradient>
    </defs>

    <path
      fill="url(#instaGradient1)"
      d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722
      c0,90.516,73.64,164.156,164.156,164.156h222.722
      c90.516,0,164.156-73.64,164.156-164.156V164.156
      C551.033,73.64,477.393,0,386.878,0z
      M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156
      c-60.045,0-108.722-48.677-108.722-108.722V164.156
      c0-60.046,48.677-108.722,108.722-108.722h222.722
      c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878z"
    />

    <path
      fill="url(#instaGradient2)"
      d="M275.517,133c-78.584,0-142.517,63.933-142.517,142.517
      s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.517
      S354.101,133,275.517,133z
      M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083
      s38.989-87.083,87.083-87.083
      c48.095,0,87.083,38.988,87.083,87.083
      C362.6,323.611,323.611,362.6,275.517,362.6z"
    />

    <circle
      fill="url(#instaGradient3)"
      cx="418.306"
      cy="134.072"
      r="34.149"
    />
  </svg>
)

export default Instagram
