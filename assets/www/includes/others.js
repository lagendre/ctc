

/* 縣市群組名稱 */
CityList = new Array("縣市名稱", "基隆市", "台北市", "新北市", "桃園縣", "新竹市", "新竹縣", "苗栗縣", "台中市", "彰化縣", "雲林縣", "南投縣", "嘉義市", "嘉義縣", "台南市", "高雄市", "屏東縣", "屏東縣琉球鄉離島", "宜蘭縣", "花蓮縣", "台東縣", "台東縣綠島、蘭嶼", "澎湖縣", "連江縣", "金門縣", "南海諸島", "釣魚台列嶼");

/* 縣市群組代碼 */
CityCode = new Array("", "002", "001", "003", "007", "005", "006", "008", "009", "011", "015", "012", "013", "014", "016", "018", "020", "028", "004", "022", "021", "029", "023", "025", "024", "026", "027");

/* 鄉鎮市名稱、郵遞區號 */
ZipList = new Array(27);
ZipCode = new Array(27);

ZipList[0] = new Array("鄉鎮名稱");
ZipCode[0] = new Array("");
ZipList[1] = new Array("---------------", "七堵區", "中山區", "中正區", "仁愛區", "安樂區", "信義區", "暖暖區");
ZipCode[1] = new Array("", "206", "203", "202", "200", "204", "201", "205");

ZipList[2] = new Array("---------------", "士林區", "大同區", "大安區", "中山區", "中正區", "內湖區", "文山區", "北投區", "松山區", "信義區", "南港區", "萬華區");
ZipCode[2] = new Array("", "111", "103", "106", "104", "100", "114", "116", "112", "105", "110", "115", "108");

ZipList[3] = new Array("---------------", "八里區", "三芝區", "三重區", "三峽區", "土城區", "中和區", "五股區", "平溪區", "永和區", "石門區", "石碇區", "汐止區", "坪林區", "林口區", "板橋區", "金山區", "泰山區", "烏來區", "貢寮區", "淡水區", "深坑區", "新店區", "新莊區", "瑞芳區", "萬里區", "樹林區", "雙溪區", "蘆洲區", "鶯歌區");
ZipCode[3] = new Array("", "249", "252", "241", "237", "236", "235", "248", "226", "234", "253", "223", "221", "232", "244", "220", "208", "243", "233", "228", "251", "222", "231", "242", "224", "207", "238", "227", "247", "239");

ZipList[4] = new Array("---------------", "八德市", "大園鄉", "大溪鎮", "中壢市", "平鎮市", "桃園市", "復興鄉", "新屋鄉", "楊梅鎮", "龍潭鄉", "龜山鄉", "蘆竹鄉", "觀音鄉");
ZipCode[4] = new Array("", "334", "337", "335", "320", "324", "330", "336", "327", "326", "325", "333", "338", "328");

ZipList[5] = new Array("---------------", "");
ZipCode[5] = new Array("", "300");

ZipList[6] = new Array("---------------", "五峰鄉", "北埔鄉", "尖石鄉", "竹北市", "竹東鎮", "峨眉鄉", "湖口鄉", "新埔鎮", "新豐鄉", "橫山鄉", "關西鎮", "寶山鄉", "芎林鄉");
ZipCode[6] = new Array("", "311", "314", "313", "302", "310", "315", "303", "305", "304", "312", "306", "308", "307");

ZipList[7] = new Array("---------------", "三義鄉", "三灣鄉", "大湖鄉", "公館鄉", "竹南鎮", "西湖鄉", "卓蘭鎮", "南庄鄉", "後龍鎮", "苗栗市", "苑裡鎮", "泰安鄉", "通霄鎮", "造橋鄉", "獅潭鄉", "銅鑼鄉", "頭份鎮", "頭屋鄉");
ZipCode[7] = new Array("", "367", "352", "364", "363", "350", "368", "369", "353", "356", "360", "358", "365", "357", "361", "354", "366", "351", "362");

