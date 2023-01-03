import { Canvas } from "@react-three/fiber";
import BackgroundLine from "../../components3d/backgroundLine/BackgroundLine";
import SecondaryText from "../../components3d/secondaryText/SecondaryText";
import { OrbitControls } from "@react-three/drei";
import GraphPoint from "../../components3d/graphPoint/GraphPoint";

const spaceBetweenLines = 1.3;

const positionLines = [
  [0, 2 * spaceBetweenLines, 0],
  [0, spaceBetweenLines, 0],
  [0, 0, 0],
  [0, -spaceBetweenLines, 0],
  [0, -2 * spaceBetweenLines, 0],
];

const yAxisTemperatureLabels = [" C°", "40", "30", "20", "10", "0"];
const xAxisTimeLabels = ["00", "3", "6", "9", "12", "15", "18", "21"];

interface TemperaturePoint {
  temperature: number;
  hour: number;
}

interface TemperatureGraphProps {
  temperaturePoints: TemperaturePoint[];
}

const TemperatureGraph = ({ temperaturePoints }: TemperatureGraphProps) => {
  console.log(temperaturePoints);
  return (
    <div className="h-[21rem] sm:h-1/2 bg-white w-full flex flex-col">
      <h3 className="text-thirdText text-xl ml-6 my-5">Temperature</h3>
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
          {yAxisTemperatureLabels.map((label, index) => (
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
          {temperaturePoints.map((point, index) => (
            <GraphPoint
              key={point.hour}
              hour={point.hour}
              value={point.temperature}
              position={[
                index * spaceBetweenLines,
                (point.temperature * 5.2) / 40,
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

export default TemperatureGraph;
