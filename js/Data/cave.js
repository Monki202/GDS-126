var x=false;
var caveData ={
	info:{
		layout:[
			[11,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,  6,4],
			[11,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, 16,4],
			[11,4,x,9,x,x,9,x,x,x,x,x,x,9,x,x,x,9,x,x,x,9,x,x,x,x,x,9,x,x,x,x,x, 11,4],
			[11,4,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x, 11,4],
			[15,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x, 11,4],
			[x,9,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17,17,x,x,x,x,x,x,x,x,x,x,x,x,11,4],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,17,17,x,x,x,x,17,17,x,x,x,x,x,x,x,x,x,x,x,x,11,4],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,  11,4]
			
			
		],
		src:`images/Tileset.png`,
	},
	states:
	[		//0
			{
				fps:1,
				cycle:false,
				frames:[
					{width:64, height:64, startX:0, startY:0}
				]
			},
			//1
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:320}]
			},
			//2
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:128}]
			},
			//3
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:0}]
			},
			//4
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:256}]
			},
			//5
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:192}]
			},
			//6
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:256}]
			},
			//7
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:320}]
			},
			//cave background 8
			{
				fps:1,
				cycle:true,
				frames:[{width:64, height:64, startX:192, startY:256}]
			},
			//9
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:256}]
			},
			//glass 10
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:256}]
			},
			//11
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY:256}]
			},
			//platform 12
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:64}]
			},
			//13
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:64}]
			},
			//14
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:64}]
			},
			//15
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY:320}]
			},
			//16
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:128}]
			},
			//crate 17
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:128}]
			},
			//crate behind 18
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:128}]
			},
			//glass end 19
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:256}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[19,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[19,8,8,8,8,8,8,18,8,8,8,8,8,8,8,8,8,8,8,8,8, 18,8,8, 8,8,8,8,8,8,8,8,8,8,8],
			[19,8,8,8,8,8,8,18,18,8,8,8,8,8,8,8,8,8,8,8,8,18,8,8,18,8,8,8,8,8,8,8,8,8,8],
			],
			src:`images/Tileset.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
					[1,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[1,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[1,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
					
					
				],
				src:`images/Tileset.png`,
			},
			states:caveData.states
			
			}