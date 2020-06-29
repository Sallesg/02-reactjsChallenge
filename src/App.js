import React, {useState, useEffect} from "react";
import api from "./services/api";
import "./GlobalStyles.css";
import {
  Container, AddButton, RemoveButton
} from './styles'
import { Header } from './header'


function App() {
  const [ repositories, setRepositories] = useState([])
  // List your API repositories: 
  useEffect(() => {
    api.get('repositories').then(result=> {
      setRepositories(result.data);
    });
  }, [])
  // ADD repositories
  async function handleAddRepository() {
    const addRepositoryResponse = await api.post('repositories', {
      title: `Challenge GoStack-12`,
      url: 'https://github.com/Sallesg/02-reactjsChallenge.git',
      techs: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Axios']
    });
    setRepositories([...repositories, addRepositoryResponse.data]);
  }
  // Delete repositories
  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`);
    setRepositories(repositories.filter(repositories => repositories.id !== id));
  }

  return (    
    <>
      <Header />
      <Container>
        <AddButton onClick={handleAddRepository}>Adicionar</AddButton>
        <ul data-testid="repository-list">
          {repositories.map( repository => (
            <li key={repository.id}>
              {repository.title}    

              <RemoveButton onClick={() => handleRemoveRepository(repository.id)}>
                Remover
              </RemoveButton>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export default App;
