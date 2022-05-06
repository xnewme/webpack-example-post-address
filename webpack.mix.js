let mix = require('laravel-mix');
mix
  .js('src/app.js', 'public/app.js')
  .sass('src/scss/style.scss', 'css')
  .setPublicPath('public');
