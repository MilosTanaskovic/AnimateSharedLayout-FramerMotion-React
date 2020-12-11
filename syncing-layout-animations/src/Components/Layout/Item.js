import React,{useState} from 'react'
import '../../index.css';
import {motion, AnimateSharedLayout, AnimatePresence} from 'framer-motion';
import Content from './Content';
const Item = () => {
 const [toggle, setToggle] = useState(false);
 return (
  <motion.li
  layout
  initial={{borderRadius: 10}}
  onClick={() => setToggle(!toggle)}
  >
   <motion.div className="avatar" layout></motion.div>
   <AnimatePresence layout>
    {toggle && <Content />}
   </AnimatePresence>
  </motion.li>
 )
}

export default Item
