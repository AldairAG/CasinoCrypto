import { motion } from "framer-motion";
interface WaveTextProps {
  text: string,
  classname: string
}

const WaveText: React.FC<WaveTextProps> = ({ text, classname = '' }) => {
  return (
    <span className={classname}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="mr-2">
          {word.split("").map((char, j) => (
            <motion.span
              key={`${i}-${j}`}
              className="inline-block"
              initial={{ y: 0 }}
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: (i * 5 + j) * 0.1, // Ajusta el delay para que las palabras también tengan animación escalonada
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default WaveText;