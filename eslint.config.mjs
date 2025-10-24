// eslint.config.mjs
import next from 'eslint-config-next';

export default [
    ...next, // spread because eslint-config-next exports an array
    {
        ignores: ['.next/**', 'node_modules/**', 'dist/**'],
    },
];
