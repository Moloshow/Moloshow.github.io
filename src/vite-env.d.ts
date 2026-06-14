/// <reference types="vite/client" />

declare module '*.css' {
  const content: string
  export default content
}

declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from 'react'
  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>
  export default ReactComponent
}
