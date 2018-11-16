const spawn = require('child_process').spawn;

// const process = [
//   { args: ['run server'], opts: { stdio: 'inherit', cwd: '.', shell: true } },
//   { args: ['run client'], opts: { stdio: 'inherit', cwd: '.', shell: true } }
// ];

// process.forEach(element => spawn('npm', element.args, element.opts));

const args = ['start', 'client'];
const opts = { stdio: 'inherit', cwd: '.', shell: true };
spawn('npm', args, opts);
