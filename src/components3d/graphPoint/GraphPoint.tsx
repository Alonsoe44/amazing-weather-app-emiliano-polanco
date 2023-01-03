import { Html } from "@react-three/drei";
import { useState } from "react";
import { FaTemperatureLow } from "react-icons/fa";
interface GraphPointProps {
  hour: number;
  value: number;
  position: [number, number, number];
}
const GraphPoint = ({ hour, value, position }: GraphPointProps) => {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <>
      <mesh
        position={[position[0], 2, 1]}
        onClick={() => setOpenDetails(!openDetails)}
        visible={false}
      >
        <boxGeometry args={[1.28, 6.4, 0.2]} />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[0.13, 32, 32]} />
        <meshBasicMaterial color={openDetails ? "#FFE600" : "#FF824D"} />
        <Html
          position={[-0.9, -0.3, 0]}
          style={{
            opacity: openDetails ? 1 : 0,
          }}
        >
          <div className="bg-weakAccent/70 h-7 p-2 flex items-center rounded-md text-secondaryText">
            <FaTemperatureLow className="inline mr-1 text-xs" />
            <p className="font-medium text-xs">{value.toFixed(1)}</p>
          </div>
        </Html>
      </mesh>
    </>
  );
};

export default GraphPoint;
