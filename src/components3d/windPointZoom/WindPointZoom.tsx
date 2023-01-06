import { Html } from "@react-three/drei";

interface WindPointZoomProps {
  isOpen: boolean;
  velocity: number;
  degrees: number;
}
const WindPointZoom = ({ isOpen, velocity, degrees }: WindPointZoomProps) => {
  return (
    <Html
      position={[0, 0, 0]}
      style={{
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div className="bg-weakAccent/70 h-7 p-2 flex items-center rounded-md text-secondaryText">
        <p className="font-medium text-xs">{velocity.toFixed(1)}</p>
      </div>
    </Html>
  );
};

export default WindPointZoom;
