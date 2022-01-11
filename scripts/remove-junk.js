const fs = require('fs');
const del = require('del');

const doneMessage = 'Removing done';

if (!fs.existsSync('./dist')) {
    console.log(doneMessage);
    process.exit(0);
}

async function init() {
    const dist = fs.readdirSync('./dist/').filter((name) => !name.includes('index'));
    await del(['./dist', ...dist.map(name => `${name}.*`)])
}

init().then(() => console.log(doneMessage));
