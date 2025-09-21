/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$|^[a-z0-9\\-]+$",
    "media-feature-range-notation": null
  }
};