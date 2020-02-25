const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

@property
currentPosition: number = 0;
@property
nextPosition: number = 0;
@property
jump:number = 0;

    jumpPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.space:
                if(this.jump == 0){
                this.node.getComponent(cc.Animation).play("jumping_animation");
                this.nextPosition = this.node.position.y+50;
                this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(0,100000),true);              
                this.jump = 1;
                console.log("jump");
                }
            break;
        }
    }

     onLoad () 
     {
         this.node.getComponent(cc.Animation).play("walking_animation");
         cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.jumpPlayer,this);
         cc.director.getPhysicsManager().enabled = true;
         this.node.getComponent(cc.RigidBody).fixedRotation  = true;

     }

    start () 
    {
        
    }
    onBeginContact(contact,self,other)
    {
        if(other.name=="2<PhysicsBoxCollider>"){
            this.jump = 0;
        }
    }

    update (dt) 
    {
        this.currentPosition = this.node.position.y;
     
        if(this.jump == 1)
        {
            if(this.node.position.y>this.nextPosition)
            {
                this.node.getComponent(cc.RigidBody).gravityScale = 10;
                
                this.node.getComponent(cc.Animation).play("walking_animation");
                this.node.angle = 0;
            }
        }
        
    }
}
