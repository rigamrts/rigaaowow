/*
 maps.js version 294
 changed /?maps to ?maps in ma_UpdateLink()
*/
var myMapper;
function ma_Init() {
	ma_AddOptions(ge("maps-ek"), [1, 3, 4, 8, 10, 11, 12, 28, 33, 36, 38, 40, 41, 44, 45, 46, 47, 51, 85, 130, 139, 267, 1497, 1519, 1537, 3430, 3433, 3487, 4080, 4298]);
	ma_AddOptions(ge("maps-kalimdor"), [14, 15, 16, 17, 141, 148, 215, 331, 357, 361, 400, 405, 406, 440, 490, 493, 618, 1377, 1637, 1638, 1657, 3524, 3525, 3557]);
	ma_AddOptions(ge("maps-outland"), [3483, 3518, 3519, 3520, 3521, 3522, 3523, 3703]);
	ma_AddOptions(ge("maps-northrend"), [65, 66, 67, 210, 394, 495, 2817, 3537, 3711, 4197, 4395, 4742])
	ma_AddOptions(ge("maps-dungeons"), ["206-1", "206-2", "206-3", "209-1", "209-2", "209-3", "209-4", "209-5", "209-6", "209-7", 491, 717, 718, "719-1", "719-2", "719-3", "721-1", "721-2", "721-3", "721-4", 722, "796-1", "796-2", "796-3", "796-4", 978, "1196-1", "1196-2", "1337-1", "1337-2", 1417, "1581-1", "1581-2", "1583-1", "1583-2", "1583-3", "1583-4", "1583-5", "1583-6", "1583-7", "1584-1", "1584-2", "2017-1", "2017-2", "2057-1", "2057-2", "2057-3", "2057-4", "2100-1", "2100-2", 2366, 2367, 2437, "2557-1", "2557-2", "2557-3", "2557-4", "2557-5", "2557-6", 3562, 3713, 3714, 3715, 3716, 3717, 3789, 3790, 3791, 3792, 3846, 3847, 3849, 4095, "4100-1", "4100-2", "4196-1", "4196-2", 4415, "4228-1", "4228-2", "4228-3", "4228-4", 4264, 4265, "4272-1", "4272-2", "4277-1", "4277-2", "4277-3", "4416-1", "4416-2", "4494-1", "4494-2", "4723-1", "4723-2", 4809, 4813, 4820]);
	ma_AddOptions(ge("maps-raids"), [19, 2159, "2677-1", "2677-2", "2677-3", "2677-4", 2717, "3428-1", "3428-2", "3428-3", 3429, "3456-1", "3456-2", "3456-3", "3456-4", "3456-5", "3456-6", 3457, 3606, 3607, 3618, 3805, 3836, 3842, 3959, 4075, "4273-0", "4273-1", "4273-2", "4273-3", "4273-4", "4273-5", 4493, 4500, 4603, "4722-1", "4722-2", "4812-1", "4812-2", "4812-3", "4812-4",  "4812-5",  "4812-6", "4812-7", "4812-8", 4987]);
	ma_AddOptions(ge("maps-battlegrounds"), [2597, 3277, 4384, 3358, 3820, 4710]);
	myMapper = new Mapper({
		parent: "dbs3b53",
		editable: true,
		zoom: 1,
		onPinUpdate: ma_UpdateLink,
		onMapUpdate: ma_UpdateLink
	});
	var a = location.href.indexOf("maps=");
	if (a != -1) {
		a = location.href.substr(a + 5);
		if (myMapper.setLink(a)) {
			ge("mapper").style.display = ""
		}
	}
}
function ma_AddOptions(c, b) {
	b.sort(ma_Sort);
	array_apply(b, function (a) {
		var d = ce("option");
		d.value = a;
		ae(d, ct(g_zones[typeof a == "string" ? parseInt(a) : a]));
		ae(c, d)
	})
}
function ma_Sort(d, c) {
	if (typeof d == "string") {
		d = parseInt(d)
	}
	if (typeof c == "string") {
		c = parseInt(c)
	}
	return strcmp(g_zones[d], g_zones[c])
}
function ma_ChooseZone(a) {
	if (a.value && a.value != "0") {
		if (myMapper.getZone() == 0) {
			ge("mapper").style.display = ""
		}
		myMapper.setZone(a.value)
	}
	a.selectedIndex = 0
}
function ma_UpdateLink(d) {
	var a = "?maps",
	c = d.getLink();
	if (c) {
		a += "=" + c
	}
	ge("link-to-this-map").href = a
};