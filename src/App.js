import { PlayPauseButton } from "./PlayPauseButton";
import { Display } from "./Display";
import Reset from "./Reset";
import PointScored from "./PointScored";
import Advantage from "./Advantage";

export default function App() {
  return (
    <>
        <div className='displayScore'>
          <Display />
        </div>
        <div>
          <Advantage />
        </div>
        <div className='boutons'>
          <PointScored />
          <PlayPauseButton />
          <Reset />
        </div>
    </>
  );
}