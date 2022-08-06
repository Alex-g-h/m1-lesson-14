import { isDarkTheme, ColorThemeElement, DarkTheme, WhiteTheme } from "./colors.js"

const themeDark = new DarkTheme();
const themeWhite = new WhiteTheme();

// get initial colors for white/current theme
window.addEventListener('DOMContentLoaded', (event) => {
  const body = document.querySelector('body');
  if (body)
    themeWhite.addElement(new ColorThemeElement('body', { 'background': body.style.background }));

  const task = body.querySelector('.task-item');
  if (task)
    themeWhite.addElement(new ColorThemeElement('.task-item', { 'color ': task.style.color }));
});

document.addEventListener('keydown', (event) => {
  const { key } = event;
  if (key === 'Tab') {
    if (isDarkTheme()) {
      themeWhite.applyTheme();
    }
    else {
      themeDark.applyTheme();
    }
  }
});