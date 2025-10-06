'use client';

import { useParams } from 'next/navigation';

type MovieData = {
  [key: string]: [string, string][];
};

const movies: MovieData = {
  thriller: [
    ['Thriller Movie 1', 'Description 1'],
    ['Thriller Movie 2', 'Description 2'],
  ],
  comedy: [
    ['Comedy Movie 1', 'Description 1'],
    ['Comedy Movie 2', 'Description 2'],
  ],
};

export default function MovieTypePage() {
  const params = useParams();
  const typeParam = params.types;
  const type = Array.isArray(typeParam) ? typeParam[0] : typeParam || '';
  const lowerType = type.toLowerCase();

  const items = movies[lowerType] || [];

  if (!items.length) return <p>No movies found for "{type}"</p>;

  return (
    <div>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Movies</h1>
      {items.map(([title, description], index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
