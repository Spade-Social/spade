exports.callJSFun=function(id){
  const fun = document.getElementById(id);
  if(fun?.checked){
    console.log("Hello Call JS Function From TypeScript ");

  }else{
    fun.setAttribute('checked',true);
  }
}
