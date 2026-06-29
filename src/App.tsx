import Scene from './scene/Scene';
import Overlay from './overlay/Overlay';
import LoadingScreen from './overlay/LoadingScreen';

export default function App() {
  return (
    <>
      <Scene />
      <Overlay />
      <LoadingScreen />
    </>
  );
}
