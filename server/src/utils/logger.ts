const colors = {
  Reset: '\x1b[0m',
  Bright: '\x1b[1m',
  Dim: '\x1b[2m',
  Underscore: '\x1b[4m',
  Blink: '\x1b[5m',
  Reverse: '\x1b[7m',
  Hidden: '\x1b[8m',
  FgBlack: '\x1b[30m',
  FgRed: '\x1b[31m',
  FgGreen: '\x1b[32m',
  FgYellow: '\x1b[33m',
  FgBlue: '\x1b[34m',
  FgMagenta: '\x1b[35m',
  FgCyan: '\x1b[36m',
  FgWhite: '\x1b[37m',
  BgBlack: '\x1b[40m',
  BgRed: '\x1b[41m',
  BgGreen: '\x1b[42m',
  BgYellow: '\x1b[43m',
  BgBlue: '\x1b[44m',
  BgMagenta: '\x1b[45m',
  BgCyan: '\x1b[46m',
  BgWhite: '\x1b[47m',
};

function getFileName() {
  const stackOffset = 2;
  try {
    throw new Error('Custom Error');
  } catch (e) {
    Error.prepareStackTrace = (...args) => args[1];
    const file = e.stack[stackOffset].getFileName();
    const row = e.stack[stackOffset].getLineNumber();
    const column = e.stack[stackOffset].getColumnNumber();
    return { file, row, column };
  }
}

const logOfType = (tag: string, color: string) => (...data: any) => {
  const { file, row, column } = getFileName();
  const filePath = file.split('/').slice(-2).join('/');
  // eslint-disable-next-line no-console
  console.log(
    `╭${color}[${tag}]${colors.Reset} (${filePath}@${row}:${column}) ${new Date().toLocaleTimeString()}
╰#`, ...data,
  );
};

const alert = logOfType('!', colors.FgBlack + colors.Blink + colors.BgYellow);
const info = logOfType('info', colors.FgBlack + colors.BgCyan);
const warn = logOfType('warn', colors.FgBlack + colors.BgYellow);
const log = logOfType('log', colors.FgWhite + colors.BgGreen);
const error = logOfType('danger', colors.FgWhite + colors.BgRed);

export const logger = {
  alert,
  info,
  warn,
  log,
  error,
};
