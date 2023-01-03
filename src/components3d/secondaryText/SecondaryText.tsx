import { Text } from "@react-three/drei";
interface SecondaryTextProps {
  position: [number, number, number];
  text: string;
}

const fontSize = 0.4;
const fontColor = "#D9D9D9";

const SecondaryText = ({ position, text }: SecondaryTextProps) => {
  return (
    <Text color={fontColor} scale={fontSize} position={position}>
      {text}
    </Text>
  );
};

export default SecondaryText;
