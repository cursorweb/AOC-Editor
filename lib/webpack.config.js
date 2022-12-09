import * as path from "path";

export default {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    experiments: {
        outputModule: true,
    },
    output: {
        filename: 'bundle.js',
        library: {
            type: "module"
        },
        path: path.resolve(process.cwd(), 'dist'),
    },
};