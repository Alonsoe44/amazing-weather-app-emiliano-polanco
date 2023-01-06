import { Html } from "@react-three/drei";
import { FaTemperatureLow } from "react-icons/fa";
interface TemperaturePointZoomProps {
  temperature: number;
  isOpen: boolean;
  position: [number, number, number];
}
const TemperaturePointZoom = ({
  temperature,
  isOpen,
  position,
}: TemperaturePointZoomProps) => {
  return (
    <Html
      position={position}
      style={{
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div className="bg-weakAccent/70 h-7 p-2 flex items-center rounded-md text-secondaryText">
        <FaTemperatureLow className="inline mr-1 text-xs" />
        <p className="font-medium text-xs">{temperature.toFixed(1)}</p>
      </div>
    </Html>
  );
};

export default TemperaturePointZoom;
