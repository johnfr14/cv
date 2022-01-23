import { useRef } from "react"
import { SlideFade } from "@chakra-ui/transition"
import { useInViewport } from "react-in-viewport"

const SlideFadeOnScroll = ({ children, offsetX = "0px", offsetY = "60px", enter = 0.1 }) => {
  const myRef = useRef(null)
  const { enterCount } = useInViewport(myRef, { threshold: enter }, {}, {})
  return (
    <SlideFade
      ref={myRef}
      in={enterCount > enter}
      initialscale={0.5}
      offsetY={offsetY}
      offsetX={offsetX}
      delay={{ enter: 0.25}}
      transition={{
        enter: { duration: 0.6 },
      }}
    >
      {children}
    </SlideFade>
  )
}

export default SlideFadeOnScroll