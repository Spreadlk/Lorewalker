(function(_0x4312b5,_0x2f618c){function _0x335cbd(_0x390e8c,_0x643f58){return _0x7814(_0x390e8c-0x24,_0x643f58);}const _0x18539a=_0x4312b5();while(!![]){try{const _0xe1c454=parseInt(_0x335cbd(0xf2,0xf5))/0x1+-parseInt(_0x335cbd(0xf5,0x100))/0x2*(parseInt(_0x335cbd(0xf3,0xf1))/0x3)+parseInt(_0x335cbd(0xdb,0xd3))/0x4*(-parseInt(_0x335cbd(0xe3,0xeb))/0x5)+parseInt(_0x335cbd(0xf6,0xf5))/0x6*(parseInt(_0x335cbd(0xf1,0xe7))/0x7)+-parseInt(_0x335cbd(0xd8,0xd6))/0x8+parseInt(_0x335cbd(0xf7,0xee))/0x9+-parseInt(_0x335cbd(0xea,0xdc))/0xa;if(_0xe1c454===_0x2f618c)break;else _0x18539a['push'](_0x18539a['shift']());}catch(_0x96c502){_0x18539a['push'](_0x18539a['shift']());}}}(_0x306d,0x2a0c1));const {SlashCommandBuilder,EmbedBuilder}=require(_0x19bf97(0x2a,0x28)),User=require(_0x19bf97(0x27,0x29));function _0x7814(_0x46ac06,_0x5d5c39){const _0x306d37=_0x306d();return _0x7814=function(_0x7814ac,_0x4c7f2a){_0x7814ac=_0x7814ac-0xb3;let _0x2b9073=_0x306d37[_0x7814ac];return _0x2b9073;},_0x7814(_0x46ac06,_0x5d5c39);}function _0x306d(){const _0x52950e=['Amount\x20to\x20withdraw','setColor','50qEdroX','setDescription','withdraw','save','amount','Economy','bank','1161870qKMOkO','readFileSync','setRequired','#00FF00','./config.yml','options','js-yaml','1691501NHarbh','145137ssLDRR','3KorEMC','utf8','1594RUjKXe','6aqvIMu','1673352osCRRj','../../../models/UserData','setName','./lang.yml','discord.js','replace','addIntegerOption','2202152GbSLmb','getInteger','reply','3292jPOngI','{coins}','withdrawNoMoney','load','exports','#FF0000'];_0x306d=function(){return _0x52950e;};return _0x306d();}function _0x19bf97(_0x157410,_0x16efaf){return _0x7814(_0x157410- -0xad,_0x16efaf);}const fs=require('fs'),yaml=require(_0x19bf97(0x1f,0x1b)),config=yaml[_0x19bf97(0xd,0x15)](fs[_0x19bf97(0x1a,0xb)](_0x19bf97(0x1d,0x1d),_0x19bf97(0x23,0x2c))),lang=yaml[_0x19bf97(0xd,-0x3)](fs[_0x19bf97(0x1a,0x27)](_0x19bf97(0x29,0x20),_0x19bf97(0x23,0x23)));module[_0x19bf97(0xe,0x6)]={'data':new SlashCommandBuilder()[_0x19bf97(0x28,0x21)](_0x19bf97(0x14,0x4))[_0x19bf97(0x13,0x12)]('Withdraw\x20coins\x20from\x20the\x20bank')[_0x19bf97(0x6,0x9)](_0x259de1=>_0x259de1['setName'](_0x19bf97(0x16,0x23))[_0x19bf97(0x13,0x1)](_0x19bf97(0x10,0x12))[_0x19bf97(0x1b,0xa)](!![])),async 'execute'(_0x28d342){const _0x42f45b=_0x28d342[_0x2c178c(0x24c,0x23e)][_0x2c178c(0x236,0x23b)]('amount'),_0x61b24b=await User['findOne']({'userId':_0x28d342['user']['id'],'guildId':_0x28d342['guild']['id']});if(!_0x61b24b||_0x61b24b[_0x2c178c(0x246,0x241)]<_0x42f45b){const _0x522839=new EmbedBuilder()[_0x2c178c(0x241,0x252)](lang[_0x2c178c(0x245,0x245)][_0x2c178c(0x23a,0x24b)])[_0x2c178c(0x23f,0x234)](_0x2c178c(0x23d,0x23f));return _0x28d342[_0x2c178c(0x237,0x244)]({'embeds':[_0x522839]});}_0x61b24b[_0x2c178c(0x246,0x24b)]-=_0x42f45b,_0x61b24b['balance']+=_0x42f45b,await _0x61b24b[_0x2c178c(0x243,0x255)]();const _0x216229=new EmbedBuilder()[_0x2c178c(0x241,0x24e)](lang[_0x2c178c(0x245,0x237)][_0x2c178c(0x242,0x236)][_0x2c178c(0x259,0x25d)](_0x2c178c(0x239,0x244),_0x42f45b))[_0x2c178c(0x23f,0x24b)](_0x2c178c(0x24a,0x25c));function _0x2c178c(_0x3878b7,_0x33a969){return _0x19bf97(_0x3878b7-0x22e,_0x33a969);}return _0x28d342[_0x2c178c(0x237,0x22a)]({'embeds':[_0x216229]});}};