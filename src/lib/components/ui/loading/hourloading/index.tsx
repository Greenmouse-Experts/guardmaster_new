import { FC } from "react";
import "./styles.css";

interface Props {
  size: number;
}
const HourGlassLoading: FC<Props> = ({ size }) => {
  return (
    <div className="hourglassBackground" style={{ scale: `${size}`}}>
      <div className="hourglassContainer">
        <div className="hourglassCurves"></div>
        <div className="hourglassCapTop"></div>
        <div className="hourglassGlassTop"></div>
        <div className="hourglassSand"></div>
        <div className="hourglassSandStream"></div>
        <div className="hourglassCapBottom"></div>
        <div className="hourglassGlass"></div>
      </div>
    </div>
  );
};

export default HourGlassLoading;
