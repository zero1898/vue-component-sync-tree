import ELTree from 'element-ui/lib/tree';
import ELIcon from 'element-ui/lib/icon';
import ELInput from 'element-ui/lib/input';
import ELButton from 'element-ui/lib/button';
import ELButtonGroup from 'element-ui/lib/button-group';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * 对象深拷贝
 * @param {*Object} obj 需要拷贝的对象
 * @return {*Object}
 */
var deepClone = function deepClone(obj) {
    var str = '';
    var newobj = obj.constructor === Array ? [] : {};
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
        return;
    } else if (window.JSON) {
        str = JSON.stringify(obj); // 系列化对象
        newobj = JSON.parse(str); // 还原
    } else {
        for (var i in obj) {
            newobj[i] = _typeof(obj[i]) === 'object' ? deepClone(obj[i]) : obj[i];
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
var arrToTree = function arrToTree(list) {
    var pid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var tree = [];
    list.forEach(function (item) {
        var tmp = deepClone(item);
        if (Number(item.pid) === Number(pid)) {
            tmp['children'] = arrToTree(list, item.id);
            tree.push(tmp);
        }
    });
    return tree;
};

var Tool = {
    deepClone: deepClone,
    arrToTree: arrToTree
};

var _components;

require('../lib/vue-component-sync-tree.css');

var vueComponentSyncTree = {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "v-component-sync-tree" }, [_c('div', { staticClass: "origin-tree tree-item" }, [_c('div', { staticClass: "tree-header" }, [_vm._v("源列表")]), _vm._v(" "), _c('div', { staticClass: "tree-body" }, [_c('el-tree', { ref: "originTree", attrs: { "data": _vm.originTree, "show-checkbox": "", "accordion": "", "node-key": "id", "props": _vm.defaultProps }, on: { "check-change": _vm.getOriginKeys } })], 1)]), _vm._v(" "), _c('div', { staticClass: "tree-cut" }, [_c('i', { staticClass: "ivu-icon ivu-icon-ios-arrow-right" }), _vm._v(" "), _c('el-icon', { staticClass: "el-icon-arrow-right" })], 1), _vm._v(" "), _c('div', { staticClass: "final-tree tree-item" }, [_c('div', { staticClass: "tree-header" }, [_vm._v("目的列表")]), _vm._v(" "), _c('div', { staticClass: "tree-body" }, [_c('div', { staticClass: "body-main" }, [_c('ul', _vm._l(_vm.finalTree, function (item) {
            return _c('li', { key: item.id }, [_c('span', { staticClass: "item-text" }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('span', { staticClass: "item-edit", on: { "click": function click($event) {
                        $event.stopPropagation();_vm.popEditModal(item.id, item.title);
                    } } }, [_c('el-icon', { staticClass: "el-icon-edit" })], 1), _vm._v(" "), _c('span', { staticClass: "item-del", on: { "click": function click($event) {
                        $event.stopPropagation();_vm.popDelModal(item.id, item.pid);
                    } } }, [_c('el-icon', { staticClass: "el-icon-delete" })], 1), _vm._v(" "), _c('ul', { staticStyle: { "margin-left": "20px" } }, _vm._l(item.children, function (child) {
                return _c('li', { key: child.id }, [_c('span', { staticClass: "item-text" }, [_vm._v(_vm._s(child.title))]), _vm._v(" "), _c('span', { staticClass: "item-edit", on: { "click": function click($event) {
                            $event.stopPropagation();_vm.popEditModal(child.id, child.title);
                        } } }, [_c('el-icon', { staticClass: "el-icon-edit" })], 1), _vm._v(" "), _c('span', { staticClass: "item-del", on: { "click": function click($event) {
                            $event.stopPropagation();_vm.popDelModal(child.id, child.pid);
                        } } }, [_c('el-icon', { staticClass: "el-icon-delete" })], 1)]);
            }))]);
        }))]), _vm._v(" "), _vm.editShow ? _c('div', { staticClass: "edit-mask" }, [_c('div', { staticClass: "edit-wrapper" }, [_c('el-input', { staticClass: "edit-input", model: { value: _vm.editText, callback: function callback($$v) {
                    _vm.editText = $$v;
                }, expression: "editText" } }), _vm._v(" "), _c('div', { staticClass: "edit-opra-wrapper" }, [_c('el-button-group', [_c('el-button', { staticClass: "edit-cancel", attrs: { "type": "default" }, on: { "click": _vm.editCancel } }, [_vm._v("\n                                取消\n                            ")]), _vm._v(" "), _c('el-button', { staticClass: "edit-ok", attrs: { "type": "primary" }, on: { "click": _vm.editOk } }, [_vm._v("\n                                确认\n                            ")])], 1)], 1)], 1)]) : _vm._e(), _vm._v(" "), _vm.delShow ? _c('div', { staticClass: "del-mask" }, [_c('div', { staticClass: "del-wrapper" }, [_c('div', { staticClass: "del-text" }, [_c('el-icon', { staticClass: "el-icon-warning" }), _vm._v("\n                        是否删除\n                    ")], 1), _vm._v(" "), _c('div', { staticClass: "del-opra-wrapper" }, [_c('el-button-group', [_c('el-button', { staticClass: "del-cancel", on: { "click": _vm.delCancel } }, [_vm._v("\n                                取消\n                            ")]), _vm._v(" "), _c('el-button', { staticClass: "del-ok", attrs: { "type": "primary" }, on: { "click": _vm.delOk } }, [_vm._v("\n                                确认\n                            ")])], 1)], 1)])]) : _vm._e()])])]);
    },
    staticRenderFns: [],
    name: 'vueComponentSyncTree',
    model: {
        prop: 'finalList',
        event: 'change'
    },
    props: {
        // 目的列表数据
        finalList: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        // 源列表数据
        data: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            delShow: false, // 删除确认弹出层控制器
            delId: '', // 删除弹出层 => id
            delPid: '', // 删除弹出层 => pid
            editShow: false, // 修改弹出层控制器
            editText: '', // 修改弹出层 => text
            editId: '', // 修改弹出层 => id
            originTree: [], // 源列表Tree
            originKeys: [], // 源列表keys
            defaultProps: {
                children: 'children',
                label: 'title'
            }
        };
    },

    components: (_components = {}, defineProperty(_components, ELTree.name, ELTree), defineProperty(_components, ELIcon.name, ELIcon), defineProperty(_components, ELInput.name, ELInput), defineProperty(_components, ELButton.name, ELButton), defineProperty(_components, ELButtonGroup.name, ELButtonGroup), _components),
    computed: {
        // 源列表数据
        originList: function originList() {
            return this.data;
        },

        // 目的列表Tree
        finalTree: function finalTree() {
            return Tool.arrToTree(this.finalList);
        },

        // 目的列表keys
        finalKeys: function finalKeys() {
            return this.finalList.map(function (item) {
                return item.id;
            });
        },

        // 根据源列表选择的keys生成的目的列表的keys
        originToFinalKeys: function originToFinalKeys() {
            var _this = this;

            var parentKeys = [];
            this.originList.forEach(function (item) {
                if (_this.originKeys.includes(item.id) && Number(item.pid) !== 0) {
                    parentKeys.push(item.pid);
                }
            });
            return this.unique([].concat(parentKeys, toConsumableArray(this.originKeys)));
        }
    },
    created: function created() {
        // 初始化源列表Tree
        this.initOriginTree();
    },
    mounted: function mounted() {
        // 初始化源列表点选
        this.initOriginChecked();
    },

    methods: {
        // 弹出删除弹出层
        popDelModal: function popDelModal(id, pid) {
            this.delId = id;
            this.delPid = pid;
            this.delShow = true;
        },

        // 删除弹出层确认
        delOk: function delOk() {
            var _this2 = this;

            var keys = [];
            keys.push(this.delId);
            if (Number(this.delPid) === 0) {
                // 如果删除的key是一级分类
                this.finalTree.forEach(function (item) {
                    if (item.id === _this2.delId) {
                        item.children.forEach(function (child) {
                            keys.push(child.id);
                        });
                    }
                });
            } else {
                // 如果删除的key是二级分类
                keys.push(this.delPid);
            }
            // 删除
            keys.forEach(function (key) {
                _this2.originKeys = _this2.removeByValue(_this2.originKeys, key);
            });
            // 同步到左侧
            this.$refs.originTree.setCheckedKeys(this.originKeys);

            this.delCancel();
        },

        // 删除弹出层取消
        delCancel: function delCancel() {
            this.delShow = false;
            this.delId = '';
            this.delPid = '';
        },

        // 弹出修改弹出层
        popEditModal: function popEditModal(id, text) {
            this.editId = id;
            this.editText = text;
            this.editShow = true;
        },

        // 修改弹出层确认
        editOk: function editOk() {
            var _this3 = this;

            this.finalList.forEach(function (item) {
                if (item.id === _this3.editId) {
                    item.title = _this3.editText;
                }
            });
            this.editCancel();
        },

        // 修改弹出层取消
        editCancel: function editCancel() {
            this.editShow = false;
            this.editId = '';
            this.editText = '';
        },

        // 初始化源列表Tree
        initOriginTree: function initOriginTree() {
            this.originTree = Tool.arrToTree(this.originList);
        },

        // 初始化源列表点选
        initOriginChecked: function initOriginChecked() {
            var _this4 = this;

            var checkedKeys = [];
            this.finalList.forEach(function (item) {
                if (Number(item.pid) !== 0) {
                    checkedKeys.push(item.id);
                } else {
                    // 判断是否只有一级分类
                    if (!_this4.finalList.map(function (i) {
                        return i.pid;
                    }).includes(item.id)) {
                        checkedKeys.push(item.id);
                    }
                }
            });
            this.$refs.originTree.setCheckedKeys(checkedKeys);
        },

        // 获取源列表keys
        getOriginKeys: function getOriginKeys() {
            this.originKeys = this.$refs.originTree.getCheckedKeys();
            // 点选源列表时关闭目的列表编辑弹出层
            this.editCancel();
            // 点选源列表时关闭目的列表删除弹出层
            this.delCancel();
        },

        // 在 target 数组中取出 arg 数组中没有的值组成数组返回
        findOut: function findOut(target, arg) {
            return target.filter(function (v) {
                return !arg.includes(v);
            });
        },

        // 删除数组中的某个值
        removeByValue: function removeByValue(target, arg) {
            var index = target.indexOf(arg);
            if (index !== -1) {
                target.splice(index, 1);
            }
            return target;
        },

        // 数组去重
        unique: function unique(arr) {
            var newArr = [];
            arr.forEach(function (item) {
                if (!newArr.includes(item)) {
                    newArr.push(item);
                }
            });
            return newArr;
        }
    },
    watch: {
        // 根据源列表的操作，同步目的列表
        originToFinalKeys: function originToFinalKeys() {
            var _this5 = this;

            // 点选源列表生成的目的列表中存在，但当前目的列表中没有
            this.findOut(this.originToFinalKeys, this.finalKeys).forEach(function (key) {
                _this5.originList.forEach(function (item) {
                    if (item.id === key) {
                        _this5.finalList.push(Tool.deepClone(item));
                    }
                });
            });
            // 源列表取消选中，去除目的列表中的item
            this.findOut(this.finalKeys, this.originToFinalKeys).forEach(function (key) {
                _this5.finalList.forEach(function (item) {
                    if (item.id === key) {
                        _this5.finalList = _this5.removeByValue(_this5.finalList, item);
                    }
                });
            });
        },
        finalList: function finalList() {
            // 初始化左侧点选
            this.initOriginChecked();
        }
    }
};

var componentSyncTree = {
  install: function install(Vue, options) {
    Vue.component(vueComponentSyncTree.name, vueComponentSyncTree);
  }
};

export default componentSyncTree;
