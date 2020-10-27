import React from "react"
import ModeProvider from "context/ModeProvider"
require("prismjs/themes/prism-solarizedlight.css")

export const wrapRootElement = ({ element }) => (
  <ModeProvider>{element}</ModeProvider>
)
