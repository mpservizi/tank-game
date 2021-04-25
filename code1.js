gdjs.GameWinCode = {};
gdjs.GameWinCode.GDStatoObjects1= [];
gdjs.GameWinCode.GDStatoObjects2= [];
gdjs.GameWinCode.GDMsgObjects1= [];
gdjs.GameWinCode.GDMsgObjects2= [];
gdjs.GameWinCode.GDTitoloObjects1= [];
gdjs.GameWinCode.GDTitoloObjects2= [];

gdjs.GameWinCode.conditionTrue_0 = {val:false};
gdjs.GameWinCode.condition0IsTrue_0 = {val:false};
gdjs.GameWinCode.condition1IsTrue_0 = {val:false};


gdjs.GameWinCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameWinCode.condition0IsTrue_0.val = false;
{
gdjs.GameWinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.GameWinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


};

gdjs.GameWinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameWinCode.GDStatoObjects1.length = 0;
gdjs.GameWinCode.GDStatoObjects2.length = 0;
gdjs.GameWinCode.GDMsgObjects1.length = 0;
gdjs.GameWinCode.GDMsgObjects2.length = 0;
gdjs.GameWinCode.GDTitoloObjects1.length = 0;
gdjs.GameWinCode.GDTitoloObjects2.length = 0;

gdjs.GameWinCode.eventsList0(runtimeScene);
return;

}

gdjs['GameWinCode'] = gdjs.GameWinCode;
