export default {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: 'defaults',
                modules: false // Não converte módulos ES6 para CommonJS
            },
        ],
    ],
};
