import * as pkg from '@sanity/image-url';
console.log('Exports:', pkg);
console.log('Keys:', Object.keys(pkg));
try {
    console.log('Default:', pkg.default);
} catch (e) {
    console.log('No default');
}
