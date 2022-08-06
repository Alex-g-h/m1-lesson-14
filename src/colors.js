/**
 * Check current color theme
 * @returns True if current theme is dark, otherwise false.
 */
export function isDarkTheme() {
  let isDark = true;
  const body = document.querySelector('body');
  if (body)
    isDark = body.style.background === 'rgb(36, 41, 46)'; // '#24292E'

  return isDark;
}

/**
 * Class with one element for change style
 * Element - tag name, class name or ID name
 * Style - Object {key: value} where key is part (color, border, etc.) of style to change
 */
export class ColorThemeElement {
  constructor(element, style) {
    this.element = element;
    this.style = style;
  }
}

class ColorTheme {
  #elements;

  constructor() {
    this.#elements = [];
  }

  addElement(elem) {
    this.#elements.push(elem);
  }

  applyTheme() {
    this.#elements.forEach(elem => {
      if (Object.entries(elem.style).length != 1)
        return;
      const key = Object.keys(elem.style)[0];
      const value = Object.values(elem.style)[0];
      document.querySelectorAll(elem.element).forEach(el => {
        el.style.setProperty(key, value);
      })
    })
  }
}

export class DarkTheme extends ColorTheme {
  constructor() {
    super();
    this.addElement(new ColorThemeElement('body', { 'background': '#24292E' }));
    this.addElement(new ColorThemeElement('.task-item', { 'color ': '#ffffff' }));
    this.addElement(new ColorThemeElement('button', { 'border': '1px solid #ffffff' }));
  }
}

export class WhiteTheme extends ColorTheme {
  constructor() {
    super();
    this.addElement(new ColorThemeElement('button', { 'border': 'none' }));
  }
}