ZipList[8] = new Array("---------------", "大甲區", "大安區", "大肚區", "大里區", "大雅區", "中區", "太平區", "北屯區", "北區", "外埔區", "石岡區", "后里區", "西屯區", "西區", "沙鹿區", "和平區", "東區", "東勢區", "南屯區", "南區", "烏日區", "神岡區", "梧棲區", "清水區", "新社區", "潭子區", "龍井區", "豐原區", "霧峰區");
ZipCode[8] = new Array("", "437", "439", "432", "412", "428", "400", "411", "406", "404", "438", "422", "421", "407", "403", "433", "424", "401", "423", "408", "402", "414", "429", "435", "436", "426", "427", "434", "420", "413");

ZipList[9] = new Array("---------------", "二水鄉", "二林鎮", "大村鄉", "大城鄉", "北斗鎮", "永靖鄉", "田中鎮", "田尾鄉", "竹塘鄉", "伸港鄉", "秀水鄉", "和美鎮", "社頭鄉", "芳苑鄉", "花壇鄉", "芬園鄉", "員林鎮", "埔心鄉", "埔鹽鄉", "埤頭鄉", "鹿港鎮", "溪州鄉", "溪湖鎮", "彰化市", "福興鄉", "線西鄉");
ZipCode[9] = new Array("", "530", "526", "515", "527", "521", "512", "520", "522", "525", "509", "504", "508", "511", "528", "503", "502", "510", "513", "516", "523", "505", "524", "514", "500", "506", "507");

ZipList[10] = new Array("---------------", "二崙鄉", "口湖鄉", "土庫鎮", "大埤鄉", "元長鄉", "斗六市", "斗南鎮", "水林鄉", "北港鎮", "古坑鄉", "台西鄉", "四湖鄉", "西螺鎮", "東勢鄉", "林內鄉", "虎尾鎮", "崙背鄉", "麥寮鄉", "褒忠鄉", "莿桐鄉");
ZipCode[10] = new Array("", "649", "653", "633", "631", "655", "640", "630", "652", "651", "646", "636", "654", "648", "635", "643", "632", "637", "638", "634", "647");

ZipList[11] = new Array("---------------", "中寮鄉", "仁愛鄉", "水里鄉", "名間鄉", "竹山鎮", "信義鄉", "南投市", "埔里鎮", "草屯鎮", "國姓鄉", "魚池鄉", "鹿谷鄉", "集集鎮");
ZipCode[11] = new Array("", "541", "546", "553", "551", "557", "556", "540", "545", "542", "544", "555", "558", "552");

ZipList[12] = new Array("---------------", "");
ZipCode[12] = new Array("", "600");

ZipList[13] = new Array("---------------", "大林鎮", "大埔鄉", "中埔鄉", "六腳鄉", "太保市", "水上鄉", "布袋鎮", "民雄鄉", "朴子市", "竹崎鄉", "東石鄉", "阿里山", "梅山鄉", "鹿草鄉", "番路鄉", "新港鄉", "溪口鄉", "義竹鄉");
ZipCode[13] = new Array("", "622", "607", "606", "615", "612", "608", "625", "621", "613", "604", "614", "605", "603", "611", "602", "616", "623", "624");

ZipList[14] = new Array("---------------", "七股區", "下營區", "大內區", "山上區", "中區", "仁德區", "六甲區", "北門區", "北區", "左鎮區", "永康區", "玉井區", "白河區", "安平區", "安定區", "安南區", "西區", "西港區", "佳里區", "官田區", "東山區", "東區", "南化區", "南區", "後壁區", "柳營區", "將軍區", "麻豆區", "善化區", "新化區", "新市區", "新營區", "楠西區", "學甲區", "龍崎區", "歸仁區", "關廟區", "鹽水區");
ZipCode[14] = new Array("", "724", "735", "742", "743", "700", "717", "734", "727", "704", "713", "710", "714", "732", "708", "745", "709", "703", "723", "722", "720", "733", "701", "716", "702", "731", "736", "725", "721", "741", "712", "744", "730", "715", "726", "719", "711", "718", "737");

