// on import useSelector depuis react-redux
import { useSelector } from "react-redux";

export function Display() {
  // on utilise useSelector avec en paramètre une fonction
  // qui permet de récupérer uniquement la propriété `playing`
  // du state
  const gameIsPlaying = useSelector((state) => state.playing);
  const scorePlayer1 = useSelector(state=> state.player1);
  const scorePlayer2 = useSelector(state=> state.player2);
  const advantage = useSelector(state=>state.advantage);
  const winner = useSelector(state=>state.winner);
  // on peut ensuite utiliser cette valeur dans le rendu
  return (
      <>
      { winner ?
        (<p> Le gagnant est {winner} </p>)
         :(
          <>
            <p>{gameIsPlaying ? `Jeu en cours P1: ${scorePlayer1} P2: ${scorePlayer2}` : "C'est la pause"}</p>
            <p>{advantage && `Avantage ${advantage}`}</p>
         </>
          ) 
      }
      </>
  ) 
}