// src/Models/ContaBancaria.ts
export class ContaBancaria {
  private saldo: number;

  constructor() {
    this.saldo = 0;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  sacar(valor: number): boolean {
    if (valor <= this.saldo && valor > 0) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  verSaldo(): number {
    return this.saldo;
  }
}
