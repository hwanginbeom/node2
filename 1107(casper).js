var childProcess = require('child_process');
var path = require('path');

exports.handler = function(event, context) {

    // Set the path as described here: https://aws.amazon.com/blogs/compute/running-executables-in-aws-lambda/
    process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

    // Set the path to casperjs
    var casperPath = path.join(__dirname, 'node_modules/casperjs/bin/casperjs');

    // Arguments for the casper script
    var processArgs = [
        'test',
        path.join(__dirname, 'casper_test_file.js')
    ];

    // Launch the child process
    childProcess.execFile(casperPath, processArgs, function(error, stdout, stderr) {
        if (error) {
            context.fail(error);
            return;
        }
        if (stderr) {
            context.fail(error);
            return;
        }
        context.succeed(stdout);
    });
}
