import vituum from 'vituum'
import handlebars from '@vituum/vite-plugin-handlebars'
import postcss from '@vituum/vite-plugin-postcss'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
    plugins: [
        vituum(),
        handlebars({
            partials: {
                directory:'src/partials',
                extname:false
            }
        }),
        postcss({
            autoprefixer:{
               overrideBrowserslist: [
      'iOS >= 9',
      'Android >= 4.4',
      'last 2 versions',
      '> 0.2%',
      'not dead',
    ],
            }
        }),
        ViteImageOptimizer({
        /* pass your config */
      }),
        
    ]
}