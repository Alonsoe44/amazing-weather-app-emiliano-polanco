interface BackgroundLineProps {
  position: [number, number, number];
}
const BackgroundLine = ({ position }: BackgroundLineProps) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[10, 0.06, 0.1]} />
      <meshBasicMaterial color="#D9D9D9" />
    </mesh>
  );
};

export default BackgroundLine;
