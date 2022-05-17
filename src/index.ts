/*
 * @Author: liyb
 * @Email: git config user.email
 * @Date: 2022-05-13 12:46:02
 * @LastEditTime: 2022-05-16 15:30:46
 * @LastEditors: your name
 * @Description: 计算衣服价格
 */

import {Calculator} from './modals/Calculator'

/**
 * @description: calcalator total price
 * @param {number} price
 * @param {number} count
 * @return {number} total price
 */
function totalPrice(price: number, count: number): number {
    const calc = new Calculator(price)
    calc.add(10)
    calc.reduce(2)
    calc.divide(2)
    return calc.multiply(count)
}

//计算总计
totalPrice(10, 2)


/**
 * @description: 衣服类型
 * @type '上衣' | '裤子' | '裙子'
 */
type CloseType = '上衣' | '裤子' | '裙子'

/**
 * @description: 衣服信息
 * @property {string} type  衣服类型
 * @property {string} price 衣服价格
 * @property {string} count 衣服数量
 */
type ClothInfo = {
    type: CloseType;
    price: number;
    count: number;
}

//上衣总计
const close1: ClothInfo = {
    type: '上衣',
    price: 100,
    count: 15,
}

//裤子总计
const close2: ClothInfo = {
    type: '裤子',
    price: 200,
    count: 20,
}

//裙子总计
const close3: ClothInfo = {
    type: '裙子',
    price: 200,
    count: 20,
}

const price = totalPrice(close1.price, close1.count) + totalPrice(close2.price, close2.count) + totalPrice(close3.price, close3.count)

console.log(price)

export {totalPrice,CloseType,ClothInfo,Calculator}