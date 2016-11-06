// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"MadeWithMv","status":true,"description":"メイン画面へ進む前に、\"Made with MV\"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.38a Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"8","Animation Next Delay":"12","Certain Hit Animation":"0","Physical Animation":"0","Magical Animation":"0","Enemy Attack Animation":"1","Reflect Animation":"53","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"Graphics.boxWidth - 216 + index * 32","Home Position Y":"Graphics.boxHeight - 344 + index * 48","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"90","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"false","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"false","User Help Text":"使用者","Ally Help Text":"味方","Allies Help Text":"味方","Enemy Help Text":"敵","Enemies Help Text":"敵","All Help Text":"全ての %1","Random Help Text":"%2 ランダムな %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"true","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"true","Show State Text":"true","Show Buff Text":"true","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"true","Show Critical Text":"true","Show Miss Text":"true","Show Evasion Text":"true","Show HP Text":"true","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_BattleStatusWindow","status":true,"description":"v1.05 A simple battle status window that shows the\nfaces of your party members in horizontal format.","parameters":{"---Visual---":"","No Action Icon":"16","Name Font Size":"20","Param Font Size":"20","Param Y Buffer":"7","Param Current Max":"false","Adjust Columns":"false","---Actor Switching---":"","Left / Right":"true","PageUp / PageDown":"true","Allow Turn Skip":"true","---Front View---":"","Show Animations":"false","Show Sprites":"false","Align Animations":"true","X Offset":"24","Y Offset":"-16"}},
{"name":"YEP_BuffsStatesCore","status":true,"description":"v1.10b Alter the basic mechanics behind buffs and states\nthat aren't adjustable within the RPG Maker editor.","parameters":{"---Turn Indicator---":"","Show Turns":"true","Font Size":"16","Turn Alignment":"right","Turn Buffer X":"-3","Turn Buffer Y":"-6","State Color":"0","Buff Color":"24","Debuff Color":"2","---Enemy Icons---":"","Show Enemy Icons":"true","Enemy Buff Turn":"true","Enemy State Turn":"true","Enemy State Counter":"true","---Buff Settings---":"","Default Limit":"4","Maximum Limit":"8","Buff Formula":"this._buffs[paramId] * 0.25 + 1.0","Show Buff Rate":"false","---State Settings---":"","Reapply Rules":"1","Show Enemy Turns":"true","---Counter Settings---":"","Counter Font Size":"16","Counter Alignment":"center","Counter Buffer X":"0","Counter Buffer Y":"8","Counter Color":"0"}},
{"name":"SSEP_BattleSpeedUp_v2","status":true,"description":"[ver2.01] 戦闘速度を上げるプラグインです。YanflyEngine対応。\n利用時は、必ずYanflyEngineの後に読み込んでください。","parameters":{"---General Setting---":"","BattleSpeed (Default)":"1","BattleSpeed (Boost)":"2","OkayKeyBoost":"true","VisibleSwitch":"true","BoostToggleSwitch":"shift","---Detail Setting---":"","StateIcon":"40","StateOverlay":"8","Weapon":"12","Motion":"12","Balloon":"12","Damage":"90","DamageMin":"60","--BattleLog Setting--":"","LogAnime BaseDelay":"8","LogAnime NextDelay":"12","LogWaitCount Default":"1","LogWaitCount Boost":"2","---Switch Setting---":"","SE BoostON":"Decision2","SE BoostOFF":"Decision2","SE Volume":"50","SwitchImage":"Balloon","SwitchX":"10","SwitchY":"10","SwitchWidth":"48","SwitchHeight":"48","SwitchTop":"2","SwitchLeft":"1","SwitchAnimePattern":"8","SwitchAnimeSpeed":"5","---YEP BattleCore---":"","YEP Battle MotionWait":"10","---YEP ATB---":"","YEP ATB BoostSwitch":"true","---ATB Speed---":"","ATB Speed(Default)":"1","ATB Speed(Boost)":"2","---YEP Victory AM---":"","YEP Victory Wait":"true"}},
{"name":"scrollText","status":true,"description":"","parameters":{}}
];
