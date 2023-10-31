/**
 * @param {String} compendiumString
 * @returns {Array.<String>}
 */
export function compendiumInfoFromString(compendiumString) {
  return compendiumString.split(";");
}

/**
 * @param {String} compendiumName
 * @param {String} itemName
 * @returns {Promise.<Item|RollTable|undefined>}
 */
export async function findCompendiumItem(compendiumName, itemName) {
  const compendium = game.packs.get(compendiumName);
  if (compendium) {
    const documents = await compendium.getDocuments();
    const item = documents.find((i) => i.name === itemName);
    if (!item) {
      console.warn(
        `findCompendiumItem: Could not find item (${itemName}) in compendium (${compendiumName})`
      );
    }
    return item;
  }
  console.warn(
    `findCompendiumItem: Could not find compendium (${compendiumName})`
  );
}

/**
 * @param {String} compendiumName
 * @param {String} tableName
 * @param {Object} options
 * @returns {Promise.<RollTableDraw>}
 */
export async function drawTable(compendiumName, tableName, options = {}) {
  const table = await findCompendiumItem(compendiumName, tableName);
  return table.draw({ displayChat: false, ...options });
}

/**
 * @param {String} compendium
 * @param {String} table
 * @returns {Promise.<String>}
 */
export async function drawTableText(compendium, table) {
  return (await drawTable(compendium, table)).results[0].getChatText();
}

/**
 * @param {String} compendium
 * @param {String} table
 * @returns {Promise.<Item[]>}
 */
export async function drawTableItem(compendium, table) {
  const draw = await drawTable(compendium, table);
  return findTableItems(draw.results);
}

/**
 * @param {TableResult[]} results
 * @returns {Promise.<Item[]>}
 */
export async function findTableItems(results) {
  const items = [];
  let item = null;
  for (const result of results) {
    if (result.type === CONST.TABLE_RESULT_TYPES.COMPENDIUM) {
      item = await findCompendiumItem(result.documentCollection, result.text);
      if (item) {
        items.push(item);
      }
    }
  }
  return items;
}
