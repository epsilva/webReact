module.exports = {
    presets: [
        "@babel/preset-env", //traduzir as funcionalidades do JS que o navegador não entende
        "@babel/preset-react" //traduzir as funcoinalidades do react
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
}