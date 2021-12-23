const fs = require('fs');

const dts = JSON.parse(fs.readFileSync('./dts.json', 'utf-8'));
const dist = fs.readdirSync('./dist/').filter((name) => !name.includes('index'));

const dtsEntries = dist.map((name) => ({
    filePath: `./src/${name}/index.ts`,
    outFile: `./dist/${name}/index.d.ts`,
}));

const newDts = {
    ...dts,
    entries: [
        {
            filePath: './src/index.ts',
            outFile: './dist/index.d.ts',
        },
        ...dtsEntries
    ],
};

console.log('Update dts.json...');
fs.writeFileSync('./dts.json', JSON.stringify(newDts, null, 4) + '\n');

console.log('Creating file exports...');
for (let file of dist) {
    fs.writeFileSync(`./${file}.js`, `module.exports = require('./dist/${file}/index.js');\n`);
    fs.writeFileSync(`./${file}.mjs`, `export * from './dist/${file}/index.mjs';\n`);
    fs.writeFileSync(`./${file}.d.ts`, `export * from './dist/${file}';\n`)
}

console.log('Updating gitignore rules...');
fs.writeFileSync('./.gitignore', dist.map((name) => `${name}.js\n${name}.mjs\n${name}.d.ts`).join('\n') + '\n');

console.log('Done.');
