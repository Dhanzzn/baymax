const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

exports.allmenu = (ucapanWaktu, sender, mundur, ownerName, botName, jam, tanggal, runtime, pushname, prefix) => {
	return `${ucapanWaktu}

*ROAD TO NEW YEARS*
 ${mundur}

*INFO-BOT*
👑 Creator : ${ownerName}
🤖 Bot Name : ${botName}
⏰ Time : ${jam}
📆 Date : ${tanggal}
⏳ Runtime :
 ${runtime(process.uptime())}
${readmore}
*MAIN MENU*
 › ${prefix}menu
 › ${prefix}statistic
 › ${prefix}runtime
 › ${prefix}speed
 › ${prefix}owner
 › ${prefix}donate
 › ${prefix}sewabot

*TOOLS MENU*
 › ${prefix}sticker
 › ${prefix}stickerwm
 › ${prefix}toimg
 › ${prefix}tovideo
 › ${prefix}toaudio
 › ${prefix}attp
 › ${prefix}ttp
 › ${prefix}semoji
 › ${prefix}emojimix
 › ${prefix}nulis
 › ${prefix}listbahasa
 › ${prefix}translate

*STORE MENU*
 › ${prefix}list
 › ${prefix}addlist
 › ${prefix}dellist
 › ${prefix}update
 › ${prefix}resetlist
 › ${prefix}jeda

*KALKULATOR*
 › ${prefix}tambah
 › ${prefix}kurang
 › ${prefix}kali
 › ${prefix}bagi

*PROSES & DONE*
 › proses
 › done
 › ${prefix}setproses
 › ${prefix}changeproses
 › ${prefix}delsetproses
 › ${prefix}setdone
 › ${prefix}changedone
 › ${prefix}delsetdone

*OPEN & CLOSE*
 › ${prefix}open
 › ${prefix}close
 › ${prefix}setopen
 › ${prefix}changeopen
 › ${prefix}delsetopen
 › ${prefix}setclose
 › ${prefix}changeclose
 › ${prefix}delsetclose

*CEK NICK GAME MENU*
 › ${prefix}stalkml
 › ${prefix}stalkff
 › ${prefix}stalkgenshin
 › ${prefix}stalkcod
 › ${prefix}stalkdomino
 › ${prefix}stalkpubg
 › ${prefix}stalksausage

*GROUP MENU*
 › ${prefix}welcome
 › ${prefix}left
 › ${prefix}setwelcome
 › ${prefix}changewelcome
 › ${prefix}delsetwelcome
 › ${prefix}setleft
 › ${prefix}changeleft
 › ${prefix}delsetleft
 › ${prefix}linkgroup
 › ${prefix}setppgroup
 › ${prefix}setnamegroup
 › ${prefix}setdescription
 › ${prefix}antilink
 › ${prefix}antiwame
 › ${prefix}add
 › ${prefix}kick
 › ${prefix}promote
 › ${prefix}demote
 › ${prefix}revoke
 › ${prefix}hidetag
 › ${prefix}tagall
 › ${prefix}delete
 › ${prefix}checksewa

*BAILEYS*
 › ${prefix}fitnah
 › ${prefix}quoted
 › ${prefix}fakehidetag
 › ${prefix}react
 › ${prefix}setcmd
 › ${prefix}delcmd

*OWNER MENU*
 › ${prefix}exif
 › ${prefix}join
 › ${prefix}leave
 › ${prefix}self
 › ${prefix}public
 › ${prefix}setprefix
 › ${prefix}setppbot
 › ${prefix}setthumb
 › ${prefix}setdonasi
 › ${prefix}broadcast
 › ${prefix}bcsewa
 › ${prefix}addsewa
 › ${prefix}delsewa
 › ${prefix}listsewa
`
}

exports.donate = (pushname, ownerNumber, sender) => {
    return`Hai @${sender.split('@')[0]} 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi scan qris diatas

*DONASI BOT*

*DANA/OVO/LINKAJA/SHOPEEPAY*
*085155088506*
_A/N FERDI ANANDA_

_Bagi Yang Ingin Berdonasi Dipersilahkan_
_Berapapun Nominalnya Pasti Saya Terima_

_Hasil Donasi Akan Saya Gunakan Untuk Kebutuhan Bot, Agar Bot Terus Berjalan Dengan Lancar_

*Terimakasih Buat Kalian Yang Sudah Berdonasi*

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!`
}

exports.sewaBot = (prefix) => {
    return`*PRICE LIST SEWABOT*

IDR : 7.000
EXPIRED : 1 MINGGU

IDR : 10.000
EXPIRED : 1 BULAN

IDR : 15.000
EXPIRED : PERMANENT

Untuk Lebih Lanjut Silahkan Klik Dibawah`
}
