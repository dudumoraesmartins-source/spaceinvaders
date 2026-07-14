// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global


import React from 'react';
import UserContext from './Contexto_GLOBAL';
import ProdutoExercicio from './produto_exercicio';

export default function ExercicioUseContext() {
  const [dados, setDados] = React.useState(null);

  console.log(UserContext);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then(response => response.json())
      .then(json => setDados(json));
    console.log('Estou chamando a API');
  }, []);

  function limparDados() {
    setDados(null);
  }

  return (
    <UserContext.Provider value={{ dados, limparDados }}>
      <ProdutoExercicio />
    </UserContext.Provider>
  )
}