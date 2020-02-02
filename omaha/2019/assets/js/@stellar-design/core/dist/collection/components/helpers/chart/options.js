import Highcharts from 'highcharts';
import { shuffle, colors } from '../../../utils';
// @ts-ignore
Highcharts.wrap(Highcharts.Tooltip.prototype, 'refresh', function (p, point, mouseEvents) {
    p.call(this, point, mouseEvents);
    const label = this.label;
    if (label && point) {
        label.attr({
            fill: point.series.color || point.color
        });
    }
});
Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});
export const theme = {
    chart: {
        style: {
            fontFamily: "var(--font-heading)",
            fontSize: "1rem"
        }
    },
    lang: {
        decimalPoint: '.',
        thousandsSep: ','
    },
    exporting: {
        enabled: false
    },
    series: [],
    legend: {
        backgroundColor: "white",
    },
    credits: {
        enabled: false
    },
    tooltip: {
        borderColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 9,
        style: {
            color: 'white',
            fontWeight: 'bold',
            borderWidth: 1,
            borderColor: 'white',
            borderStyle: 'solid'
        }
    },
    // @ts-ignore
    colors: shuffle([colors.base, ...colors.red.filter((i, key) => key >= 5), ...colors.orange.filter((i, key) => key >= 5), ...colors.yellow.filter((i, key) => key >= 5), ...colors.green.filter((i, key) => key >= 5), ...colors.blue.filter((i, key) => key >= 5), ...colors.violet.filter((i, key) => key >= 5), ...colors.cyan.filter((i, key) => key >= 5), ...colors.fuschia.filter((i, key) => key >= 5), ...colors.gray.filter((i, key) => key >= 5), ...colors.indigo.filter((i, key) => key >= 5), ...colors.lime.filter((i, key) => key >= 5), ...colors.pink.filter((i, key) => key >= 5), ...colors.teal.filter((i, key) => key >= 5)]),
};
export class HighchartsModel {
    serialize() {
        return this;
    }
}
