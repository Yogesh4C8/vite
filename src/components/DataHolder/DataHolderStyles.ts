import styled from 'styled-components'
import { motion } from "framer-motion"

export const StyledSection = styled(motion.section)`
height:220px;
width:600px;
margin:20px 100px;
// background-color:pink;
display:grid;
grid-template-columns: 1fr 1fr;

grid-template-rows: repeat(4, 1fr);
grid-gap: 30px
`