ZipList[15] = new Array("---------------", "三民區", "三民區", "大社區", "大寮區", "大樹區", "小港區", "仁武區", "內門區", "六龜區", "左營區", "永安區", "田寮區", "甲仙區", "杉林區", "岡山區", "林園區", "阿蓮區", "前金區", "前鎮區", "美濃區", "茄萣區", "茂林區", "苓雅區", "桃源區", "梓官區", "鳥松區", "湖內區", "新興區", "楠梓區", "路竹區", "鼓山區", "旗山區", "旗津區", "鳳山區", "橋頭區", "燕巢區", "彌陀區", "鹽埕區");
ZipCode[15] = new Array("", "807", "849", "815", "831", "840", "812", "814", "845", "844", "813", "828", "823", "847", "846", "820", "832", "822", "801", "806", "843", "852", "851", "802", "848", "826", "833", "829", "800", "811", "821", "804", "842", "805", "830", "825", "824", "827", "803");

ZipList[16] = new Array("---------------", "九如鄉", "三地鄉", "內埔鄉", "竹田鄉", "牡丹鄉", "車城鄉", "里港鄉", "佳冬鄉", "來義鄉", "枋山鄉", "枋寮鄉", "東港鎮", "林邊鄉", "長治鄉", "南州鄉", "屏東市", "恆春鎮", "春日鄉", "崁頂鄉", "泰武鄉", "高樹鄉", "新埤鄉", "新園鄉", "獅子鄉", "萬丹鄉", "萬巒鄉", "滿州鄉", "瑪家鄉", "潮州鎮", "霧台鄉", "麟洛鄉", "鹽埔鄉");
ZipCode[16] = new Array("", "904", "901", "912", "911", "945", "944", "905", "931", "922", "941", "940", "928", "927", "908", "926", "900", "946", "942", "924", "921", "906", "925", "932", "943", "913", "923", "947", "903", "920", "902", "909", "907");

ZipList[17] = new Array("---------------", "琉球鄉");
ZipCode[17] = new Array("", "929");

ZipList[18] = new Array("---------------", "三星鄉", "大同鄉", "五結鄉", "冬山鄉", "壯圍鄉", "宜蘭市", "南澳鄉", "員山鄉", "頭城鎮", "礁溪鄉", "羅東鎮", "蘇澳鎮");
ZipCode[18] = new Array("", "266", "267", "268", "269", "263", "260", "272", "264", "261", "262", "265", "270");

ZipList[19] = new Array("---------------", "玉里鎮", "光復鄉", "吉安鄉", "秀林鄉", "卓溪鄉", "花蓮市", "富里鄉", "新城鄉", "瑞穗鄉", "萬榮鄉", "壽豐鄉", "鳳林鎮", "豐濱鄉");
ZipCode[19] = new Array("", "981", "976", "973", "972", "982", "970", "983", "971", "978", "979", "974", "975", "977");

ZipList[20] = new Array("---------------", "大武鄉", "太麻里", "台東市", "成功鎮", "池上鄉", "卑南鄉", "延平鄉", "東河鄉", "金峰鄉", "長濱鄉", "海端鄉", "鹿野鄉", "達仁鄉", "關山鎮");
ZipCode[20] = new Array("", "965", "963", "950", "961", "958", "954", "953", "959", "964", "962", "957", "955", "966", "956");

ZipList[21] = new Array("---------------", "綠島鄉", "蘭嶼鄉");
ZipCode[21] = new Array("", "951", "952");

ZipList[22] = new Array("---------------", "七美鄉", "白沙鄉", "西嶼鄉", "馬公市", "望安鄉", "湖西鄉");
ZipCode[22] = new Array("", "883", "884", "881", "880", "882", "885");

ZipList[23] = new Array("---------------", "北竿鄉", "東引鄉", "南竿鄉", "莒光鄉");
ZipCode[23] = new Array("", "210", "212", "209", "211");

ZipList[24] = new Array("---------------", "金沙鎮", "金城鎮", "金湖鎮", "金寧鄉", "烈嶼鄉", "烏坵鄉");
ZipCode[24] = new Array("", "890", "893", "891", "892", "894", "896");

ZipList[25] = new Array("---------------", "東沙", "南沙");
ZipCode[25] = new Array("", "817", "819");

ZipList[26] = new Array("---------------", "釣魚台");
ZipCode[26] = new Array("", "290");


//////////////////////////////




var mcclist = { "旅行業" : "0009", "旅宿業" : "0007", "交通運輸業":"0008", "餐飲業":"0020", "餐飲業":"0020"  };

