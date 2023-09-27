

import { useDataHandler } from './hooks/useDataHandler';

function App() {
  const apiUrl = 'https://rickandmortyapi.com/api/character';
  const queryKey = 'characters';

  const { data, isLoading, isError }:any = useDataHandler(apiUrl, queryKey);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Erro ao carregar os personagens.</div>;
  }

  // Agora, data contém a lista de personagens da série
  return (
    <div>
      <h2>Personagens de Rick and Morty</h2>
      <ul>
        {data.results.map((character:any) => (
          <li key={character.id}>
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Espécie: {character.species}</p>
          
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
