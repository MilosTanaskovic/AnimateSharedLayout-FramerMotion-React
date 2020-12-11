import React from 'react'
// import Animation
import { motion, AnimateSharedLayout } from 'framer-motion';
// import Item Component
import Item from './Layout/Item';
const Layout = () => {
 const items = [0, 1, 2];
 return (
  <AnimateSharedLayout>
   <motion.ul
   layout  
   initial={{borderRadius: 25}}
   >
    {items.map((item) => {
     <Item key={item}/>
    })}
   </motion.ul>
  </AnimateSharedLayout>
 )
}

export default Layout
