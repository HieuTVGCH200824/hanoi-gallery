import { useProgress } from "@react-three/drei";

const LoadingScreen = () => {
  const { active, progress } = useProgress();
  if (!active) return null;
  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-10 bg-white flex items-center justify-center">
      <div className="text-9xl">
        <span className="font-beVietnam font-semibold">
          {Math.round(progress)}
        </span>
        <span className="font-playfair">%</span>
        <p className="flex items-center mt-10 justify-center gap-4">
          <span className="font-felix text-2xl">Loading</span>
          <span className="font-spartan font-bold text-3xl">Experience</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
