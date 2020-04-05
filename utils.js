const os = require('os');

const CONFIG_FILE_PATH = './config.json'

const UNZIPPED_SERVER_FOLDER_NAME = 'bedrock-server-1.14.32.1';
const UNZIPPED_SERVER_FOLDER_PATH = `./${UNZIPPED_SERVER_FOLDER_NAME}`;
const ZIPPED_SERVER_PATH = `${UNZIPPED_SERVER_FOLDER_PATH}.zip`;
const SERVER_EXECUTABLE_PATH = `${UNZIPPED_SERVER_FOLDER_PATH}/bedrock_server`;
const WINDOWS_SERVER_LINK = `https://minecraft.azureedge.net/bin-linux/${UNZIPPED_SERVER_FOLDER_NAME}.zip`;
const LINUX_SERVER_LINK = `https://minecraft.azureedge.net/bin-linux/${UNZIPPED_SERVER_FOLDER_NAME}.zip`;
const SERVER_PROPERTIES_FILE_NAME = 'server.properties';
const SERVER_PROPERTIES_FILE_PATH = `${UNZIPPED_SERVER_FOLDER_PATH}/${SERVER_PROPERTIES_FILE_NAME}`;
const SERVER_PROPERTIES_FIELDS = [
  'server-name',
  'gamemode',
  'difficulty',
  'allow-cheats',
  'max-players',
  'online-mode',
  'white-list',
  'server-port',
  'server-portv6',
  'view-distance',
  'tick-distance',
  'player-idle-timeout',
  'max-threads',
  'level-name',
  'default-player-permission-level',
  'texturepack-required',
  'content-log-file-enabled',
  'compression-threshold',
  'server-authoritative-movement',
  'player-movement-score-threshold',
  'player-movement-distance-threshold',
  'player-movement-duration-threshold-in-ms',
  'correct-player-movement'
]


const platform = os.platform();


module.exports = {
  CONFIG_FILE_PATH,
  UNZIPPED_SERVER_FOLDER_NAME,
  UNZIPPED_SERVER_FOLDER_PATH,
  ZIPPED_SERVER_PATH,
  SERVER_EXECUTABLE_PATH,
  WINDOWS_SERVER_LINK,
  LINUX_SERVER_LINK,
  SERVER_PROPERTIES_FILE_NAME,
  SERVER_PROPERTIES_FILE_PATH,
  SERVER_PROPERTIES_FIELDS,
  platform
}
