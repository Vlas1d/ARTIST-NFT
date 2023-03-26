import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        fonts: `${buildFolder}/fonts/`,
        images: `${buildFolder}/img/`,
    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/*.scss`,
        js: `${srcFolder}/js/*.js`,
        fonts: `${srcFolder}/fonts/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
        icons: `${srcFolder}/img/icons/*.svg`,
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        fonts: `${srcFolder}/fonts/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
        icons: `${srcFolder}/img/icons/*.svg`,
    },

    clean: `${buildFolder}/`,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}