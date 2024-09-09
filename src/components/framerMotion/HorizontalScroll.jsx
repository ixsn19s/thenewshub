
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-zinc-300 min-h-screen">
      
      <div className="flex h-24 items-center justify-center  hover:bg-purple-200">
        <span className="font-semibold uppercase text-6xl text-neutral-500 hover:text-purple-700">
            The ultimate news app you need
        </span>
      </div>
      
  
      <HorizontalScroll />
      
     
      <div className="flex flex-col h-32 items-center justify-center hover:bg-zinc-200">
        <span className="font-semibold uppercase text-4xl text-neutral-500 hover:text-purple-700">
           Hope you are enjoying
        </span>
        <div className="text-center">
          <p className="text-lg tracking-tight text-zinc-700 uppercase font-medium hover:text-purple-700">explore hundreds of trending topics from thousands of reliable sources worldwide</p>
          <p className="text-lg tracking-tight text-zinc-700 uppercase font-medium hover:text-purple-700">From breaking headlines to in-depth articles, stay informed on what matters most to you</p>
        </div>
      </div>
    </div>
  );
};


// Component to handle horizontal scrolling based on vertical scroll
const HorizontalScroll = () => {
  const sectionRef = useRef(null); // Reference to track the section for scroll progress
  const { scrollYProgress } = useScroll({ target: sectionRef }); // Track scroll position within the target section

  // Map scroll progress (0 to 1) to horizontal movement (-95% shift)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={sectionRef} className="relative h-[260vh] bg-zinc-300">
      {/* Sticky container to keep the content in view while scrolling */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-10">
          {/* Render each card with smoother gap and padding */}
          {cardData.map((card) => (
            <ImageCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

//card
const ImageCard = ({ card }) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden bg-zinc-400 rounded-lg shadow-lg">
      

      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${card.url})` }}
      ></div>
      
      
      <div className="absolute mt-5 ml-5 z-10 flex justify-center">
        <p className="bg-zinc-600/50 p-4 text-4xl font-bold text-white  rounded-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

// Array of card data, including image URL, title, and unique ID
const cardData = [
  { id: 1,
    url: "https://images.pexels.com/photos/1464209/pexels-photo-1464209.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Politics" 
  },
  { id: 2,
    url: "https://images.pexels.com/photos/1179581/pexels-photo-1179581.jpeg?auto=compress&cs=tinysrgb&w=600", 
    title: "Entertainment" 
  },
  { id: 3, 
    url: "https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=600", 
    title: "Technology" 
  },
  { id: 4, 
    url: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhbHRofGVufDB8fDB8fHww", 
    title: "Health"
  },
  { id: 5, 
    url: "https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzfGVufDB8fDB8fHww", 
    title: "Sports" 
  },
  { id: 6, 
    url: "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D", 
    title: "Education"
  },
  { id: 7, 
    url: "https://images.unsplash.com/photo-1642862314427-d3cb4d3cb45f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJlbmRpbmd8ZW58MHx8MHx8fDA%3D", 
    title: "Trending"
  },
];
