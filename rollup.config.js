import typescript from '@rollup/plugin-typescript';


export default {
    input: 'src/index.ts',
    // 输出多种格式
    output: [
        {
            file: 'dist/bundle.amd.js',
            format: 'amd',
            sourcemap: false,
        },
        {
            file: 'dist/bundle.cjs.js',
            format: 'cjs',
            sourcemap: false,
        },
        {
            file: 'dist/bundle.umd.js',
            format: 'umd',
            name: 'example',
            sourcemap: false,
        },
        {
            file: 'dist/bundle.es.js',
            format: 'es',
            sourcemap: false,
        },
        {
            file: 'dist/bundle.iife.js',
            format: 'iife',
            name: 'example',
            sourcemap: false,
        },
        {
            file: 'dist/bundle.system.js',
            format: 'system',
            sourcemap: false,
        },
    ],
    plugins: [
        typescript(),
    ]
};