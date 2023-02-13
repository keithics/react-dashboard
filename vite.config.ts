import { defineConfig } from 'vite';
import path from 'path';
import { readdirSync } from 'fs';
import react from '@vitejs/plugin-react-swc';
const absolutePathAliases: { [key: string]: string } = {};

const srcPath = path.resolve('./src');
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map((dirent) =>
  dirent.name.replace(/(\.ts){1}(x?)/, '')
);

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = path.join(srcPath, directory);
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { ...absolutePathAliases },
  },
});
