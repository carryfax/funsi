let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Menu2.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
โญโโใ ๐โก๏ธ๐โก๏ธ๐โก๏ธ๐ ใโโโฎ
โโ ๐๐๐ฉ๐ ๐ฟ๐๐ค๐จ - ๐๐๐ ๐ฝ๐ง๐ค๐ ๐๐ง๐จ | ๐ฝ๐๐
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโ๏ธ *ยก๐ola! ${username}* โ๏ธ
โฐโโใ ๐โก๏ธ๐โก๏ธ๐โก๏ธ๐ ใโโโฏ
โโโโโโโโโโโโโโโโโโโโ
โ *INFORMACIรN | MENU SIMPLE*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ โ๏ธ _${usedPrefix}donar_
โฃ โ โ๏ธ _${usedPrefix}infobot_
โฃ โ โ๏ธ _${usedPrefix}grupos_
โฃ โ โ๏ธ _${usedPrefix}instalarbot_
โฃ โ โ๏ธ _${usedPrefix}reglas_
โฃ โ โ๏ธ _${usedPrefix}menusimple_
โฃ โ โ๏ธ _${usedPrefix}menuaudios_
โฃ โ โ๏ธ _${usedPrefix}menu1.2_
โฃ โ โ๏ธ _${usedPrefix}menu2_
โฃ โ โ๏ธ _${usedPrefix}estado_
โฃ โ โ๏ธ _ยฟQuรฉ es un Bot?_
โฃ โ โ๏ธ _Codigos para audios_
โฃ โ โ๏ธ _Tรฉrminos y condiciones_
โฃ โ ๐ฎ _${usedPrefix}bug *tal comando con fallas*_
โฃ โ ๐ฎ _${usedPrefix}report *tal comando con fallas*_
โฃ โ ๐ฎ _${usedPrefix}reporte *tal comando con fallas*_
โฃ โ ๐ _${usedPrefix}owner_
โฃ โ ๐ _${usedPrefix}contacto_
โฃ โ ๐ค _${usedPrefix}join *enlace del grupo*_ 
โฃ โ ๐ค _${usedPrefix}unete *enlace del grupo*_ 
โฃ โ ๐ค _${usedPrefix}bots *ver bots*_
โฃ โ ๐๏ธ _${usedPrefix}top10gays | topgay_
โฃ โ ๐๏ธ _${usedPrefix}toplind@s | toplind@_
โฃ โ ๐๏ธ _${usedPrefix}topput@s | toppt_
โฃ โ ๐๏ธ _${usedPrefix}toppajer@s | toppajeros_
โฃ โ ๐๏ธ _${usedPrefix}topotakus | toptakus_
โฃ โ ๐งฉ _${usedPrefix}math | mates | matemรกticas *modo*_
โฃ โ ๐พ _${usedPrefix}ttt | tictactoe *nombre del la sala*_
โฃ โ ๐งฉ _${usedPrefix}delttt *nombre del la sala*_
โฃ โ ๐พ _${usedPrefix}gay2 *@tag*_
โฃ โ ๐พ _${usedPrefix}gay2 *yo*_
โฃ โ ๐งฉ _${usedPrefix}gay *@tag / nombre*_
โฃ โ ๐พ _${usedPrefix}lesbi *@tag / nombre*_
โฃ โ ๐งฉ _${usedPrefix}pajero *@tag / nombre*_
โฃ โ ๐พ _${usedPrefix}pajera *@tag / nombre*_
โฃ โ ๐งฉ _${usedPrefix}puta *@tag / nombre*_
โฃ โ ๐พ _${usedPrefix}puto *@tag / nombre*_
โฃ โ ๐งฉ _${usedPrefix}rata *@tag / nombre*_
โฃ โ ๐พ _${usedPrefix}manco *@tag / nombre*_
โฃ โ ๐งฉ _${usedPrefix}manca *@tag / nombre*_
โฃ โ ๐พ _${usedPrefix}formarpareja | pareja5_
โฃ โ ๐งฉ _${usedPrefix}dado_
โฃ โ ๐พ _${usedPrefix}simsimi | simi | bot *texto*_
โฃ โ ๐งฉ _${usedPrefix}formartrio_
โฃ โ ๐พ _${usedPrefix}love *@tag / nombre*_
โฃ โ ๐งฉ _${usedPrefix}amigorandom | amigo | amistad_
โฃ โ ๐พ _${usedPrefix}slot *cantidad*_
โฃ โ ๐งฉ _${usedPrefix}ppt *piedra / papel / tijera*_
โฃ โ ๐พ _${usedPrefix}prostituta *@tag / nombre*_
โฃ โ ๐งฉ _${usedPrefix}prostituto *@tag / nombre*_
โฃ โ ๐ _${usedPrefix}imagen *texto*_
โฃ โ ๐ช _${usedPrefix}ytsearch *texto*_
โฃ โ ๐ _${usedPrefix}dlaudio *link yt*_
โฃ โ ๐ _${usedPrefix}dlvid *link yt*_
โฃ โ ๐ช _${usedPrefix}ytmp3 *link yt*_
โฃ โ ๐ _${usedPrefix}ytmp4 *link yt*_
โฃ โ ๐ _${usedPrefix}play *titulo del audio*_
โฃ โ ๐ช _${usedPrefix}play2 *titulo del video*_
โฃ โ ๐ _${usedPrefix}play3 *titulo del audio/video*_
โฃ โ ๐ _${usedPrefix}letra *nombredelacanciรณn*_
โฃ โ ๐ช _${usedPrefix}google *texto*_
โฃ โ ๐ _${usedPrefix}googlef *texto*_
โฃ โ ๐ _${usedPrefix}pinterestvideo *link de pinterest*_
โฃ โ ๐ช _${usedPrefix}tiktokaudio *link del tiktok*_
โฃ โ ๐ _${usedPrefix}tiktok *link*_
โฃ โ ๐ _${usedPrefix}spotify *autor, cancion*_
โฃ โ ๐ช _${usedPrefix}acortar *link*_
โฃ โ ๐ _${usedPrefix}pinterest2 *texto*_
โฃ โ ๐ _${usedPrefix}xnxx *link de xnxx*_
โฃ โ ๐ช _${usedPrefix}xnxxsearch *texto*_
โฃ โ ๐ _${usedPrefix}ssweb *link*_
โฃ โ ๐ _${usedPrefix}animeinfo *nombre del anime*_
โฃ โ ๐ช _${usedPrefix}verinstagram | verig |igver *usuario*_
โฃ โ ๐ _${usedPrefix}wikipedia | wiki | internet *texto*_
โฃ โ ๐ _${usedPrefix}admins *texto*_ 
โฃ โ ๐ _${usedPrefix}aรฑadir *numero*_ (desactivado)
โฃ โ ๐ _${usedPrefix}sacar @tag_ (desactivado)
โฃ โ ๐ _${usedPrefix}save *@tag + nombre de contacto*_
โฃ โ ๐ _${usedPrefix}daradmin *@tag*_
โฃ โ ๐ _${usedPrefix}quitaradmin *@tag*_
โฃ โ ๐ _${usedPrefix}grupo *abierto / cerrado*_
โฃ โ ๐ _${usedPrefix}enable welcome_
โฃ โ ๐ _${usedPrefix}disable welcome_
โฃ โ ๐ _${usedPrefix}enable antilink_ *(WhatsApp)*
โฃ โ ๐ _${usedPrefix}disable antilink_ 
โฃ โ ๐ _${usedPrefix}enable antilink2_ *(https:)*
โฃ โ ๐ _${usedPrefix}disable antilink2_
โฃ โ ๐ _${usedPrefix}enable delete_
โฃ โ ๐ _${usedPrefix}disable  delete_ 
โฃ โ ๐ _${usedPrefix}link_
โฃ โ ๐ _${usedPrefix}notificar *texto*_
โฃ โ ๐ _${usedPrefix}setname *Nuevo nombre del grupo*_
โฃ โ ๐ _${usedPrefix}setdesc *Nueva descripciรณn grupo*_
โฃ โ ๐ _${usedPrefix}infogrupo_
โฃ โ ๐ _${usedPrefix}invocar *texto*_
โฃ โ ๐ _${usedPrefix}del *responder a un mensaje del bot*_
โฃ โ ๐ _${usedPrefix}fantasmas_
โฃ โ ๐ _${usedPrefix}banchat_
โฃ โ ๐ _${usedPrefix}unbanchat_
โฃ โ ๐จ _${usedPrefix}s_
โฃ โ ๐จ _${usedPrefix}sticker_
โฃ โ ๐จ _${usedPrefix}semoji_
โฃ โ ๐จ _${usedPrefix}wasted_
โฃ โ ๐จ _${usedPrefix}stonks_
โฃ โ ๐จ _${usedPrefix}trash_
โฃ โ ๐จ _${usedPrefix}rainbow_
โฃ โ ๐จ _${usedPrefix}circle_
โฃ โ ๐จ _${usedPrefix}stickermaker_
โฃ โ ๐จ _${usedPrefix}attp *texto*_
โฃ โ ๐จ _${usedPrefix}style *texto*_
โฃ โ ๐จ _${usedPrefix}attp2 *texto*_
โฃ โ ๐จ _${usedPrefix}stickerfilter_
โฃ โ ๐จ _${usedPrefix}mp3 *responde a un video*_
โฃ โ ๐จ _${usedPrefix}img *responde a un sticker*_
โฃ โ ๐จ _${usedPrefix}blur *responde a una imagen*_
โฃ โ ๐จ _${usedPrefix}swm *link de imagen de google*_
โฃ โ ๐จ _${usedPrefix}gif *responde a un sticker/video*_
โฃ โ ๐จ _${usedPrefix}tovideo *responde a una nota de voz*_
โฃ โ ๐ณ _${usedPrefix}futbol_
โฃ โ ๐ฏ _${usedPrefix}Messi_
โฃ โ ๐ฒ _${usedPrefix}animal_
โฃ โ ๐ณ _${usedPrefix}meme_
โฃ โ ๐ฏ _${usedPrefix}meme2_
โฃ โ ๐ฒ _${usedPrefix}meme3_
โฃ โ ๐ณ _${usedPrefix}cat_
โฃ โ ๐ฏ _${usedPrefix}dog_
โฃ โ ๐ฒ _${usedPrefix}pikachu_
โฃ โ ๐ณ _${usedPrefix}waifu_
โฃ โ ๐ฏ _${usedPrefix}blackpink_
โฃ โ ๐ฒ _${usedPrefix}reto_
โฃ โ ๐ณ _${usedPrefix}verdad_
โฃ โ ๐ฏ _${usedPrefix}imagenrandom_
โฃ โ ๐ฒ _${usedPrefix}neko_
โฃ โ ๐ณ _${usedPrefix}lolivid_
โฃ โ ๐ฏ _${usedPrefix}iqtest_
โฃ โ ๐ฒ _${usedPrefix}kpopitzy_
โฃ โ ๐ณ _${usedPrefix}navidad_
โฃ โ ๐ฏ _${usedPrefix}loli_
โฃ โ ๐ฒ _${usedPrefix}gawrgura_
โฃ โ ๐ณ _${usedPrefix}miku_
โฃ โ ๐ฏ _${usedPrefix}nyan_
โฃ โ ๐ฒ _${usedPrefix}pat_
โฃ โ ๐ณ _${usedPrefix}itachi_
โฃ โ ๐ฏ _${usedPrefix}slap_
โฃ โ ๐ฒ _${usedPrefix}pat_
โฃ โ ๐ณ _${usedPrefix}perfil_
โฃ โ ๐ฏ _${usedPrefix}scan_
โฃ โ ๐ฒ _${usedPrefix}kpop_
โฃ โ ๐ณ _${usedPrefix}qr *texto*_
โฃ โ ๐ฏ _${usedPrefix}afk *motivo*_
โฃ โ ๐ฒ _${usedPrefix}CristianoRonaldo_
โฃ โ ๐ณ _${usedPrefix}pregunta *pregunta*_
โฃ โ ๐ฏ _${usedPrefix}mention *texto*_
โฃ โ ๐ฒ _${usedPrefix}spamchat *texto*_
โฃ โ ๐ณ _${usedPrefix}traducir es *texto*_
โฃ โ ๐ฏ _${usedPrefix}zodiac *AAAA MM DD*_
โฃ โ ๐ฒ _${usedPrefix}readmore *texto1| texto2*_
โฃ โ ๐ณ _${usedPrefix}calc *expresiรณn matemรกtica*_ 
โฃ โ ๐ฏ _${usedPrefix}spamwa *numero|texto|cantidad*_
โฃ โ ๐ฒ _${usedPrefix}readqr *responde a un cรณdigo QR*_
โฃ โ ๐ณ _${usedPrefix}anime *random / waifu / husbu /neko*_
โฃ โ ๐ฏ _${usedPrefix}subirestado *texto / responder video|imagen|gif*_
โฃ โ ๐ _${usedPrefix}labiblia_
โฃ โ ๐ค _${usedPrefix}bass_
โฃ โ ๐ค _${usedPrefix}deep_
โฃ โ ๐ค _${usedPrefix}earrape_
โฃ โ ๐ค _${usedPrefix}fast_
โฃ โ ๐ค _${usedPrefix}fat_
โฃ โ ๐ค _${usedPrefix}nightcore_
โฃ โ ๐ค _${usedPrefix}reverse_
โฃ โ ๐ค _${usedPrefix}robot_
โฃ โ ๐ค _${usedPrefix}slow_
โฃ โ ๐ค _${usedPrefix}smooth_
โฃ โ ๐ค _${usedPrefix}vibracion *cantidad*_
โฃ โ ๐ _${usedPrefix}menu2_
โฃ โ ๐ _${usedPrefix}menuaudios_
โฃ โ ๐ _${usedPrefix}audios_
โฃ โ ๐ฆ _${usedPrefix}caja_
โฃ โ ๐ฆ _${usedPrefix}almacen_
โฃ โ ๐ฆ _${usedPrefix}cjalmacen_
โฃ โ ๐ค _${usedPrefix}chatanonimo | anonimochat_
โฃ โ ๐ค _${usedPrefix}anonimoch_
โฃ โ ๐ค _${usedPrefix}start_
โฃ โ ๐ค _${usedPrefix}next_
โฃ โ ๐ค _${usedPrefix}leave_
โฃ โ โ๏ธ _${usedPrefix}stop_
โฃ โ โ๏ธ _${usedPrefix}jadibot_
โฃ โ โ๏ธ _${usedPrefix}getcode_
โฃ โ ๐ช _${usedPrefix}lolice_
โฃ โ ๐ _${usedPrefix}simpcard_
โฃ โ ๐ช _${usedPrefix}hornycard_ 
โฃ โ ๐ _${usedPrefix}lblackpink_
โฃ โ ๐ช _${usedPrefix}logocorazon_
โฃ โ ๐ _${usedPrefix}tahta *texto*_
โฃ โ ๐ช _${usedPrefix}nulis *texto*_
โฃ โ ๐ _${usedPrefix}nulis2 *texto*_
โฃ โ ๐ช _${usedPrefix}lolice *@tag*_
โฃ โ ๐ช _${usedPrefix}simpcard *@tag*_
โฃ โ ๐ฎ _${usedPrefix}logos_ (lista)
โฃ โ ๐ _${usedPrefix}boost_
โฃ โ ๐ _${usedPrefix}restart_
โฃ โ ๐ _${usedPrefix}banlist_
โฃ โ ๐ _${usedPrefix}virtext1_
โฃ โ ๐ _${usedPrefix}actualizar_
โฃ โ ๐ _${usedPrefix}bc *texto*_
โฃ โ ๐ _${usedPrefix}bcgc *texto*_
โฃ โ ๐ _${usedPrefix}bcbot *texto*_
โฃ โ ๐ _${usedPrefix}setbye *@tag*_
โฃ โ ๐ _${usedPrefix}banuser *@tag*_
โฃ โ ๐ _${usedPrefix}enable *public*_
โฃ โ ๐ _${usedPrefix}disable *public*_
โฃ โ ๐ _${usedPrefix}unbanuser *@tag*_
โฃ โ ๐ _${usedPrefix}listgroup *@tag*_
โฃ โ ๐ _${usedPrefix}enable *restrict*_
โฃ โ ๐ _${usedPrefix}enable *autoread*_
โฃ โ ๐ _${usedPrefix}setwelcome *@tag*_
โฃ โ ๐ _${usedPrefix}enable *autoread*_
โฃ โ ๐ _${usedPrefix}disable *autoread*_
โโโโโโโโโโโโโโโโโโโโ
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menusimple']
handler.tags = ['General']
handler.command = /^(menusimple)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
