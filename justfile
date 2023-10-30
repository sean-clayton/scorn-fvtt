set dotenv-filename := ".env.local"

dev:
  mkdir -p ${SCORN_DEV_FOUNDRY_DATA_PATH}/systems/scorn
  watchexec -e js,css,html,json -- cp -r -t ${SCORN_DEV_FOUNDRY_DATA_PATH}/systems/scorn LICENSE-MIT LICENSE-AGPL README.md system.json template.json css/ fonts/ lang/ module/ packs/ templates/