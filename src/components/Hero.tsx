
import { Link } from 'react-router-dom';
import heroBcg from '../assets/hero-bcg.jpeg';
import heroBcg2 from '../assets/hero-bcg-2.jpeg';

const Hero = () => {
  return (
    <section className="min-h-screen py-9">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
              Design your <br />
              comfort zone
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
              sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
              aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
              alias?
            </p>
            <Link
              to="/products"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full inline-block"
            >
              Shop now
            </Link>
          </div>
          <div className="relative -z-10">
            <img src={heroBcg} alt="nice table" className="w-full h-auto rounded-lg" />
            <img
              src={heroBcg2}
              alt="person working"
              className="absolute bottom-0 left-0 transform -translate-x-1/2 w-64 h-auto rounded-lg z-30"
            />
            <div className="absolute bottom-0 -left-6 bg-blue-500 rounded-lg" style={{ width: '5%', height: '80%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
