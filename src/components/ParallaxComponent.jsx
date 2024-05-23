import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function ParallaxComponent() {
  return (
    <div className='parallax-wrapper'>
        <Parallax pages={2} style={{ top: '0', left: '0' }} className="parallax-animation">
      <ParallaxLayer offset={0} speed={2}>
        <div className="parallax-layer" id="parallax-background"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.1}>
        <p className="parallax-layer" id="parallax-text">Big Chungus</p>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1}>
        <div className="parallax-layer" id="parallax-foreground"></div>
      </ParallaxLayer>
    </Parallax>
    </div>
  );
}