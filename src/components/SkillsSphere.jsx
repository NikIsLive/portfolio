import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Plane } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense, useRef, useState, useEffect } from "react";
import { TextureLoader } from "three"; // Import the TextureLoader to load images

const skills = [
  { name: "React", color: "#61DBFB", logo: "/logos/react-.png" },
  { name: "Tailwind", color: "#38BDF8", logo: "/logos/tailwind-.png" },
  { name: "Framer Motion", color: "#e100ff", logo: "/logos/framer-.png" },
  { name: "JavaScript", color: "#f7df1e", logo: "/logos/js-.png" },
  { name: "HTML", color: "#e44d26", logo: "/logos/html-.png" },
  { name: "CSS", color: "#264de4", logo: "/logos/css-.png" },
];

const SkillSphere = ({
  position,
  color,
  name,
  logo,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]); // Rotation state for each sphere
  const isDragging = activeIndex === index;
  const prevMouse = useRef({ x: 0, y: 0 });

  const [texture, setTexture] = useState(null);

  // Load the logo texture
  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(logo, (tex) => setTexture(tex));
  }, [logo]);

  // Handle pointer down
  const onPointerDown = (e) => {
    e.stopPropagation();
    setActiveIndex(index);
    prevMouse.current = { x: e.clientX, y: e.clientY };
    console.log(`Started dragging sphere ${index}`);
  };

  // Global drag handling
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDragging || !meshRef.current) return;

      const dx = e.clientX - prevMouse.current.x;
      const dy = e.clientY - prevMouse.current.y;

      setRotation((prevRotation) => [
        prevRotation[0] + dy * 0.01, // Rotate along the X axis
        prevRotation[1] + dx * 0.01, // Rotate along the Y axis
        prevRotation[2],
      ]);

      prevMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      if (isDragging) {
        setActiveIndex(null);
        console.log(`Stopped dragging sphere ${index}`);
      }
    };

    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, index, setActiveIndex]);

  useFrame(() => {
    if (!isDragging && meshRef.current) {
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <mesh
        ref={meshRef}
        onPointerDown={onPointerDown}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <icosahedronGeometry args={[1, 0]} />
        {/* Apply the texture */}
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={2.0}
          map={texture} // Applying logo as a texture
        />
      </mesh>
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
};

const SkillsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const radius = 5;
  const skillSpacing = 4;
  const totalWidth = (skills.length - 1) * skillSpacing;
  const skillPositions = skills.map((_, index) => {
    return [index * skillSpacing - totalWidth / 2, 0, 0];
  });

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0b0f1a] text-white px-6 md:px-16 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-cyan-400 mb-16"
      >
        My Skills
      </motion.h2>

      <div className="w-full h-[500px] rounded-xl overflow-hidden">
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            {skills.map((skill, index) => (
              <SkillSphere
                key={index}
                index={index}
                color={skill.color}
                name={skill.name}
                logo={skill.logo} // Pass the logo URL here
                position={skillPositions[index]}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </Suspense>
          <OrbitControls
            enableRotate={activeIndex === null}
            enableZoom={false}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default SkillsSection;
