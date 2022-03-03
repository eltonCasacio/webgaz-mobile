module.exports = function (plop) {
  plop.setGenerator('components', {
    description: 'application components',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'components name?',
      },
    ],

    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.tsx',
        templateFile: 'templates/styles.tsx.hbs',
      },
    ],
  });
};
