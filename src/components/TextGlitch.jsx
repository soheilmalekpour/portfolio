import { useGlitch } from "react-powerglitch";

const GlitchText = ({ children }) => {
    const glitch = useGlitch();

    return <span ref={glitch.ref}>{children}</span>;
}

export default GlitchText;