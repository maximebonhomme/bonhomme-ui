import { Direction, GradientBlur } from "@maxbonhomme/ui"

export default function Web() {
  return (
    <div style={{ position: "relative", width: 300 }}>
      <GradientBlur direction={Direction.TO_TOP} />
      <h1>Web</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic in harum
        assumenda, ab ea consequatur minima corrupti veritatis aspernatur cumque voluptas
        numquam aliquam esse architecto sunt iusto similique quos.
      </p>
    </div>
  )
}
