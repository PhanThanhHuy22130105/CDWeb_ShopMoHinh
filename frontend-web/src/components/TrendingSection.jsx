import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard'; 

const TrendingSection = ({ titleBlack, titleRed, subtitle, bannerImg, trendingTags, tabCategories, products }) => {
  const [activeTab, setActiveTab] = useState(tabCategories[0].id);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 mb-16">
            <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-black text-gray-800 tracking-wider">
          {titleBlack} <span className="text-accent-red">{titleRed}</span>
        </h2>
        <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        <div className="w-full lg:w-1/4 flex flex-col gap-6 lg:sticky lg:top-24">
          <Link to="/khuyen-mai" className="block w-full overflow-hidden rounded-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <img 
              src={bannerImg} 
              alt="Banner" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </Link>

          <div className="bg-white p-4 border border-gray-200 rounded-sm shadow-sm">
            <h3 className="font-black text-gray-800 uppercase tracking-widest text-sm mb-4 border-b border-gray-100 pb-2">
              Xu hướng tìm kiếm
            </h3>
            <div className="flex flex-wrap gap-2">
              {trendingTags.map((tag, index) => (
                <Link 
                  key={index}
                  to={`/search?keyword=${encodeURIComponent(tag)}`}
                  className="px-3 py-1.5 border border-gray-300 rounded-sm text-xs text-gray-600 hover:border-accent-red hover:text-accent-red hover:bg-red-50 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>


        <div className="w-full lg:w-3/4 flex flex-col bg-white rounded-sm border border-gray-200 shadow-sm p-4 h-[750px]">
          <div className="bg-[#cc2027] rounded-sm flex overflow-x-auto hide-scrollbar shrink-0 shadow-sm">
            {tabCategories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-bold uppercase whitespace-nowrap transition-colors border-r border-red-500/30 last:border-r-0
                  ${activeTab === tab.id 
                    ? 'bg-yellow-400 text-red-900' 
                    : 'text-white hover:bg-red-800'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>


          <div className="flex-1 overflow-y-auto mt-4 pr-2
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-red-400/50 
            hover:[&::-webkit-scrollbar-thumb]:bg-red-500
            [&::-webkit-scrollbar-thumb]:rounded-full
            transition-colors"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pb-4">
              {products
                .filter(product => product.category === activeTab)
                .map((product) => (
                  <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>

            <div className="flex justify-center pt-4 mt-2 border-t border-gray-100 shrink-0">
                <Link 
                to={`/category/${activeTab}`} 
                className="bg-brand-dark hover:bg-accent-red text-white px-6 py-2.5 text-sm font-bold rounded-sm transition-colors flex items-center gap-2 shadow-sm"
                >
                Xem thêm các mẫu khác <ArrowRight size={16} />
                </Link>
            </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default TrendingSection;