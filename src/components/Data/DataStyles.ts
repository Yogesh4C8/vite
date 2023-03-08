import styled from 'styled-components';
import { motion } from "framer-motion"


export const Styleddiv = styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-bottom:0px;
    border: none;
    border-bottom: 2px dashed black;
    width: 200px;
`; 

export const Span1 = styled.span`
font-weight: bold;
`
export const Span2 = styled.span`
    padding-bottom: 5px;
    // border-bottom: 2px dashed black;
    text-align:left;
`