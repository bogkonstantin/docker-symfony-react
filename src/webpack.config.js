var Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/landing')
    .setPublicPath('/build/landing')
    .addEntry('landing', './assets/landing/index.js')

    .splitEntryChunks()
    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
    .enableLessLoader()
;

const landingConfig = Encore.getWebpackConfig();
landingConfig.name = 'landing';

Encore.reset();

Encore
    .setOutputPath('public/build/admin')
    .setPublicPath('/build/admin')

    .addEntry('admin', './assets/admin/index.tsx')

    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    .configureBabel(function (babelConfig) {
        babelConfig.plugins.push("@babel/plugin-proposal-class-properties");
    })

    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    .enableTypeScriptLoader(function (tsConfig) {
    })
    .enableReactPreset()
    .enableLessLoader()
    .enableSassLoader()

    .configureCssLoader(options => {
        options.modules = {
            localIdentName: '[local]'
        }
    })
;
const adminConfig = Encore.getWebpackConfig();
adminConfig.name = 'admin';

module.exports = [landingConfig, adminConfig];
