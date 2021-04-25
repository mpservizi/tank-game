gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDMsgObjects1= [];
gdjs.MainMenuCode.GDMsgObjects2= [];
gdjs.MainMenuCode.GDTitoloObjects1= [];
gdjs.MainMenuCode.GDTitoloObjects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDMsgObjects1.length = 0;
gdjs.MainMenuCode.GDMsgObjects2.length = 0;
gdjs.MainMenuCode.GDTitoloObjects1.length = 0;
gdjs.MainMenuCode.GDTitoloObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