/* 第一層分類名稱 */
GMccList = new Array("行業別", "旅行業", "旅宿業", "交通運輸業", "餐飲業", "農特產及手工藝品業", "加油站", "觀光遊樂業", "體育用品", "其它觀光服務業", "服飾業", "皮鞋皮件業", "美容護膚業", "商圈及其它行業", "藝文圖書業");

/* 第一層分類代碼 */
GMccCode = new Array("", "0017", "0009", "0007", "0008", "0020", "0021", "0018", "0015", "0016", "0025", "0026", "0027", "0023", "0030");

/* 第二層衛星帳 */
TccList = new Array(15);
TccCode = new Array(15);

TccList[0] = new Array("行業分類");
TccCode[0] = new Array("");
TccList[1] = new Array("---------------", "旅行社");
TccCode[1] = new Array("", "7900");

TccList[2] = new Array("---------------", "民宿業", "其他住宿服務業", "郵購、網購-旅館", "一般旅館業", "觀光旅館業");
TccCode[2] = new Array("", "5591", "5590", "5512", "5511", "5510");

TccList[3] = new Array("---------------", "政府機關", "汽車租賃業", "郵購、網購-交通運輸業", "其他運輸輔助業", "停車場業", "民用航空運輸業", "海洋水運業", "一般汽車客運業", "計程車", "鐵路運輸業");
TccCode[3] = new Array("", "9811", "7721", "5291", "5290", "5241", "5101", "5010", "4939", "4932", "4910");

TccList[4] = new Array("---------------", "飲料店業", "餐館業");
TccCode[4] = new Array("", "5621", "5610");

TccList[5] = new Array("---------------", "其他農畜水產品零售業", "其他木製品製造業", "其他農事服務業");
TccCode[5] = new Array("", "4728", "1309", "0139");

TccList[6] = new Array("---------------", "加油站業");
TccCode[6] = new Array("", "4821");

TccList[7] = new Array("---------------", "其他觀光遊樂業", "遊樂園業", "生態教育農園", "森林遊樂業", "休閒農場(園)", "觀光果茶(園)");
TccCode[7] = new Array("", "9329", "9321", "9102", "0210", "0119", "0115");

TccList[8] = new Array("---------------", "運動用品器材零售業", "體育用品業");
TccCode[8] = new Array("", "4763", "4762");

TccList[9] = new Array("---------------", "運動場館", "身心障礙者福利服務業");
TccCode[9] = new Array("", "9312", "8203");

TccList[10] = new Array("---------------", "成衣零售業");
TccCode[10] = new Array("", "4732");

TccList[11] = new Array("---------------", "服飾配件零售業", "皮鞋皮件業");
TccCode[11] = new Array("", "4739", "4733");

TccList[12] = new Array("---------------", "美容護膚業", "化妝品零售業");
TccCode[12] = new Array("", "9620", "4752");

TccList[13] = new Array("---------------", "未分類其他個人服務業", "其它", "其他休閒服務業", "未分類其他零售業", "其他無店面零售業", "食品什貨零售業", "其他綜合商品零售業");
TccCode[13] = new Array("", "9690", "9331", "9330", "4852", "4819", "4729", "4711");

TccList[14] = new Array("---------------", "畫廊及藝廊", "美術館", "博物館", "郵購(網購)藝文展演", "舞蹈", "音樂會", "電影院", "戲劇", "書店");
TccCode[14] = new Array("", "9324", "9323", "9103", "9039", "9032", "9031", "5914", "5911", "4761");


//////////////////////////////



function initCity(citySlct, zipSlct) {
    citySlct.length = CityList.length;
    for (i=0; i<CityList.length; i++) {
        citySlct.options[i].text = CityList[i];
        citySlct.options[i].value = CityCode[i];
    }
    citySlct.selectedIndex = 0;
    changeCity(citySlct, zipSlct);
}

function initSelectCity(citySlct, zipSlct, cValue, zValue) {
    initCity(citySlct, zipSlct);
    for (i=0; i<CityCode.length; i++) {
        if (citySlct.options[i].value == cValue) {
            citySlct.selectedIndex = i;
            break;
        }
    }

    changeCity(citySlct, zipSlct);
    for (i=0; i<ZipCode[citySlct.selectedIndex].length; i++) {
        if (zipSlct.options[i].value == zValue) {
            zipSlct.selectedIndex = i;
            break;
        }
    }
}

