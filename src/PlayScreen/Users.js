import { useContext, useEffect, useState } from "react";
import Pic from "../Assets/Paper.png";
import GameDataContext from "../Store/gameContext";
import info from "../Modal";

export default function User({ selections, index }) {
  let {usersSelection,setUsersSelection, expectedSelection, setExpectedSelection, setRound, round, score} = useContext(GameDataContext);  
  const [imagePath, setImagePath] = useState(Pic);
  const [selectedOption , setSelectedOption] = useState("");
  const handleSelectionChange = (e) => {
    if(expectedSelection != index){
        info(`Uh ho !! It is ${expectedSelection == 0 ? "User One" : "User Two"}'s turn`)
        return false
    }
    setSelectedOption(e)
    if(index == 1){
      setRound(round+1)
    }
    import(`../Assets/${e}.png`).then((image) => {
      setImagePath(image.default);
    });
    let copyusersSelection = JSON.parse(JSON.stringify(usersSelection));
    
    copyusersSelection[index] = [...copyusersSelection[index] ,{item : e, win : false}];
    setUsersSelection(copyusersSelection);

    setExpectedSelection(Number(!expectedSelection))
  };
useEffect(()=>{
  setTimeout(() => {
  setSelectedOption("")
  }, 1000);
},[round])
  const RenderImage = (image) => {
    return (
      <div className="play_area">
        <img className="play_area_img" src={image} />
      </div>
    );
  };

  return (
    <div>
      <div className="user_username">
        User {index} : {score[index]}
      </div>
      <div className="user_left user">
      {RenderImage(imagePath)}
      <div className="user_selections">
        {selections.map((e) => {
          return (
            <div
              onClick={() => {
                handleSelectionChange(e);
              }}
              className= {selectedOption == e ?  "each_selection selected" : "each_selection"}
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}
