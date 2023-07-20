import { useState } from "react";
import Pic from "../Assets/Paper.png";

export default function User({ selections, index }) {
  const [imagePath, setImagePath] = useState(Pic);

  const handleSelectionChange = (e) => {
    import(`../Assets/${e}.png`).then((image) => {
      setImagePath(image.default);
    });
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
