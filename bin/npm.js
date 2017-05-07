'use strict';

const fs     = require('fs');
const path   = require('path');
const packer = require('@my-dish/packer');

module.exports = (projectName, projectPath, templateURL) => {

  // install template
  packer.installTemplates(templateURL);

  const npm = require(`${process.cwd()}/node_modules/${templateURL}/npm`);

  const packageJSON = packer.createPackageJSON(npm, projectName);

  fs.writeFileSync(path.join(projectPath, 'package.json'), packageJSON);

  let command = 'yarn';

  packer.installPackages(
    command,
    npm.packages.dependencies,
    npm.packages.devDependencies
  );

  // yarn overwrites node_modules so dish reinstalls templates
  if (command === 'yarn') {
    packer.installTemplates(templateURL);
  }
};
