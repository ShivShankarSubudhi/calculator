signzy.factory("storageFactory",function(){
      return {
        saveCalc:function(calc_obj){
			var date = Math.round(+new Date()/1000);
          localStorage.setItem(date,JSON.stringify(calc_obj));
        },
        getCalc: function(){
			var i = 0,oJson = {},sKey;
			for (; sKey = window.localStorage.key(i); i++) {
                oJson[sKey] = formatInput(JSON.parse(window.localStorage.getItem(sKey)));
			}
			return oJson;
        }
      }
});
