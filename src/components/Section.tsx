import {ReactNode
} from "react";
type sectionProps={
    title?:string,
    children:ReactNode
}

const Section = ({title="subheading", children}:sectionProps):JSX.Element => {
  return (
    <div>

        <h2>{title}</h2>
     <div>
        {children}
     </div>
    </div>
  )
}

export default Section