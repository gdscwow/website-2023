import { FunctionComponent as FC } from "react";
import { useSpring, animated } from "@react-spring/web";

interface IProps {
  countTo: number;
}

const AnimatedNumberCounter: FC<IProps> = ({ countTo }) => {
  const { count } = useSpring<any>({
    from: { count: 0 },
    to: { count: countTo },
    config: {
      duration: 2000,
      mass: 1,
      tension: 280,
      friction: 120,
      clamp: true,
      precision: 1,
      round: true,
    },
  });

  return <animated.span>{count}</animated.span>;
};

export default AnimatedNumberCounter;
