import React from "react";
import { useSpring, animated } from "react-spring";

const Bird = ({speed, delay}) => {
    const birdAnimation = useSpring({
        to: {transform: "translateX(-100vw)"},
        from: {transform: "translateX(100vw)"},
        reset: true,
        reverse: true,
        config: {duration: speed},
        loop: true,
        delay: delay,
    });
    return (
        <animated.img 
            style={birdAnimation}
            src={"/images/bird.png"}
            alt="flying bird"
            className="bird"
        />
    )

}

export default Bird

