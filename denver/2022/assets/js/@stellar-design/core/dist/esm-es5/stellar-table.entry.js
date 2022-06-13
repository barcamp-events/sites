import { r as registerInstance, h, g as getElement } from './core-36452501.js';
var Table = /** @class */ (function () {
    function Table(hostRef) {
        registerInstance(this, hostRef);
        this.upgrade = false;
        this.chart = false;
        this.striped = false;
    }
    Table.prototype.tableChangeHandler = function () {
        if (this.chart) {
            this.element.querySelector('stellar-chart').refresh();
        }
    };
    Table.prototype.componentWillLoad = function () {
        if (this.chart) {
            this.element.querySelector('table').id = this.name;
        }
    };
    Table.prototype.componentDidLoad = function () {
        if (this.chart) {
            this.element.querySelector('stellar-chart').refresh();
        }
    };
    Table.prototype.render = function () {
        return [
            this.chart && h("stellar-chart", { for: this.name }),
            this.upgrade ? h("complete-table", { name: this.name }, h("slot", null)) : h("slot", null)
        ];
    };
    Object.defineProperty(Table.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table, "style", {
        get: function () { return "stellar-table{display:block}stellar-table complete-table .table,stellar-table table{--font-size:14px;border:0;width:100%;border-collapse:collapse;text-align:left;font-size:14px}stellar-table complete-table .table .options,stellar-table table .options{border:none!important}stellar-table complete-table .table .thead,stellar-table complete-table .table thead,stellar-table table .thead,stellar-table table thead{border-bottom:1px solid var(--gray2)}stellar-table complete-table .table .thead .th,stellar-table complete-table .table .thead th,stellar-table complete-table .table thead .th,stellar-table complete-table .table thead th,stellar-table table .thead .th,stellar-table table .thead th,stellar-table table thead .th,stellar-table table thead th{--font-size:13px;border:0!important;padding:27px 15px 27px 65px;text-align:left;color:var(--gray);font-size:13px;font-weight:600}stellar-table complete-table .table .thead .th:last-child,stellar-table complete-table .table .thead th:last-child,stellar-table complete-table .table thead .th:last-child,stellar-table complete-table .table thead th:last-child,stellar-table table .thead .th:last-child,stellar-table table .thead th:last-child,stellar-table table thead .th:last-child,stellar-table table thead th:last-child{text-align:right}stellar-table complete-table .table .tbody tr:first-child td,stellar-table complete-table .table tbody tr:first-child td,stellar-table table .tbody tr:first-child td,stellar-table table tbody tr:first-child td{padding-top:27px}stellar-table complete-table .table .tbody .td,stellar-table complete-table .table .tbody td,stellar-table complete-table .table tbody .td,stellar-table complete-table .table tbody td,stellar-table table .tbody .td,stellar-table table .tbody td,stellar-table table tbody .td,stellar-table table tbody td{border-right:none!important;border-left:none!important;padding:20px 15px 20px 65px}stellar-table complete-table .table .tbody .td:last-child,stellar-table complete-table .table .tbody td:last-child,stellar-table complete-table .table tbody .td:last-child,stellar-table complete-table .table tbody td:last-child,stellar-table table .tbody .td:last-child,stellar-table table .tbody td:last-child,stellar-table table tbody .td:last-child,stellar-table table tbody td:last-child{text-align:right}stellar-table[striped] complete-table .table .tbody tr,stellar-table[striped] complete-table .table tbody tr,stellar-table[striped] table .tbody tr,stellar-table[striped] table tbody tr{border-bottom:1px solid var(--gray2)}stellar-table[striped] complete-table .table .tbody tr:nth-child(odd),stellar-table[striped] complete-table .table tbody tr:nth-child(odd),stellar-table[striped] table .tbody tr:nth-child(odd),stellar-table[striped] table tbody tr:nth-child(odd){background:var(--gray1)}"; },
        enumerable: true,
        configurable: true
    });
    return Table;
}());
export { Table as stellar_table };
