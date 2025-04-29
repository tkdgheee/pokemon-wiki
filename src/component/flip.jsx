import { useDispatch, useSelector } from "react-redux";
import { toggleFlip } from "../RTK/silce";


export default function FlipCard({ id, frontImage, backImage }) {
  const dispatch = useDispatch();
  const isFlipped = useSelector((state) => state.flip[id] || false);

  const handleClick = () => {
    dispatch(toggleFlip(id));
  };

  return (
    <div
    className="w-60 h-60 mx-auto perspective-1000 cursor-pointer"
    onClick={handleClick}
  >
    {/* 회전하는 카드 */}
    <div
      className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
        isFlipped ? "rotate-y-180" : "rotate-0"
      }`}
    >
      {/* 앞면 */}
      <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-xl">
        <img src={frontImage} alt="front" className="w-40 h-40" />
      </div>

      {/* 뒷면 */}
      <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-xl transform rotate-y-180">
        <img src={backImage} alt="back" className="w-40 h-40" />
      </div>
    </div>
  </div>
);
}