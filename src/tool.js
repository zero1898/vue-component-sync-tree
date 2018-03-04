/**
 * 对象深拷贝
 * @param {*Object} obj 需要拷贝的对象
 * @return {*Object}
 */
const deepClone = (obj) => {
    let str = '';
    let newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        str = JSON.stringify(obj); // 系列化对象
        newobj = JSON.parse(str); // 还原
    } else {
        for (var i in obj) {
            newobj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
        }
    }
    return newobj;
};

/**
 * 生成父子树
 * @param {*Array} list 需要拷贝的对象
 * @param {*Number} pid 树根节点
 * @return {*Map}
 */
const arrToTree = (list, pid = 0) => {
    let tree = [];
    list.forEach(item => {
        let tmp = deepClone(item);
        if (Number(item.pid) === Number(pid)) {
            tmp['children'] = arrToTree(list, item.id);
            tree.push(tmp);
        }
    });
    return tree;
};

export default {
    deepClone,
    arrToTree
};
