!function(){function n(n,r){var c=n[0],f=n[1],i=n[2],a=n[3];c=t(c,f,i,a,r[0],7,-680876936),a=t(a,c,f,i,r[1],12,-389564586),i=t(i,a,c,f,r[2],17,606105819),f=t(f,i,a,c,r[3],22,-1044525330),c=t(c,f,i,a,r[4],7,-176418897),a=t(a,c,f,i,r[5],12,1200080426),i=t(i,a,c,f,r[6],17,-1473231341),f=t(f,i,a,c,r[7],22,-45705983),c=t(c,f,i,a,r[8],7,1770035416),a=t(a,c,f,i,r[9],12,-1958414417),i=t(i,a,c,f,r[10],17,-42063),f=t(f,i,a,c,r[11],22,-1990404162),c=t(c,f,i,a,r[12],7,1804603682),a=t(a,c,f,i,r[13],12,-40341101),i=t(i,a,c,f,r[14],17,-1502002290),f=t(f,i,a,c,r[15],22,1236535329),c=u(c,f,i,a,r[1],5,-165796510),a=u(a,c,f,i,r[6],9,-1069501632),i=u(i,a,c,f,r[11],14,643717713),f=u(f,i,a,c,r[0],20,-373897302),c=u(c,f,i,a,r[5],5,-701558691),a=u(a,c,f,i,r[10],9,38016083),i=u(i,a,c,f,r[15],14,-660478335),f=u(f,i,a,c,r[4],20,-405537848),c=u(c,f,i,a,r[9],5,568446438),a=u(a,c,f,i,r[14],9,-1019803690),i=u(i,a,c,f,r[3],14,-187363961),f=u(f,i,a,c,r[8],20,1163531501),c=u(c,f,i,a,r[13],5,-1444681467),a=u(a,c,f,i,r[2],9,-51403784),i=u(i,a,c,f,r[7],14,1735328473),f=u(f,i,a,c,r[12],20,-1926607734),c=o(c,f,i,a,r[5],4,-378558),a=o(a,c,f,i,r[8],11,-2022574463),i=o(i,a,c,f,r[11],16,1839030562),f=o(f,i,a,c,r[14],23,-35309556),c=o(c,f,i,a,r[1],4,-1530992060),a=o(a,c,f,i,r[4],11,1272893353),i=o(i,a,c,f,r[7],16,-155497632),f=o(f,i,a,c,r[10],23,-1094730640),c=o(c,f,i,a,r[13],4,681279174),a=o(a,c,f,i,r[0],11,-358537222),i=o(i,a,c,f,r[3],16,-722521979),f=o(f,i,a,c,r[6],23,76029189),c=o(c,f,i,a,r[9],4,-640364487),a=o(a,c,f,i,r[12],11,-421815835),i=o(i,a,c,f,r[15],16,530742520),f=o(f,i,a,c,r[2],23,-995338651),c=e(c,f,i,a,r[0],6,-198630844),a=e(a,c,f,i,r[7],10,1126891415),i=e(i,a,c,f,r[14],15,-1416354905),f=e(f,i,a,c,r[5],21,-57434055),c=e(c,f,i,a,r[12],6,1700485571),a=e(a,c,f,i,r[3],10,-1894986606),i=e(i,a,c,f,r[10],15,-1051523),f=e(f,i,a,c,r[1],21,-2054922799),c=e(c,f,i,a,r[8],6,1873313359),a=e(a,c,f,i,r[15],10,-30611744),i=e(i,a,c,f,r[6],15,-1560198380),f=e(f,i,a,c,r[13],21,1309151649),c=e(c,f,i,a,r[4],6,-145523070),a=e(a,c,f,i,r[11],10,-1120210379),i=e(i,a,c,f,r[2],15,718787259),f=e(f,i,a,c,r[9],21,-343485551),n[0]=h(c,n[0]),n[1]=h(f,n[1]),n[2]=h(i,n[2]),n[3]=h(a,n[3])}function r(n,r,t,u,o,e){return r=h(h(r,n),h(u,e)),h(r<<o|r>>>32-o,t)}function t(n,t,u,o,e,c,f){return r(t&u|~t&o,n,t,e,c,f)}function u(n,t,u,o,e,c,f){return r(t&o|u&~o,n,t,e,c,f)}function o(n,t,u,o,e,c,f){return r(t^u^o,n,t,e,c,f)}function e(n,t,u,o,e,c,f){return r(u^(t|~o),n,t,e,c,f)}function c(r){txt="";var t,u=r.length,o=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=r.length;t+=64)n(o,f(r.substring(t-64,t)));r=r.substring(t-64);var e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<r.length;t++)e[t>>2]|=r.charCodeAt(t)<<(t%4<<3);if(e[t>>2]|=128<<(t%4<<3),t>55)for(n(o,e),t=0;16>t;t++)e[t]=0;return e[14]=8*u,n(o,e),o}function f(n){var r,t=[];for(r=0;64>r;r+=4)t[r>>2]=n.charCodeAt(r)+(n.charCodeAt(r+1)<<8)+(n.charCodeAt(r+2)<<16)+(n.charCodeAt(r+3)<<24);return t}function i(n){for(var r="",t=0;4>t;t++)r+=d[n>>8*t+4&15]+d[n>>8*t&15];return r}function a(n){for(var r=0;r<n.length;r++)n[r]=i(n[r]);return n.join("")}function h(n,r){return n+r&4294967295}function h(n,r){var t=(65535&n)+(65535&r),u=(n>>16)+(r>>16)+(t>>16);return u<<16|65535&t}var d="0123456789abcdef".split("");Math.md5=function(n){return a(c(n))},"5d41402abc4b2a76b9719d911017c592"!=Math.md5("hello")}();

var config = {
	db:{
		host:'localhost',
		username:'',
		password:'',
		db: ''
	},

	sendError: function(res, code, mess, st){
		res.status(st);
		res.json({
			error:{
				code: code,
				message: mess
			}
		});
		res.end();
	},

	checkParams: function(base, params){
		for(var p in base){
			if(!params[base[p]]) return {
				success: false,
				field: base[p]
			};
		}
		return {
			success: true
		};
	}
};

module.exports = config;