import { motion } from "framer-motion";
import "./Landing.css";
const Landing = () => {
  
  return (
    <section className="landing-container">
      <div className="landing">
        <div className="left">
          <h1>
            Unlock Your <span>InnoWare</span> Online Training
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos
            tempore dicta voluptatem sequi optio dolores praesentium sint rerum
            itaque.
          </p>
          <div className="btn">
            <motion.button 
            whileHover={{scaleX: 1.1}}
            className="btn1">Explore Our Projects</motion.button>
            <motion.button
            whileHover={{scaleX: 1.1}}
            className="btn2">Explore About US</motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
