// src/App.tsx
import './App.css';
import { ContaBancaria } from './Models/ContaBancaria';
import { useState } from 'react';

function App() {
  const [conta] = useState(new ContaBancaria());
  const [saldo, setSaldo] = useState(conta.verSaldo());
  const [valor, setValor] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState<'erro' | 'sucesso' | ''>('');

  const handleDeposito = () => {
    const numero = Number(valor);
    if (!isNaN(numero) && numero > 0) {
      conta.depositar(numero);
      setSaldo(conta.verSaldo());
      setMensagem('Depósito realizado com sucesso!');
      setTipoMensagem('sucesso');
      setValor('');
    } else {
      setMensagem('Digite um valor válido para depósito.');
      setTipoMensagem('erro');
    }
  };

  const handleSaque = () => {
    const numero = Number(valor);
    if (!isNaN(numero) && numero > 0) {
      const sucesso = conta.sacar(numero);
      if (sucesso) {
        setSaldo(conta.verSaldo());
        setMensagem('Saque realizado com sucesso!');
        setTipoMensagem('sucesso');
      } else {
        setMensagem('Erro: saldo insuficiente para o saque.');
        setTipoMensagem('erro');
      }
      setValor('');
    } else {
      setMensagem('Digite um valor válido para saque.');
      setTipoMensagem('erro');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
      <h2>Banco Simples</h2>
      <p><strong>Saldo:</strong> R$ {saldo}</p>

      <input
        type="number"
        placeholder="Digite um valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
      />
      <br />
      <button onClick={handleDeposito} style={{ marginRight: '0.5rem' }}>
        Depositar
      </button>
      <button onClick={handleSaque}>Sacar</button>

      {mensagem && (
        <p style={{ color: tipoMensagem === 'erro' ? 'red' : 'green', marginTop: '1rem' }}>
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default App;
