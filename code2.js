gdjs.GameOverCode = {};
gdjs.GameOverCode.GDStatoObjects1= [];
gdjs.GameOverCode.GDStatoObjects2= [];
gdjs.GameOverCode.GDMsgObjects1= [];
gdjs.GameOverCode.GDMsgObjects2= [];
gdjs.GameOverCode.GDTitoloObjects1= [];
gdjs.GameOverCode.GDTitoloObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDStatoObjects1.length = 0;
gdjs.GameOverCode.GDStatoObjects2.length = 0;
gdjs.GameOverCode.GDMsgObjects1.length = 0;
gdjs.GameOverCode.GDMsgObjects2.length = 0;
gdjs.GameOverCode.GDTitoloObjects1.length = 0;
gdjs.GameOverCode.GDTitoloObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
