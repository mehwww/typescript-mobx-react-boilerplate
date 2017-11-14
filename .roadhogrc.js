export default {
  entry: 'src/index.tsx',
  sass: true,
  define: {
    'process.env.DEPLOY_ENV': process.env.DEPLOY_ENV === 'prod' ? 'prod' : 'staging',
  },
  ignoreMomentLocale: true,
  extraBabelPlugins: [
    'transform-runtime',
    'styled-components',
  ],
};
