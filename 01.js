var obj={}

Object.defineProperty(obj,"hello",{
    get:function(){
        console.log("get is in use")
    },
    set:function(){
        console.log("set in in use");
    }
})
obj.hello;
obj.hello="new hello";