oS.Init(
	{
		PName: [
			oPeashooter,
			oSunFlower,
			oCherryBomb,
			oWallNut,
			oPotatoMine,
			oSnowPea,
			oChomper,
			oRepeater,
		],
		ZName: [
			oZombie,
			oZombie2,
			oZombie3,
			oConeheadZombie,
			oPoleVaultingZombie,
			oBucketheadZombie,
		],
		PicArr: [
			"images/interface/background1.jpg",
			"images/interface/ZombieNoteSmall.png",
			"images/interface/ZombieNote1.png",
		],
		backgroundImage: "images/interface/background1.jpg",
		CanSelectCard: 1,
		LevelName: "Level 1-9",
		LvlEName: 9,
		LargeWaveFlag: {
			10: $("imgFlag3"),
			20: $("imgFlag2"),
			30: $("imgFlag1"),
		},
	},
	{
		AZ: [
			[oZombie, 2, 1],
			[oZombie2, 2, 1],
			[oZombie3, 2, 1],
			[oConeheadZombie, 2, 1],
			[oPoleVaultingZombie, 1, 1],
			[oBucketheadZombie, 1, 1],
		],
		FlagNum: 30,
		FlagToSumNum: {
			a1: [3, 5, 9, 10, 13, 15, 19, 20, 23, 25, 29],
			a2: [1, 2, 3, 10, 4, 5, 6, 15, 7, 8, 9, 25],
		},
		FlagToMonitor: {
			9: [ShowLargeWave, 0],
			19: [ShowLargeWave, 0],
			29: [ShowFinalWave, 0],
		},
		FlagToEnd: function () {
			NewImg(
				"imgSF",
				"images/interface/ZombieNoteSmall.png",
				"left:667px;top:220px",
				EDAll,
				{
					onclick: function () {
						PlayAudio("winmusic");
						SetHidden($("PointerUD"));
						SetStyle(this, {
							width: "613px",
							height: "399px",
							left: "193px",
							top: "100px",
						}).src = "images/interface/ZombieNote1.png";
						this.onclick = function () {
							SelectModal(10);
						};
					},
				}
			);
			NewImg(
				"PointerUD",
				"images/interface/PointerDown.gif",
				"top:185px;left:676px",
				EDAll
			);
		},
	}
);
