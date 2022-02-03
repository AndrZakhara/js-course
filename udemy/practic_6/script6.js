const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = [];

for (let i = 0; i < employers.length; i++) {
    if (employers[i].length > 0 && employers[i].length != '') {
        employersNames.push(employers[i]);
    }
}
for (let i = 0; i < employersNames.length; i++) {
    employersNames[i] = employersNames[i].toLowerCase().trim();
}

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

let { cash, eu, rus } = sponsors;

function calcCash(own = 0, ...dollars) {

    let total = own;
    for (let i = 0; i < dollars.length; i++) {
        total += +dollars[i];
    }
    return total;
}

let money = calcCash(null, ...cash);

function makeBusiness(owner, director = "Viv", allCash, emp) {

    const shadow = 'unexpected sponsor';
    let sumSponsors = [...eu, ...rus, shadow];

    console.log(`We have a business. Owner:${owner}, director: ${director}. Our budget: ${allCash}. And our employers:${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness('Sam', null, money, employersNames);
