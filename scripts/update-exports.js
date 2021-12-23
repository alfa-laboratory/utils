const fs = require('fs');

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
const dist = fs.readdirSync('./dist/').filter((name) => !name.includes('index'));

const fileExports = Object.fromEntries(
    dist.map((hook) => [
        `./${hook}`,
        { import: `./dist/${hook}/index.mjs`, require: `./dist/${hook}/index.js` },
    ]),
);

const newPkg = {
    ...pkg,
    exports: {
        ".": {
            "import": "./dist/index.mjs",
            "require": "./dist/index.js"
        },
        "./package.json": "./package.json",
        ...fileExports,
    }
}

fs.writeFileSync('./package.json', JSON.stringify(newPkg, null, 4))