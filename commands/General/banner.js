(function(_0x2adca3,_0x181aa9){const _0x53e4f6=_0x2adca3();function _0x39ffe3(_0x2def20,_0x2db11f){return _0x4a81(_0x2def20-0x1a2,_0x2db11f);}while(!![]){try{const _0x4fa0d8=parseInt(_0x39ffe3(0x317,0x329))/0x1+parseInt(_0x39ffe3(0x300,0x313))/0x2*(parseInt(_0x39ffe3(0x307,0x2f4))/0x3)+-parseInt(_0x39ffe3(0x311,0x306))/0x4*(-parseInt(_0x39ffe3(0x2fe,0x30e))/0x5)+-parseInt(_0x39ffe3(0x30f,0x318))/0x6*(-parseInt(_0x39ffe3(0x2ff,0x302))/0x7)+-parseInt(_0x39ffe3(0x310,0x314))/0x8*(-parseInt(_0x39ffe3(0x305,0x306))/0x9)+parseInt(_0x39ffe3(0x301,0x30d))/0xa*(parseInt(_0x39ffe3(0x30b,0x2fc))/0xb)+-parseInt(_0x39ffe3(0x2fd,0x2eb))/0xc;if(_0x4fa0d8===_0x181aa9)break;else _0x53e4f6['push'](_0x53e4f6['shift']());}catch(_0xb6790f){_0x53e4f6['push'](_0x53e4f6['shift']());}}}(_0x30cd,0x80083));const {SlashCommandBuilder,EmbedBuilder}=require(_0x5ad3c4(0x51d,0x50c)),fs=require('fs'),yaml=require('js-yaml'),config=yaml['load'](fs[_0x5ad3c4(0x4fe,0x50f)]('./config.yml',_0x5ad3c4(0x520,0x521)));function _0x30cd(){const _0x3f3407=['584493lVDwUr','utf8','reply','setDescription','BannerSearchedBy','The\x20user\x20to\x20get\x20the\x20banner\x20from','options','getUser','load','exports','user','EmbedColors','25362648zocbrX','10covyuV','193004GQeyHq','1222dUTGMB','8200DFRGrm','username','discord.js','Sorry,\x20there\x20was\x20an\x20error\x20processing\x20your\x20request.','72ICbKKc','readFileSync','3018lgzRWN','setRequired','NoBannerSet','Get\x20a\x20user\x27s\x20banner','6787hxQbJy','fetch','BannerClickHere','setColor','24xaPFqe','765264mhwryA','114644uGoDLU','setFooter','\x27s\x20Banner','setName','Error\x20in\x20banner\x20command:\x20','client'];_0x30cd=function(){return _0x3f3407;};return _0x30cd();}function _0x5ad3c4(_0x5e0b5e,_0x593843){return _0x4a81(_0x593843-0x3ab,_0x5e0b5e);}function _0x4a81(_0x397b77,_0x43b25f){const _0x30cd98=_0x30cd();return _0x4a81=function(_0x4a8104,_0x50d126){_0x4a8104=_0x4a8104-0x158;let _0x224280=_0x30cd98[_0x4a8104];return _0x224280;},_0x4a81(_0x397b77,_0x43b25f);}const lang=yaml[_0x5ad3c4(0x529,0x528)](fs[_0x5ad3c4(0x510,0x50f)]('./lang.yml',_0x5ad3c4(0x527,0x521)));module[_0x5ad3c4(0x4fb,0x503)]={'data':new SlashCommandBuilder()[_0x5ad3c4(0x524,0x51d)]('banner')[_0x5ad3c4(0x513,0x523)](_0x5ad3c4(0x525,0x513))['addUserOption'](_0x3e9240=>_0x3e9240[_0x5ad3c4(0x511,0x51d)]('user')[_0x5ad3c4(0x511,0x523)](_0x5ad3c4(0x514,0x525))[_0x5ad3c4(0x4ff,0x511)](![])),async 'execute'(_0x8710db){function _0x3ec943(_0x23c1ef,_0x2ee5bb){return _0x5ad3c4(_0x23c1ef,_0x2ee5bb- -0x546);}try{const _0x499eb2=_0x8710db[_0x3ec943(-0x2e,-0x20)][_0x3ec943(-0x10,-0x1f)](_0x3ec943(-0x4a,-0x42))||_0x8710db[_0x3ec943(-0x33,-0x42)],_0x376fc9=await _0x8710db[_0x3ec943(-0x17,-0x27)]['users'][_0x3ec943(-0x2c,-0x31)](_0x499eb2['id'],{'force':!![]}),_0xd4b977=_0x376fc9['bannerURL']({'format':'png','dynamic':!![],'size':0x400});if(_0xd4b977){const _0x47a380=new EmbedBuilder()['setImage'](_0xd4b977)[_0x3ec943(-0x2f,-0x2f)](config[_0x3ec943(-0x31,-0x41)])['setTitle'](_0x376fc9[_0x3ec943(-0x46,-0x3b)]+_0x3ec943(-0x2b,-0x2a))[_0x3ec943(-0x25,-0x2b)]({'text':lang[_0x3ec943(-0x28,-0x22)]+'\x20'+_0x8710db[_0x3ec943(-0x3a,-0x42)][_0x3ec943(-0x3f,-0x3b)]})[_0x3ec943(-0x36,-0x23)]('['+lang[_0x3ec943(-0x23,-0x30)]+']('+_0xd4b977+')');await _0x8710db['reply']({'embeds':[_0x47a380]});}else await _0x8710db[_0x3ec943(-0x28,-0x24)]({'content':lang[_0x3ec943(-0x26,-0x34)],'ephemeral':!![]});}catch(_0x298ce1){console['error'](_0x3ec943(-0x15,-0x28),_0x298ce1),await _0x8710db['reply']({'content':_0x3ec943(-0x4c,-0x39),'ephemeral':!![]});}}};