import { Canvas } from "@react-three/fiber";
import BackgroundLine from "../../components3d/backgroundLine/BackgroundLine";
import SecondaryText from "../../components3d/secondaryText/SecondaryText";
import { OrbitControls } from "@react-three/drei";
import GraphPoint from "../../components3d/graphPoint/GraphPoint";
import { useState } from "react";
import WindPointZoom from "../../components3d/windPointZoom/WindPointZoom";
import WindPoint from "../../interfaces/WindPoint";

const spaceBetweenLines = 1.3;

const positionLines = [
  [0, 2 * spaceBetweenLines, 0],
  [0, spaceBetweenLines, 0],
  [0, 0, 0],
  [0, -spaceBetweenLines, 0],
  [0, -2 * spaceBetweenLines, 0],
];

const yAxisVelocityLabels = [" km/h ", "20", "15", "10", "5", "0"];
const xAxisTimeLabels = ["00", "3", "6", "9", "12", "15", "18", "21"];

interface WindGraphProps {
  windPoints: WindPoint[];
}

const WindGraph = ({ windPoints }: WindGraphProps) => {
  const [openPoints, setOpenPoints] = useState<boolean[]>(
    new Array(windPoints.length).fill(false)
  );

  const windPointsFilled = new Array(8 - windPoints.length)
    .map((_, i) => ({ velocity: 0, hour: i, degrees: 0 }))
    .concat(windPoints);

  return (
    <div className="h-[21rem] sm:h-1/2 bg-white w-full flex flex-col">
      <h2 className="text-thirdText text-xl ml-6 my-5">Wind</h2>
      <Canvas
        orthographic
        camera={{
          zoom: 30,
        }}
      >
        <OrbitControls />
        {positionLines.map((linePosition, index) => (
          <BackgroundLine
            key={linePosition[1]}
            position={[0, spaceBetweenLines * (2 - index), 0]}
          />
        ))}
        <group position={[-5.5, 0, 0]}>
          {yAxisVelocityLabels.map((label, index) => (
            <SecondaryText
              text={label}
              position={[0, spaceBetweenLines * (3 - index), 0]}
              key={label}
            />
          ))}
        </group>
        <group position={[-4.5, -3.2, 0]}>
          {xAxisTimeLabels.map((labe, index) => (
            <SecondaryText
              key={labe}
              text={labe}
              position={[index * spaceBetweenLines, 0, 0]}
            />
          ))}
        </group>
        <group position={[-4.5, -2.6, 0]}>
          {windPointsFilled.map((point, index) => (
            <GraphPoint
              PointZoom={
                <WindPointZoom
                  degrees={point.degrees}
                  isOpen={openPoints[index]}
                  velocity={point.velocity}
                />
              }
              isOpen={openPoints[index]}
              setIsOpen={() => {
                const oldOpenPoints = [...openPoints];
                oldOpenPoints[index] = !oldOpenPoints[index];
                setOpenPoints([...oldOpenPoints]);
              }}
              type={"wind"}
              key={point.hour}
              position={[
                index * spaceBetweenLines,
                (point.velocity * 5.2) / 20,
                0,
              ]}
            />
          ))}
        </group>
      </Canvas>
      <p className="text-thirdText text-[10px] self-center">GMT + 1</p>
    </div>
  );
};

export default WindGraph;
