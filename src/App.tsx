import './App.css';
import { ContaBancaria } from './Models/ContaBancaria';
import { useState } from 'react';

function App() {
  const [conta] = useState(new ContaBancaria());
  const [saldo, setSaldo] = useState(conta.verSaldo());
  const [valor, setValor] = useState(0);

  const handleDeposito = () => {
    conta.depositar(valor);
    setSaldo(conta.verSaldo());
  };

  const handleSaque = () => {
    conta.sacar(valor);
    setSaldo(conta.verSaldo());
  };

  return (
    <div>
      <h2>Banco Simples</h2>
      <p>Saldo: R$ {saldo}</p>

      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(Number(e.target.value))}
      />
      <br />
      <button onClick={handleDeposito}>Depositar</button>
      <button onClick={handleSaque}>Sacar</button>
    </div>
  );
}

export default App;