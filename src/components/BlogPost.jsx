import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost({ post }) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow" itemScope itemType="https://schema.org/BlogPosting">
      <meta itemProp="datePublished" content={post.date} />
      <meta itemProp="author" content="Ankaterm" />
      
      <Link to={`/blog/${post.slug}`}>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover" 
          itemProp="image"
          loading="lazy"
        />
      </Link>
      
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{new Date(post.date).toLocaleDateString('tr-TR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} dk okuma</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2" itemProp="headline">
          <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4" itemProp="description">
          {post.excerpt}
        </p>
        
        <div className="flex items-center">
          <Link 
            to={`/blog/${post.slug}`} 
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors inline-flex items-center"
          >
            Devamını Oku
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogPost; 