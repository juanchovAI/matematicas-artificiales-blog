import React from 'react';
import { useParams, Link } from 'react-router-dom';

const FilteredArticles = ({ posts }) => {
  const { filterType, filterValue } = useParams();

  const filteredPosts = posts.filter(post =>
    post.fields[filterType]?.toLowerCase() === filterValue.toLowerCase()
  );

  return (
    <div>
      <h1>Artículos filtrados por {filterType}: {filterValue}</h1>
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <div key={post.sys.id}>
            <h2>{post.fields.title}</h2>
            <Link to={`/article/${post.sys.id}`}>Leer más</Link>
          </div>
        ))
      ) : (
        <p>No hay artículos bajo este filtro.</p>
      )}
    </div>
  );
};

export default FilteredArticles;
