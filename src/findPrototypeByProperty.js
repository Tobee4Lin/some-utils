/**
 * 判断某个属性名所归属的对象
 * @param {params} obj 对象名
 * @param {params} prototyName 对象属性
 */
export function findPrototypeByProperty(obj, prototyName) {
  do {
    if (obj.hasOwnProperty(prototyName)) {
      return obj;
    }
  } while (obj = Object.getPrototypeOf(obj));
}