var money;
var time;

function start() {
    money = +prompt('Ваш бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц', '');
    }
}

start();

var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (var i = 0; i < 2; i++) {
        var a = prompt('Введите обязательную статью расходов в этом месяце', '');
        var b = prompt('Во сколько обойдётся', '');
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
                console.log('done');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    };
}

chooseExpenses();

appData.moneyPerday = (appData.budget/30).toFixed();

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

function checkSavings() {
    if (appData.savings == true) {
        var save = +prompt('Какова сумма накоплений?', '');
        var percent = +prompt('Под какой процент?', '');
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();
