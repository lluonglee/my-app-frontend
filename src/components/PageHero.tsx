import React from 'react'
import { Link } from 'react-router-dom'

interface PageHeroProps {
  title: string;
  product?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({ title, product }) => {
  return (
    <div className="bg-red-100 min-h-32 px-5 flex items-center mt-5">
      
        <h3 className="text-lg">
          <Link to='/' className="text-blue-500 hover:text-blue-700">Home</Link>
          {product && <Link to='/products' className="text-blue-500 hover:text-blue-700">/ Products</Link>}/ {title}
        </h3>
    </div>
  )
}

export default PageHero
