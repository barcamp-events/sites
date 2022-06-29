'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const Table = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.upgrade = false;
        this.chart = false;
        this.striped = false;
    }
    tableChangeHandler() {
        if (this.chart) {
            this.element.querySelector('stellar-chart').refresh();
        }
    }
    componentWillLoad() {
        if (this.chart) {
            this.element.querySelector('table').id = this.name;
        }
    }
    componentDidLoad() {
        if (this.chart) {
            this.element.querySelector('stellar-chart').refresh();
        }
    }
    render() {
        return [
            this.chart && core.h("stellar-chart", { for: this.name }),
            this.upgrade ? core.h("complete-table", { name: this.name }, core.h("slot", null)) : core.h("slot", null)
        ];
    }
    get element() { return core.getElement(this); }
    static get style() { return "stellar-table{display:block}stellar-table complete-table .table,stellar-table table{--font-size:14px;border:0;width:100%;border-collapse:collapse;text-align:left;font-size:14px}stellar-table complete-table .table .options,stellar-table table .options{border:none!important}stellar-table complete-table .table .thead,stellar-table complete-table .table thead,stellar-table table .thead,stellar-table table thead{border-bottom:1px solid var(--gray2)}stellar-table complete-table .table .thead .th,stellar-table complete-table .table .thead th,stellar-table complete-table .table thead .th,stellar-table complete-table .table thead th,stellar-table table .thead .th,stellar-table table .thead th,stellar-table table thead .th,stellar-table table thead th{--font-size:13px;border:0!important;padding:27px 15px 27px 65px;text-align:left;color:var(--gray);font-size:13px;font-weight:600}stellar-table complete-table .table .thead .th:last-child,stellar-table complete-table .table .thead th:last-child,stellar-table complete-table .table thead .th:last-child,stellar-table complete-table .table thead th:last-child,stellar-table table .thead .th:last-child,stellar-table table .thead th:last-child,stellar-table table thead .th:last-child,stellar-table table thead th:last-child{text-align:right}stellar-table complete-table .table .tbody tr:first-child td,stellar-table complete-table .table tbody tr:first-child td,stellar-table table .tbody tr:first-child td,stellar-table table tbody tr:first-child td{padding-top:27px}stellar-table complete-table .table .tbody .td,stellar-table complete-table .table .tbody td,stellar-table complete-table .table tbody .td,stellar-table complete-table .table tbody td,stellar-table table .tbody .td,stellar-table table .tbody td,stellar-table table tbody .td,stellar-table table tbody td{border-right:none!important;border-left:none!important;padding:20px 15px 20px 65px}stellar-table complete-table .table .tbody .td:last-child,stellar-table complete-table .table .tbody td:last-child,stellar-table complete-table .table tbody .td:last-child,stellar-table complete-table .table tbody td:last-child,stellar-table table .tbody .td:last-child,stellar-table table .tbody td:last-child,stellar-table table tbody .td:last-child,stellar-table table tbody td:last-child{text-align:right}stellar-table[striped] complete-table .table .tbody tr,stellar-table[striped] complete-table .table tbody tr,stellar-table[striped] table .tbody tr,stellar-table[striped] table tbody tr{border-bottom:1px solid var(--gray2)}stellar-table[striped] complete-table .table .tbody tr:nth-child(odd),stellar-table[striped] complete-table .table tbody tr:nth-child(odd),stellar-table[striped] table .tbody tr:nth-child(odd),stellar-table[striped] table tbody tr:nth-child(odd){background:var(--gray1)}"; }
};

exports.stellar_table = Table;