function changeCity(citySlct, zipSlct) {
  //  index = citySlct.selectedIndex;
index = jQuery.inArray(  citySlct.options[citySlct.selectedIndex].text , CityList ) ;

    zipSlct.length = ZipList[index].length;
    for (i=0; i<ZipList[index].length; i++) {
        zipSlct.options[i].text = ZipList[index][i];
        zipSlct.options[i].value = ZipCode[index][i];
    }
    zipSlct.selectedIndex = 0;
   $('#ZipCode').selectmenu("refresh");
}



function initGMcc(gmcc, tcc) {
    gmcc.length = GMccList.length;
    for (i=0; i<GMccList.length; i++) {
        gmcc.options[i].text = GMccList[i];
        gmcc.options[i].value = GMccCode[i];
    }
    gmcc.selectedIndex = 0;
    changeGMcc(gmcc, tcc);
}

function changeGMcc(gmcc, tcc) {
    index = gmcc.selectedIndex;
    tcc.length = TccList[index].length;
    for (i=0; i<TccList[index].length; i++) {
        tcc.options[i].text = TccList[index][i];
        tcc.options[i].value = TccCode[index][i];
    }
    tcc.selectedIndex = 0;
    $('#TCC').selectmenu("refresh");
}


function selArea(value){
	

	if(value=='M'){


		$('#sel_city_dist').hide();
	

	}else if($.inArray(value,['N','C','S','E','I'])!=-1){

		var cities,html='<option value="">所有縣市</option>';
		switch(value){
			case 'N': cities = ['台北市','新北市','基隆市','桃園縣','新竹縣','新竹市']; break;
			case 'C': cities = ['苗栗縣','台中市','彰化縣','南投縣','雲林縣']; break;
			case 'S': cities = ['嘉義縣','嘉義市','台南市','高雄市','屏東縣']; break;
			case 'E': cities = ['宜蘭縣','花蓮縣','台東縣']; break;
			case 'I': cities = [ '屏東縣琉球鄉離島','台東縣綠島、蘭嶼', '澎湖縣','金門縣', '連江縣']; break;
		}
		for(i in cities){
			
			html += '<option value="'+CityCode[jQuery.inArray( cities [i], CityList ) ]+'">'+cities [i]+'</option>';
		
		}

		   $('#ZipCode').selectmenu("refresh");

		$('#Group').html(html).find('option[value='+''+']').attr('selected',true)
				.end().selectmenu("refresh");

		$('#sel_city_dist').show();
	}else{
		$('#sel_city_dist').hide();
	}
	
	
}

function codeLatLng( latlng, callback ) {

var geocoder = new google.maps.Geocoder();

  if (geocoder) {
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          callback(results[1].formatted_address);
        } else {
          callback("無法轉換地址");
        }
      } else {
        callback("無法轉換地址，錯誤碼: " + status);
      }
    });
  }
}

