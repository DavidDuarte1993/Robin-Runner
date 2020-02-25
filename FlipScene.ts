const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
onLoad () 
{
         cc.director.preloadScene("GameScene",function(){
             console.log("scene has been preloaded");
         });
         this.node.on("mousedown",function(event){
            cc.director.loadScene("GameScene");
         },this);
}

start () 
{
}

}
