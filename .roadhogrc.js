export default {
  entry: 'src/index.tsx',
  sass: true,
  define: {
    'process.env.NODE_ENV': process.env.NODE_ENV === 'production' ? 'production' : 'development',
    'process.env.DEPLOY_ENV': process.env.DEPLOY_ENV === 'prod' ? 'prod' : 'staging',
  },
  ignoreMomentLocale: true,
  extraBabelPlugins: [
    'react-hot-loader/babel',
    'transform-runtime',
    'styled-components',
  ],
};
