import React from 'react';
import useLocalStorage from './UseHookCustom';
import useFetch from './useFetch';

export default function IndexHook() {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/notebook');
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data) return <div>{data.nome}</div>;
  else return null;

  return (
    <div>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>

      {data.map(
        (produto) => {
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        })
      }
    </div>
  )
}