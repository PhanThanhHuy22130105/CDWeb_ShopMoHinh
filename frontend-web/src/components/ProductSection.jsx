import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({ titleWhite, titleRed, products, viewAllLink }) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 py-8">
      
      <div className="flex items-center justify-between border-b-2 border-brand-gray mb-6 pb-2">
        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-widest font-mono flex items-center gap-2">
          <span className="w-2 h-6 bg-accent-red block"></span>
          {titleWhite} <span className="text-accent-red">{titleRed}</span>
        </h2>
        <a href={viewAllLink || "#"} className="text-sm text-brand-slate hover:text-accent-red transition-colors font-mono font-bold">
          Xem tất cả &gt;&gt;
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map(prod => (
          <ProductCard 
            key={prod.id} 
            id={prod.id}
            name={prod.name}
            price={prod.price}
            oldPrice={prod.oldPrice}
            isNew={prod.isNew}
            image={prod.image}
          />
        ))}
      </div>
      
    </section>
  );
};

export default ProductSection;