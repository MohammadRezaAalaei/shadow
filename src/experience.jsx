import { PresentationControls } from "@react-three/drei"
import { Model } from "./scene"
import { useRef } from "react"
import {useFrame} from "@react-three/fiber"
import * as THREE from 'three'
const point = [-1, 2.3, -2.1]
const point2 = [-1, 2.3, -2.6]
const plane = new THREE.PlaneGeometry(2,2,2,2)
const Experience = () => {
    const pointLightRef = useRef(null)
    const pointLightRef2 = useRef(null)
    useFrame( (state) => {
        if (!! pointLightRef.current) {
            pointLightRef.current.shadow.bias = -0.0001
            pointLightRef.current.shadow.mapSize.width = 128
            pointLightRef.current.shadow.mapSize.height = 128
            // pointLightRef.current.shadow.camera.near = 0.5
            // pointLightRef.current.shadow.camera.far = 100
            // pointLightRef.current.shadow.camera.left = -10
            // pointLightRef.current.shadow.camera.right = 10
            // pointLightRef.current.shadow.camera.top = 10
            // pointLightRef.current.shadow.camera.bottom = -10
            pointLightRef.current.shadow.radius = 5
            pointLightRef.current.shadow.blurSamples = 25
        }
               if (!! pointLightRef2.current) {
            pointLightRef2.current.shadow.bias = -0.0001
            pointLightRef2.current.shadow.mapSize.width = 128
            pointLightRef2.current.shadow.mapSize.height = 128
            // pointLightRef.current.shadow.camera.near = 0.5
            // pointLightRef.current.shadow.camera.far = 100
            // pointLightRef.current.shadow.camera.left = -10
            // pointLightRef.current.shadow.camera.right = 10
            // pointLightRef.current.shadow.camera.top = 10
            // pointLightRef.current.shadow.camera.bottom = -10
            pointLightRef2.current.shadow.radius = 5
            pointLightRef2.current.shadow.blurSamples = 25
        }
    })

    return (
        <>
        <ambientLight intensity={0.3}/>
        <pointLight intensity={0.5} position={point} castShadow={true} ref={pointLightRef}/>
        <pointLight intensity={0.5} position={point2} castShadow={true} ref={pointLightRef2}/>
        {/* <mesh position={point} castShadow={true}> 
        <sphereGeometry args={[0.2, 32, 32]}/>
        <meshPhongMaterial color="white"/>
        </mesh> */}
        <Model/>
        </>
)
}

export default Experience