;
var localstorage_action = function(){
  var ulData = null;
  var db = openDatabase("mydb", "1.0","test db", 2 * 1024 * 1024);
  return {
    init:function(){
      if(!windows.localStorage){
        alert("your browser does not support localStorage");
      }
    
      ulData = document.getElementById("ulData");
      showAllData();
    },
    removeAllData: function(){
      for(var count = ulData.childNodes.length-1; count >= 0; count--){
        ulData.removeChild(ulData.childNodes[count]);
      }
    },
    deleteAllData: function(){
      db.transaction(function(tx){
        tx.excuteSql("delete from infoData");
      });
      
      removeAllData();
    },
    showData: function(row){
      var li = document.createElement("li");
      var dt = new Date();
      dt.setTime(row.time);
      li.innerHTML = "<details><summary class='title'><strong>"+row.name+"</strong><span>"+dt.toDateString()+","+dt.toLocaleTimeString()+"</span></summary><p class='desc'><a href='"+row.url+"' target='_blank'>"+ row.message + "</a></p>";
    },
    showAllData: function(){
    },
    addData: function(name, url, message, time){
    },
    saveData: function(){
    }
  };
}();
