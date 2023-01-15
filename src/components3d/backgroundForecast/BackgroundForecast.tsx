const BackgroundForecast = ({ modelSmart, textureNature }) => {
  return (
    <group>
      <primitive object={modelSmart.scene} />
      <meshStandardMaterial map={textureNature} />
    </group>
  );
};

export default BackgroundForecast;
