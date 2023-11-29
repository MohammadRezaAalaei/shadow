import React, { useRef, useState } from 'react';
import "./App.css"
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box, CameraControls, OrbitControls } from '@react-three/drei';
import Experience from './experience';
import { Model } from './scene';
import { VRButton, ARButton, XR, Controllers, Hands, useXR} from '@react-three/xr'
import { TeleportationPlane } from '@react-three/xr'
import SmoothLocomotion from './SmoothLocomotion.jsx'
import SnapRotation from './SnapRotation'
import { Environment } from '@react-three/drei'
import AppRouter from './AppRouter';


function App() {
  return (
    <div className='App'>
    <AppRouter />
    </div>
  )
}

export default App;