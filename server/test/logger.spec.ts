import { logger } from '../src/utils/logger';

describe('Logger tests', () => {
  it('Visual show-off', () => {
    logger.log('This is an example of a logger.log() method');
    logger.warn('This is an example of a logger.warn() method');
    logger.error('This is an example of a logger.error() method');
    logger.info('This is an example of a logger.info() method');

    expect(1).toBe(1);
  });
});
