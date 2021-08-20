const server = require('./lib/server');

const shutdown = async () => {
  console.info('Gracefully shutdown in progress');
  await server.stop();
  process.exit(0);
};

process.on('SIGTERM', shutdown)
  .on('SIGINT', shutdown)
  .on('SIGHUP', shutdown)
  .on('uncaughtException', (err) => {
    console.log('uncaughtException caught the error: ', err);
    throw err;
  })
  .on('unhandledRejection', (err) => {
    throw err;
  })
  .on('exit', (code) => {
    console.log(`Node process exit with code: ${code}`);
  });

(async() => {
  try {
    await server.start();
  } catch (err) {
    console.error('[APP] initialization failed', err);
    throw err;
  }
  console.info('[APP] initialized SUCCESSFULLY');
})();