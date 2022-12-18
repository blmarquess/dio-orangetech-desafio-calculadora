export class Calculator {
  public operatorStrategy: { [index: string]: Function } = {
    "*": (n1: number, n2: number) => this.multiply(n1, n2),
    "/": (n1: number, n2: number) => this.divide(n1, n2),
    "-": (n1: number, n2: number) => this.subtract(n1, n2),
    "+": (n1: number, n2: number) => this.sum(n1, n2),
  };

  public sum(num1: number = 0, num2: number = 0): number {
    return num1 + num2;
  }
  public subtract(num1: number = 0, num2: number = 0): number {
    return num1 - num2;
  }
  public multiply(num1: number = 0, num2: number = 0): number {
    return num1 * num2;
  }
  public divide(num1: number = 0, num2: number = 0): number {
    return num1 / num2;
  }

  static Execute(num1: number, operator: string, num2: number) {
    return new Calculator().operatorStrategy[operator](num1, num2);
  }
}
