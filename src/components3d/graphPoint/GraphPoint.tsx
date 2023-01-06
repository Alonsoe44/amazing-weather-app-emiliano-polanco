interface GraphPointProps {
  position: [number, number, number];
  isOpen: boolean;
  setIsOpen: () => void;
  PointZoom: JSX.Element;
  type: string;
}
const pointTypes = {
  wind: {
    color: "#FF0000",
    openColor: "#FFE600",
  },
  temperature: {
    color: "#FF824D",
    openColor: "#FFE600",
  },
};

const GraphPoint = ({
  position,
  PointZoom,
  isOpen,
  setIsOpen,
  type,
}: GraphPointProps) => {
  return (
    <>
      <mesh
        position={[position[0], 2, 1]}
        onClick={() => setIsOpen()}
        visible={false}
      >
        <boxGeometry args={[1.28, 6.4, 0.2]} />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[0.13, 32, 32]} />
        <meshBasicMaterial
          color={isOpen ? pointTypes[type].openColor : pointTypes[type].color}
        />
        {PointZoom}
      </mesh>
    </>
  );
};

export default GraphPoint;
