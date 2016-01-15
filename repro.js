var
  babel = require("babel-core"),
  fs = require("fs"),
  path = require("path"),
  fsOpts = {encoding: "utf8"},
  inputFile = path.join(__dirname, "src", "input.jsx"),
  input,
  output,

input = fs.readFileSync(inputFile, fsOpts);

output = babel.transform(input, {
  // Remove this to avoid .babelrc reading.
  filename: inputFile,
  babelrc: false,
  plugins: ['transform-es2015-modules-commonjs', 'syntax-jsx'],
  sourceMap: false
}).code;

fs.writeFileSync(path.join(__dirname, "dist", "actual.js"), output, fsOpts);
