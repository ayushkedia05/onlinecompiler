const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");
// const { dirname } = require("path");

const dircodes = path.join(__dirname, "codes");

if (!fs.existsSync(dircodes)) {
  fs.mkdirSync(dircodes, { recursive: true });
}

const generatefile = async (format, content) => {
  const id = uuid();
  const filename = `${id}.${format}`;

  const filepath = path.join(dircodes, filename);

  await fs.writeFileSync(filepath, content);
  return filepath;
};

module.exports = {
    generatefile,
};
