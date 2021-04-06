/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj = {};
  const result = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name in obj) {
      result.push(`${name}(${obj[name]})`);
      obj[`${name}(${obj[name]})`] = 1;
      obj[name]++;
    } else {
      obj[name] = 1;
      result.push(name);
    }
  }
  return result;
}

module.exports = renameFiles;
