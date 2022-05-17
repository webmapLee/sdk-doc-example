/**
 * @name: ICalculator
 * @description: 计算器接口
 * @property {number} defaultValue 默认值
 * @property {function} sum 计算器的加法
 * @property {function} reduce 计算器的减法
 * @property {function} multiply 计算器的乘法
 * @property {function} divide 计算器的除法
 */
interface ICalculator {
    defaultValue:number;
    add: (a: number) => number;
    reduce: (a: number) => number;
    multiply: (a: number) => number;
    divide: (a: number) => number;
}