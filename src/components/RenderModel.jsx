import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const RenderModel = ({children, className}) => {
  return (
   <Canvas>
    {/* load the model */}
    <Suspense fallback={null}>
        {children}
    </Suspense>
   </Canvas>
  )
}

export default RenderModel