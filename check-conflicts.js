const { promisify } = require('util');
const process = require('process');
const exec = promisify(require('child_process').exec);
const chalk = require('chalk');

const ignoredFiles = ['check-conflicts.js'];
const ignoredString = ignoredFiles.length ? ignoredFiles.map(f => `:/!${f}`).join(' ') : '';
const findConflictsCommand = `git grep --line-number --color --break '<<<<<<< HEAD' -- './*' ${ignoredString}`;

const checkConflicts = async function checkConflicts () {
  try {
    const { stdout } = await exec(findConflictsCommand);

    if (stdout) {
      console.log(chalk.red(`You're trying to commit unresolved merge conflicts or commented conflicts`));
      console.log(chalk.red('Please, fix them in the files below:'));
      console.log("");
      console.log(chalk.yellow(stdout));

      process.exit(1);
    } else {
      process.exit(0);
    }
  } catch (e) {
    // No files found
    process.exit(0);
  }

};

checkConflicts();