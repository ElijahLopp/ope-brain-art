Object.defineProperty(exports, "__esModule", { value: true });
var order = JSON.stringify([
    {
        'ID': '1',
        'responsible': 'Vó dele',
        'patient': 'Elias',
        'contact': '11 961216815',
        'expirationDate': '2020/12/25',
        'sessionValue': 60.89,
        'payDay': '2020/12/24'
    },
    {
        'ID': '1',
        'responsible': 'Andrew',
        'patient': 'Andrew',
        'contact': '11 961216815',
        'expirationDate': '2020/12/25',
        'sessionValue': 150.38,
        'payDay': '2020/12/24'
    },
    {
        'ID': '1',
        'responsible': 'Mãe dele',
        'patient': 'Matheus',
        'contact': '11 961216815',
        'expirationDate': '2020/12/25',
        'sessionValue': 32.38,
        'payDay': '2020/12/24'
    },
    {
        'ID': '1',
        'responsible': 'Mãe dele',
        'patient': 'Bran',
        'contact': '11 961216815',
        'expirationDate': '2020/12/25',
        'sessionValue': 32.38,
        'payDay': '2020/12/24'
    },
    {
        'ID': '1',
        'responsible': 'Cristiane',
        'patient': 'Leo',
        'contact': '11 961216815',
        'expirationDate': '2020/12/25',
        'sessionValue': 32.38,
        'payDay': '2020/12/24'
    },
]);
exports.orderDetails = JSON.parse(order, function (field, value) {
    var dupValue = value;
    if (typeof value === 'string' && /^(\d{4}\d\d\d\d([tT][\d:]*){1})([zZ]|([+])(\d\d):?(\d\d))?$/.test(value)) {
        var arr = dupValue.split(/[^0-9]/);
        value = new Date(parseInt(arr[0], 10), parseInt(arr[1], 10) - 1, parseInt(arr[2], 10), parseInt(arr[3], 10), parseInt(arr[4], 10), parseInt(arr[5], 10));
    }
    return value;
});