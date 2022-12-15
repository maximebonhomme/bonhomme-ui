import { CSSProperties } from "react"

export enum Direction {
  TO_RIGHT = "to right",
  TO_LEFT = "to left",
  TO_BOTTOM = "to bottom",
  TO_TOP = "to top",
}

interface GradientBlurProps {
  direction: Direction
  style?: CSSProperties
}

const STEP_COUNT: number = 8
const STEP_VALUE: number = 100 / STEP_COUNT

const baseStyles: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}

const gradientStyles: CSSProperties = {
  ...baseStyles,
}

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

export const GradientBlur = ({ direction, style }: GradientBlurProps) => {
  const stepsArray: number[] = Array.from(Array(STEP_COUNT).keys())

  return (
    <div style={{ ...baseStyles, ...style }}>
      {stepsArray.map((item) => {
        const baseFactor: number = (item + 1) * STEP_VALUE
        const blur: number = item * item

        const stops: number[] = [
          clamp(baseFactor, STEP_VALUE, 100),
          clamp(baseFactor * 2, STEP_VALUE, 100),
          clamp(baseFactor * 3, STEP_VALUE, 100),
        ]
        const mask: string = `linear-gradient(
          ${direction},
          rgba(0, 0, 0, 0) ${stops[0]}%,
          black ${stops[1]}%,
          rgba(0, 0, 0, 0) ${stops[2]}%
        )`

        return (
          <div
            key={item}
            style={{
              ...gradientStyles,
              backdropFilter: `blur(${blur}px)`,
              // @ts-ignore
              "-webkit-mask": mask,
              mask,
            }}
          />
        )
      })}
    </div>
  )
}
