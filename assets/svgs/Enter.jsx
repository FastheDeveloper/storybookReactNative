import * as React from "react"
import Svg, { Path } from "react-native-svg"
export const EnterSvg = (props) => (
    <Svg  fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5.5h3.333A1.666 1.666 0 0 1 15.5 2.167v11.666a1.666 1.666 0 0 1-1.667 1.667H10.5m-4.167-3.333L10.5 8m0 0L6.333 3.833M10.5 8H.5"
    />
  </Svg>
)

export const Front = (props) => (
  <Svg fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.167 10h11.666m0 0L10 4.167M15.833 10 10 15.833"
    />
  </Svg>
)

