import { ReactElement } from "react"

type HeadingProps={title:string}
// only returning element  ---> ReactElement
const Heading = ({title}:HeadingProps): ReactElement => {
  return <h1>{title}</h1>
}

export default Heading