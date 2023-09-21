import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import Loader from '../Loader'

function Computer({ isMobile }) {
    const computer = useGLTF('./desktop_pc/scene.gltf')
    return (
        <mesh>
            <primitive
                object={computer.scene}
                scale={isMobile ? .9 : 1.2}
                rotation={[-0.01, -0.2, -0.2]}
                position={isMobile ? [0, -2.25, -0.9] : [0, -2.25, -2]}
            />
        </mesh>
    )
}
export default function ComputerCanvas() {
    const [isMobile, setMobile] = useState(false)
    useEffect(function () {
        const mediaQuery = window.matchMedia('(max-width:900px)')

        setMobile(mediaQuery.matches)

        const handleMedia = (event) => {
            setMobile(event.matches)
        }
        mediaQuery.addEventListener('change', handleMedia)
        return () => {
            mediaQuery.removeEventListener('change', handleMedia)
        }
    }, [])

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <hemisphereLight intensity={0.15} groundColor='black' />
                <directionalLight intensity={2.1} />
                <ambientLight intensity={2.1} />
                <spotLight
                    position={[10, 15, 100]}
                    angle={0.2}
                    castShadow
                    shadow-mapSize={1024}
                    penumbra={1}
                />
                <pointLight intensity={3} position={isMobile ? [0, 1, 3.25] : [0, 2.9, 1.7]} />
                <Computer isMobile={isMobile} />
            </Suspense>
        </Canvas>
    )
}