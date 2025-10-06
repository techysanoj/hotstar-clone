import HomeScreen from "@/components/HomeScreen";
import MoviesSection from "@/components/MoviesSection";

// Example dataset
export const movieItems: [string, string][] = [
    // Thriller movies
    ['Thriller', 'Inception'],
    ['Thriller', 'Se7en'],
    ['Thriller', 'Gone Girl'],
  
    // Comedy movies
    ['Comedy', 'The Hangover'],
    ['Comedy', 'Superbad'],
    ['Comedy', 'Step Brothers'],
  
    // Action movies
    ['Action', 'Mad Max: Fury Road'],
    ['Action', 'John Wick'],
    ['Action', 'Gladiator'],
  
    // Drama movies
    ['Drama', 'The Shawshank Redemption'],
    ['Drama', 'Forrest Gump'],
    ['Drama', 'The Godfather'],
  
    // Sci-Fi movies
    ['Sci-Fi', 'Interstellar'],
    ['Sci-Fi', 'The Matrix'],
    ['Sci-Fi', 'Arrival'],
  ];
  

export default function Home() {
    const texts = [
        'Welcome to our website!',
        'Check out our latest features.',
        'Sign up for free today.',
        'Join our community.',
        'Contact us for more info.'
      ];
      
    return (
        <div className="main">
            <HomeScreen items={texts} interval={4000} />
            <MoviesSection items={movieItems}></MoviesSection>
        </div>
    )
}