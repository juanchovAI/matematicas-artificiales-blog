import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ArticlesByAuthor = ({ posts }) => {
  const { authorName } = useParams();
  const authorPosts = posts.filter(post => post.fields.author === authorName);

  return (
    <div>
      <h1>Artículos de {authorName}</h1>
      {authorPosts.length > 0 ? (
        authorPosts.map(post => (
          <div key={post.sys.id}>
            <h2>{post.fields.title}</h2>
            <Link to={`/article/${post.sys.id}`}>Leer más</Link>
          </div>
        ))
      ) : (
        <p>No hay artículos de este autor.</p>
      )}
    </div>
  );
};

export default ArticlesByAuthor;
