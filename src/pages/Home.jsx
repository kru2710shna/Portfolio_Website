import {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/island';
import sky from '../models/sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';

const Home = () => {

  const adjustIslandScreenSize = () => {

    let screenScale = null
    let screenPosition = [0,-6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9 , 0.9, 0.9];
      screenPosition = [0,-6.5, -43];
    }
    else{
      screenScale = [1,1,1];
      screenPosition = [0,-6.5, -43];
    }
    return [screenScale, screenPosition, rotation]
    } 
    const [islandScale , islandPosition , islandRotation] = adjustIslandScreenSize();



  
  return (
    <section className = "w-full h-screen relative">
      <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{near: 0.1, far: 1000}}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1,1,1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <spotLight />
            <hemisphereLight skyColor = '#b1e1ff' groundColor='#000000' intensity={1}/>

            <Bird />
            <Sky />
            <Island 
            position = {islandPosition}
            scale  = {islandScale}
            rotation = {islandRotation}/>

            <Plane />

          </Suspense>
      </Canvas>

    </section>
  )
  
}
export default Home