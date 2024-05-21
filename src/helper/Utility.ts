export default class Util {
    static formatNum(n:number, d:number) {
        var str = (n || 0).toFixed(d);
        var x = str.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }
    static formatPrice(price: number|undefined){
        if(price){
            return this.formatNum(price, 0)
        }
        return 0
    }
}