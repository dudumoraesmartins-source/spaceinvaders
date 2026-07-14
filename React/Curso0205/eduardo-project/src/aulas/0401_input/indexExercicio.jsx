// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva



import React from 'react';


export default function InputExercicio() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  });
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    })
      .then(response => setResponse(response));
  }

  console.log(data);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nome'>Nome</label>
      <input
        id="nome"
        type='nome'
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />
      <label htmlFor='email'>E-Mail</label>
      <input
        id="email"
        type='nome'
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor='senha'>Senha</label>
      <input
        id="senha"
        type='senha'
        name="senha"
        value={form.senha}
        onChange={handleChange}
      />
      <label htmlFor='cep'>CEP</label>
      <input
        id="cep"
        type='cep'
        name="cep"
        value={form.cep}
        onChange={handleChange}
      />
      <label htmlFor='rua'>Rua</label>
      <input
        id="rua"
        type='rua'
        name="rua"
        value={form.rua}
        onChange={handleChange}
      />
      <label htmlFor='numero'>Número</label>
      <input
        id="numero"
        type='numero'
        name="numero"
        value={form.numero}
        onChange={handleChange}
      />
      <label htmlFor='bairro'>Bairro</label>
      <input
        id="bairro"
        type='bairro'
        name="bairro"
        value={form.bairro}
        onChange={handleChange}
      />
      <label htmlFor='cidade'>Cidade</label>
      <input
        id="cidade"
        type='cidade'
        name="cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <label htmlFor='estado'>Estado</label>
      <input
        id="estado"
        type='estado'
        name="estado"
        value={form.estado}
        onChange={handleChange}
      />

      <button>Enviar</button>
      {response && response.ok && <p>Usuário Criado!</p>}
    </form>
  );
};