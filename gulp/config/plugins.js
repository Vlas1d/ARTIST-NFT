import replace from "gulp-replace"; //пошук і заміна
import plumber from "gulp-plumber"; //обробка помилок
import notify from "gulp-notify"; //Підказки
import browserSync from "browser-sync";
import newer from "gulp-newer"; //Перевірка оновлень
import ifPlugin from "gulp-if";

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin
}