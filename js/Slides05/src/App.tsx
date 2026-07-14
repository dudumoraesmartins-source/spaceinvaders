import React from 'React';

export default function App() {
    const ativo = true;
        
    return (
        <button disabled={!ativo}>
            {ativo ? 'Ativo' : 'Inativo'}
        </button>
    );
}