import { memo } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"


type headerProps = {
    title: string
}

const Styledh2 = styled(motion.h2)`
font-size: 3.5em;
text-align: center;
margin-bottom:0px
`;

const Header = ({title}:headerProps) => {

  return (
    <Styledh2
    initial={{ opacity: 0,y:-250}}
    animate={{ opacity: 1,y:0}}
    transition={{delay:0.5}}
    >
      {title}
    </Styledh2>
  )
}

export default memo(Header)