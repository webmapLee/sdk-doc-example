/**
 * @name: Calculator
 * @description: 计算器
 * @implements {ICalculator}
 * ``` examples
 * const instance = new MyClass();
 * ```
 */
class Calculator implements ICalculator {
    defaultValue = 1
    constructor(value:number){
        this.defaultValue = value
    }
    add(a:number){
        return this.defaultValue + a
    }
    reduce(a:number) {
        return this.defaultValue - a
    }
    multiply(a:number) {
        return this.defaultValue * a
    }
    divide(a:number) {
        return this.defaultValue / a
    }

}
export { Calculator }