function queryctc(RetlName, Group, ZipCode, Addr, GMCC, TCC){
			
		$('#resList').empty();
	
			/*//var RetlName = $("#RetlName").val();
			//var Group = $("#Group").val();
			//var ZipCode =  $("#ZipCode").val();
			//var Addr = $("#Addr").val();
			//var GMCC = $("#GMCC").val();
			//var TCC = $("#TCC").val();
			var RetlName ="";
			var Group ="009";
			var ZipCode = "428";
			var Addr = "";
			var GMCC = "";
			var TCC ="";*/
			
			var prefixUrl = 'http://travel.nccc.com.tw/NASApp/NTC/servlet/com.du.mvc.EntryServlet?Action=RetailerList&Type=GetFull&';
			
			var weburl = "";
			
			var queriesNum ="", allhtml="";
			
			listadd( 1, "" );
			
			//share listadd function
			function listadd( pageNum) {

				if (pageNum == 1 ){
					weburl = prefixUrl +'WebMode=text&RetlName='+ RetlName +'&Group=' + Group + '&ZipCode=' + ZipCode + '&Addr=' +  Addr + '&GMCC=' + GMCC + '&TCC=' + TCC+ '&RequestType=0';
					
				}
				else{
					$('.more_li').remove();	
					weburl = prefixUrl + '&Request=NULL_NULL_' + (RetlName == "" ? "NULL" : RetlName) + '_' +   (Group == "" ? "NULL" : Group) + '_' + 
					(ZipCode == "" ? "NULL" : ZipCode)+ '_' + (Addr == "" ? "NULL" : Addr) + '_' + (GMCC == "" ? "NULL" : GMCC) + '_' + (TCC == "" ? "NULL" : TCC)  +
					'_NULL_0_'+ pageNum + '_20_' +  queriesNum ;

					
					if (queriesNum=""){
								console.log('queriesNum is empty');
								return;
					}
				}
				
				$.mobile.showPageLoadingMsg();
				
				 $.ajax({
					type: 'GET',
					url: weburl,
					success: function(res) {
						var count=0, html ="", firstitem, idx ;
						
						var str= $(res.responseText).find("td").text();
						
						var idx = str.indexOf("總筆數");
						
						if (idx == -1){
							alert('沒有東西了!!');
							return;
						}
						
						//if (pageNum == 1 ){
							queriesNum = $.trim( str.substr(  idx  + 4 ,  7 ) );
						//}
						
						var tmpstr = str.substr( 0 ,  str.indexOf("相關資料")+5 );
						str = str.replace(tmpstr, "");
						str = str.slice( 0 ,  str.indexOf("總筆數") );
						str = str.split("詳細內容\n");
					
						
					for(i in str){
						tmpstr = str[i].split("\n");
						count=0;
						
					 for (j in tmpstr) {				
						if ( tmpstr[j].length >28 && count< 4){					
							
							if (count ==0)
							{
								firstitem = $.trim(tmpstr[j]);
							}
							else if (count==1)
							{
							html +=  '<li cat="'+  $.trim(tmpstr[j]) +'">' + firstitem +
									'<ul><li data-icon="false" ><a href="#">'+$.trim(tmpstr[j])+'</a></li>';						
							}
							 else if (count==2){
							 html +=  	'<li data-icon="grid"><a href="tel:'+$.trim(tmpstr[j])+'">'+$.trim(tmpstr[j])+'</a></li>';	
							 }
							 else
							 {
							 html += 	'<li data-icon="info"><a href="geo:0,0?q='+$.trim(tmpstr[j])+'">'+$.trim(tmpstr[j])+'</a></li>'+
										'<a href="#" data-role="button" data-rel="back">返回</a>  </ul> </li>';	
							 }
							 count++;
							}
					 }
					}
					
					var restNum = queriesNum -  20 * pageNum;
					
					allhtml += html;
					
					$('.ul').remove();
					$('#resList').empty();
					
					if (restNum > 0){
						//html += '<li data-icon="false" class="more_li"><a href="#" id="list_more_btn">還有 '+ restNum  +'個商店<br>再載入 '+Math.min(20, restNum)+' 個</a></li>';
						$('#resList').append(allhtml + '<li data-icon="false" class="more_li"><a href="#" id="list_more_btn"><i>還有 '+ restNum  +'個商家  再多載入 '+Math.min(20, restNum)+' 個</i></a></li>');
					}
					else{
						$('#resList').append(allhtml);
					}
						
						$('#resList').listview({
						autodividers: true,
						autodividersSelector: function (li) {
							return li.attr('cat');
						}
						});						
						$('#resList').listview('refresh');
						
						$.mobile.hidePageLoadingMsg();
						
						/*list more function*/
						$("#list_more_btn").bind('click', function () {
							
							listadd( ++pageNum );
						});
						
						/*sort button function*/
						$("#list_sort_btn").bind('click', function () {
						
							
							var moreli = $('.more_li').text();	
							
							$('.more_li').remove();	
							
							$("li[cat]").tsort( {attr:"cat"} ); //.tsort({attr:'cat'});	
							
							if (restNum > 0){							
								$('#resList').append( '<li data-icon="false" class="more_li"><a href="#" id="list_more_btn"><i>'+ moreli + '</i></a></li>' );	
							}
						
							$('#resList').listview('refresh');
							

							$("#list_more_btn").bind('click', function () {			
							listadd( ++pageNum );
							});
						});



					},
					error: function (res) {
						alert('Server Offline!!');
					}
				});
	
			}
			
			
				
	}