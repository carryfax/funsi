let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    let c
    do c = ps[Fl(R() * ps.length)]
    while (b === a)
    let d
    do d = ps[Fl(R() * ps.length)]
    while (b === a)
    let e
    do e = ps[Fl(R() * ps.length)]
    while (b === a)
    let f
    do f = ps[Fl(R() * ps.length)]
    while (b === a)
    let g
    do g = ps[Fl(R() * ps.length)]
    while (b === a)
    let h
    do h = ps[Fl(R() * ps.length)]
    while (b === a)
    let i
    do i = ps[Fl(R() * ps.length)]
    while (b === a)
    let j
    do j = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`*_π Las 5 maravillosas parejas del grupo π_*
    
*_1.- ${toM(a)} π ${toM(b)}_* 
Que hermosa pareja π, me invitan a su Boda π

*_2.- ${toM(c)} π ${toM(d)}_*  
πΉ Ustedes se merecen lo mejor del mundo π

*_3.- ${toM(e)} π ${toM(f)}_* 
Tan enamorados π, para cuando la familia π₯°

*_4.- ${toM(g)} π ${toM(h)}_* 
π Decreto que ustedes son la pareja del AΓ±o π

*_5.- ${toM(i)} π ${toM(j)}_* 
Genial! π, estΓ‘n de Luna de miel π₯΅β¨β€οΈβπ₯`, null, {
        contextInfo: {
            mentionedJid: [a, b, c, d, e, f, g, h, i, j]
        }
    })
}
handler.help = ['formarpareja5']
handler.tags = ['main']
handler.command = ['formarparejas5','pareja5','formarpareja5']
handler.group = true

module.exports = handler
