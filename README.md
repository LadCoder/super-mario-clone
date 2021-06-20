# Typescript Node Stack

### Stack components

-   Node
-   Typescript
-   React
-   Webpack
-   Babel

### Webpack

Webpack has been initialised to handle:

-   `*.module.css` files
-   images
-   typescript
-   react
-   CSS minification

### Prettier

```json
{
    "singleQuote": true,
    "printWidth": 200,
    "proseWrap": "always",
    "tabWidth": 4,
    "useTabs": false,
    "trailingComma": "none",
    "bracketSpacing": true,
    "jsxBracketSameLine": true,
    "semi": false
}
```

### Commands

-   To setup the project, run the command `./setup.sh` in a terminal.
-   To build the project, run the command `npm run build` in a terminal.
-   To run the project, run the command `npm run serve` in a terminal.

### Git workflows

#### Creating a new branch

1. `git checkout -b developer_name/feature_description`
2. Create new files/modify code
3. `git add .`
4. `git commit -a -m "description of changes"`
5. `git push` or `git push origin name_of_branch`
6. Create a pull request
