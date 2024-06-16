
const handler = async (m, {conn}) => {
  const datas = global
   const idioma = datas.db.data.users[m.sender].language
   const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
   const tradutor = _translate.plugins.info_tyc
   
   global.terminos = tradutor.texto1;

  m.reply(global.terminos);
};
handler.customPrefix = /términos y condiciones y prsdfivacidad|terminosycondicionesyprivacidsdfsfad|terminosycosfsndiciones|termindsfsos y condiciosdfsfsfsfnes y privacidad|terminos y cosdfsdfsndiciones|terminos sdfsdf condiciones|terminos de sdfsdfuso|Terminossfds de uso|Terminó sesdfsf uso|térmisdfsfnos desfs uso|Términos de sdfsfuso|Términos sdfdsfsdfy condiciones/i;
handler.command = new RegExp;
export default handler;


