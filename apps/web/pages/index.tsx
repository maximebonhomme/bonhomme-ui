import { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import monokaiSublime from "react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime"
import { Direction, GradientBlur } from "@maxbonhomme/ui"
import { globalCss, styled } from "@stitches/react"
import { CheckIcon, ClipboardCopyIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { CopyToClipboard } from "react-copy-to-clipboard"
import "normalize.css"

const Box = styled("div")
const Flex = styled("div", { display: "flex" })
const Img = styled("img")
const A = styled("a")
const Copy = styled("p", {
  margin: 0,
  padding: 0,
})

const globalStyles = globalCss({
  "@import": [
    "url('https://fonts.cdnfonts.com/css/sf-pro-display')",
    "url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap')",
  ],
  body: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "'SF Pro Display', sans-serif",
    lineHeight: 1.35,
  },
})

const ts = `// index.tsx
import { GradientBlur, Direction } from "@maxbonhomme/ui"

const Component = () => (
  <GradientBlur direction={Direction.TO_BOTTOM} />
)
`

const js = `// index.jsx
import { GradientBlur } from "@maxbonhomme/ui"

const Component = () => (
  <GradientBlur direction='to bottom' />
)
`

export default function Web() {
  globalStyles()

  return (
    <>
      <Box
        as="header"
        css={{
          position: "fixed",
          top: -1,
          left: 0,
          right: 0,
          height: 100,
          zIndex: 1,
        }}
      >
        <GradientBlur direction={Direction.TO_TOP} />
      </Box>
      <Flex
        css={{
          position: "relative",
          backgroundColor: "rgb(49, 37, 0)",
          height: "90vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          css={{
            backgroundImage: "url(/images/tom-morbey-NxZK1rr7kC4-unsplash.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(30px)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.3,
          }}
        />
        <Box
          css={{
            position: "relative",
            borderRadius: 20,
            overflow: "hidden",
            maxWidth: 600,
          }}
        >
          <GradientBlur direction={Direction.TO_BOTTOM} />
          <Img
            css={{
              display: "block",
              width: "100%",
              boxShadow: "0 8px 60px 0px rgba(0,0,0,0.7)",
              border: "1px solid rgba(255,255,255,0.069)",
            }}
            src="/images/tom-morbey-NxZK1rr7kC4-unsplash.jpg"
            alt="Photo by Tom Morbey on Unsplash"
          />
          <Box css={{ position: "absolute", bottom: 30, left: 30, right: 30 }}>
            <Copy css={{ fontSize: 22, marginBottom: 8 }}>GradientBlur component</Copy>
            <Copy css={{ maxWidth: "80%" }}>
              A zero-depedency React component to create a pure CSS progressive blur on
              any element. Customizable via style or classname.
            </Copy>
          </Box>
        </Box>
      </Flex>
      <YarnInstall />

      <Box
        css={{
          width: "100%",
          maxWidth: 600,
          margin: "0 auto",
          backgroundColor: "rgb(35, 36, 31)",
          padding: "10px 20px",
          borderRadius: 10,
          marginBottom: "20px",
        }}
      >
        <SyntaxHighlighter language="typescript" style={monokaiSublime}>
          {ts}
        </SyntaxHighlighter>
      </Box>
      <Box
        css={{
          width: "100%",
          maxWidth: 600,
          margin: "0 auto",
          backgroundColor: "rgb(35, 36, 31)",
          padding: "10px 20px",
          borderRadius: 10,
        }}
      >
        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
          {js}
        </SyntaxHighlighter>
      </Box>
      <Box css={{ padding: "120px 0", textAlign: "center" }}>
        <A
          css={{ all: "unset", cursor: "pointer" }}
          href="https://github.com/maximebonhomme/bonhomme-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon width={26} height={26} />
        </A>
      </Box>
    </>
  )
}

const YarnInstall = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <Box css={{ padding: "120px 30px", backgroundColor: "black", textAlign: "center" }}>
      <Flex
        css={{
          borderRadius: 20,
          backgroundColor: "rgb(36, 36, 36)",
          display: "inline-flex",
          padding: "14px 28px",
          alignItems: "center",
        }}
      >
        <Copy
          css={{
            fontFamily: "'IBM Plex Mono', monospace",
            marginRight: 16,
            paddingRight: 16,
            borderRight: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          yarn install @maxbonhomme/ui
        </Copy>
        <CopyToClipboard text="yarn install @maxbonhomme/ui" onCopy={handleCopy}>
          <Box css={{ height: 15, cursor: "pointer" }}>
            {copied ? <CheckIcon /> : <ClipboardCopyIcon />}
          </Box>
        </CopyToClipboard>
      </Flex>
    </Box>
  )
}
