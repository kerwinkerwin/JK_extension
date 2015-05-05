function gifFun (){
  this.urls=[];
}

gifFun.prototype.doStuff = function(url){
  // $.each($('div'), function(index,value){
  //   if(index%2==0){
  //     $(value).css('background-image','url('+ this.urls[0] + ')');
  //   }
  //   else{
  //     $(value).css('background-image','url('+ this.urls[1]+')');
  //   }
  // })
  console.log(url);
};

gifFun.prototype.addGif= function(url){
  for(i=0; i<url.length; i++){
    this.urls.push(url[i]);
  };
  console.log(this.urls);
};

var gif = new gifFun();
gif.addGif(["http://i.imgur.com/VbxaZzB.gif","http://media.giphy.com/media/5xtDart8HzeR2mNV1D2/giphy.gif"]);
gif.doStuff(gif.urls);
