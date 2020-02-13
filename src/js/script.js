var money = +prompt('Ваш бюджет на месяц', '');
var time = prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (var i = 0; i < 2; i++) {
    var a = prompt('Введите обязательную статью расходов в этом месяце', '');
    var b = prompt('Во сколько обойдётся', '');
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
            console.log('done');
        appData.expenses[a] = b;
    } else {

    }
};

appData.moneyPerday = appData.budget/30;

alert('Ежедневный бюджет: ' + appData.moneyPerday);

if (appData.moneyPerday < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
    console.log('Средний уровень достатка');
}   else if (appData.moneyPerday > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}