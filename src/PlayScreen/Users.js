import { useContext, useState } from "react";
import Pic from "../Assets/Paper.png";
import GameDataContext from "../Store/gameContext";

export default function User({ selections, index }) {
    let {usersSelection,setUsersSelection, expectedSelection, setExpectedSelection} = useContext(GameDataContext);  
    const [imagePath, setImagePath] = useState(Pic);
    const [timerGoes, setTimerGoes] = useState(false);
  const handleSelectionChange = (e) => {
    if(expectedSelection != index){
        alert("please select the "+expectedSelection)
        return false
    }
    import(`../Assets/${e}.png`).then((image) => {
      setImagePath(image.default);
    });
    let copyusersSelection = JSON.parse(JSON.stringify(usersSelection));
    
    copyusersSelection[index] = [...copyusersSelection[index] ,{item : e, win : false}];
    setUsersSelection(copyusersSelection);
    console.log(copyusersSelection)

    setExpectedSelection(Number(!expectedSelection))
  };

  const RenderImage = (image) => {
    return (
      <div className="play_area">
        <img className="play_area_img" src={image} />
      </div>
    );
  };

  return (
    <div className="user_left user">
      {RenderImage(imagePath)}
      <div className="user_selections">
        {selections.map((e) => {
          return (
            <div
              onClick={() => {
                handleSelectionChange(e);
              }}
              className="each_selection"
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
}
