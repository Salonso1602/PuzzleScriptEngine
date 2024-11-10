var prelude = `
	title This Time
	author yours truly
	
	run_rules_on_level_start
	norepeat_action
	noundo
`

var objects = `
	========
	OBJECTS
	========
	
	Background
	#c5ccb8
	
	BlackBackground
	Black
	
	Wall
	#93a167 #557064
	11111
	11111
	11111
	11111
	11111
	
	WallCells
	#545453 (gray)

	WallPatio
	#00300d #3b3b39
	01010
	11111
	01010
	11111
	01010
	
	FloorCells
	#999796 (light gray)
	
    FloorDiner
	#C0C0C0 #999796
    01010
    11011
    00000
    11011
    01010

    FloorPatio
	#024d16 #00300d
    01000
    00010
    01000
    00010
    00000

    WallDiner
	#C0C0C0 #6e1200
    11111
    11111
    11111
    11111
    11111

	VerticalDinerWall
	#dbb416 #262424
	.000.
	10001
	.000.
	10001
	.000.

	RightTDinerWall
	#3b3b39
	.....
	.....
	.....
	.....
	.....

	TDinerWall
	#3b3b39
	.....
	....0
	00000
	0.0..
	..0..

	InvertedTDinerWall
	#3b3b39
	..0..
	0.0..
	00000
	....0
	.....

	HorizontalDinerWall
	#dbb416 #262424
	.1.1.
	00000
	00000
	00000
	.1.1.

	VerticalCellWall
	#3b3b39
	..00.
	..0..
	..0..
	..0..
	.00..

	RightTCellWall
	#3b3b39
	..00.
	..0..
	000..
	0.0..
	..0..

	TCellWall
	#3b3b39
	.....
	....0
	00000
	0.0..
	..0..

	InvertedTCellWall
	#3b3b39
	..0..
	0.0..
	00000
	....0
	.....

	HorizontalCellWall
	#3b3b39
	.....
	....0
	00000
	0....
	.....
	
	Crate
	#8d6268 #6E4D51
	00000
	00000
	11111
	11111
	11111
	
	MovableTable
	Green
	.000.
	00000
	00000
	00000
	.000.

	MovableBarrel
	#99440b
	..0..
	.000.
	00000
	.000.
	..0..
	
	Player
	Transparent
	
	Found
	red
	..0..
	..0..
	..0..
	.....
	..0..	
	
	TimerPointer
	#f7e26b #6e6962
	..1..
	...1.
	11111
	...1.
	..1..
	
	upPlayer
	orange #f0bf97 #d6c19c
	.....
	.020.
	00100
	.000.
	.....

	downPlayer
	orange #f0bf97 #d6c19c
	.....
	.000.
	00100
	.020.
	.....

	rightPlayer
	orange #f0bf97 #d6c19c
	..0..
	.000.
	.012.
	.000.
	..0..

	leftPlayer
	orange #f0bf97 #d6c19c
	..0..
	.000.
	.210.
	.000.
	..0..
	
	0
	#f0f6f0 Black
	11111
	11011
	10101
	10101
	11011
	
	1
	#f0f6f0 Black
	11111
	11011
	10011
	11011
	10001
	
	2
	#f0f6f0 Black
	11111
	10011
	11101
	11011
	10001
	
	3
	#f0f6f0 Black
	11111
	10001
	11001
	11101
	10001
	
	4
	#f0f6f0 Black
	11111
	10111
	10101
	10001
	11101
	
	5
	#f0f6f0 Black
	11111
	10011
	10001
	11101
	10001
	
	6
	#f0f6f0 Black
	11111
	10111
	10111
	10001
	10001
	
	7
	#f0f6f0 Black
	11111
	10001
	11101
	11011
	10111
	
	8
	#f0f6f0 Black
	11111
	10001
	10001
	10101
	10001
	
	9
	#f0f6f0 Black
	11111
	10001
	10101
	10001
	11101
	
	CountDown
	transparent

	CountDown2
	transparent
	
	hasMoved
	Transparent
	
	hasMoved2
	Transparent
	
	kicked
	Transparent
	
	Mud
	brown darkbrown
	01000
    00010
    01000
    00010
    00000

	upGSoldier
	green gray #d4b504
	...2.
	.001.
	00000
	.000.
	.....

	downGSoldier
	green gray #d4b504
	.....
	.000.
	00000
	.001.
	...2.

	rightGSoldier
	green gray #d4b504
	..0..
	.000.
	.000.
	.0012
	..0..

	leftGSoldier
	green gray #d4b504
	..0..
	.000.
	.000.
	2100.
	..0..

	BeamVert
	White Yellow
	.101.
	.101.
	.101.
	.101.
	.101.

	BeamHor
	White Yellow
	.....
	11111
	00000
	11111
	.....

	Door1
	#3b3b39 Red
	..00.
	..0..
	.101.
	..0..
	.00..

	Door1Open
	#3b3b39 Red
	1000.
	.....
	.....
	.....
	.0001

	Door2
	Blue DarkBlue
	00000
	01010
	00000
	01010
	00000

	Door2Open
	Blue
	00000
	0...0
	0...0
	0...0
	00000

	Door3
	Green DarkGreen
	00000
	01010
	00000
	01010
	00000

	Door3Open
	Green
	00000
	0...0
	0...0
	0...0
	00000

	Key1
	DarkGrey Red
	..00.
	..0..
	..1..
	.0.0.
	..0..

	Key2
	Blue Grey
	.....
	.100.
	.100.
	.100.
	.....

	Key3
	Green Grey
	.....
	.100.
	.100.
	.100.
	.....

	PlayerSprKey1
	Red
	0....
	.....
	.....
	.....
	.....

	PlayerSprKey2
	Blue
	.....
	0....
	.....
	.....
	.....

	PlayerSprKey3
	Green
	.....
	.....
	0....
	.....
	.....
	
	Target
	Yellow
	0...0
	.0.0.
	..0..
	.0.0.
	0...0

	upSoldierBuffer
	transparent
	downSoldierBuffer
	transparent
	leftSoldierBuffer
	transparent
	rightSoldierBuffer
	transparent
    
    MovableBuffer
	transparent
    FloorBuffer
	transparent
    MainWallBuffer
	transparent
    VerticalSecondaryWallBuffer
	transparent
    HorizontalSecondaryWallBuffer
	transparent
    TSecondaryWallBuffer
	transparent
    RightTSecondaryWallBuffer
	transparent
    InverseTSecondaryWallBuffer
	transparent
    leftTSecondaryWallBuffer
	transparent
    CrossSecondaryWallBuffer
	transparent

    isCellLevel
	transparent
    isDinerLevel
	transparent
    isPatioLevel
	transparent
    isHQLevel
	transparent
`

var legend_and_sounds = `
    =======
	LEGEND
	=======

    (REFERENCES)
	playerSpr = upPlayer or downPlayer or leftPlayer or rightPlayer
	buffers = upSoldierBuffer or downSoldierBuffer or leftSoldierBuffer or rightSoldierBuffer or FloorBuffer or isCellLevel or isDinerLevel or isPatioLevel or isHQLevel
	Enemy = upGSoldier or downGSoldier or leftGSoldier or rightGSoldier
	GSoldier = upGSoldier or downGSoldier or leftGSoldier or rightGSoldier
	upSoldier = upGSoldier
	downSoldier = downGSoldier
	leftSoldier = leftGSoldier 
	rightSoldier = rightGSoldier
	vSoldier = upsoldier or downsoldier
	hSoldier = rightsoldier or leftsoldier
	Light = BeamVert or BeamHor 
	Hlight = BeamHor 
	Vlight = BeamVert 
	SoldierHBox = gsoldier or light

	BeamHor0 = BeamHor
	BeamHor1 = BeamHor
	BeamHor2 = BeamHor
	BeamVert0 = BeamVert
	BeamVert1 = BeamVert
	BeamVert2 = BeamVert

	Movables = Crate or MovableTable or MovableBarrel or MovableBuffer
	
	Floors = BlackBackground or FloorCells or FloorDiner or FloorPatio
    WallBuffers = MainWallBuffer or VerticalSecondaryWallBuffer or HorizontalSecondaryWallBuffer or TSecondaryWallBuffer or RightTSecondaryWallBuffer or InverseTSecondaryWallBuffer or leftTSecondaryWallBuffer or CrossSecondaryWallBuffer
	Walls = Wall or WallCells or VerticalCellWall or HorizontalCellWall or RightTCellWall or TCellWall or InvertedTCellWall or WallDiner or VerticalDinerWall or RightTDinerWall or TDinerWall or InvertedTDinerWall or HorizontalDinerWall or WallPatio
	
    Key = Key1 or Key2 or Key3
	KeyDoor = Door1 or Door2 or Door3
	DoorDown = Door1Open or Door2Open or Door3Open
	PlayerKey = PlayerSprKey3 or PlayerSprKey2 or PlayerSprKey1
	
	Solid = Walls or Movables or Enemy or Target
	
	Number = 0 or 1 or 2 or 3 or 4 or 5 or 6 or 7 or 8 or 9
    
    (VARIABLES)
	. = FloorBuffer
	- = Background
	
	(Cells Section variables)
	m = Mud
	# = VerticalSecondaryWallBuffer and FloorBuffer
	% = RightTCellWall and FloorBuffer
	@ = TCellWall and FloorBuffer
	& = InvertedTCellWall and FloorBuffer
	$ = HorizontalSecondaryWallBuffer and FloorBuffer
	! = MainWallBuffer
	p = rightPlayer and FloorBuffer
	l = downPlayer and FloorBuffer
	Q = Key1 and FloorBuffer
	W = Door1 and FloorBuffer
	
	
	t = MovableBuffer and FloorBuffer
	a = TimerPointer and player and isCellLevel and BlackBackground
	b = TimerPointer and player and isDinerLevel and BlackBackground
	c = TimerPointer and player and isPatioLevel and BlackBackground
	d = TimerPointer and player and isHQLevel and BlackBackground
	F = upGSoldier and FloorBuffer
	G = rightGSoldier and FloorBuffer
	h = leftGSoldier and FloorBuffer

	(Key_Door entities)
	j = Key2 and FloorBuffer
	S = Door2 and FloorBuffer
	Z = Key3 and FloorBuffer
	X = Door3 and FloorBuffer
	
	y = target and FloorBuffer
	
	=======
	SOUNDS
	=======

	sfx0 93446702 (normal step)
	sfx1 89209507 (mud extra step)
	sfx2 63223300 (pickup key)
	sfx3 76492101 (open door)
	sfx4 36167302 (kick)
	sfx5 85135704 (found)
	sfx6 
	sfx7
	sfx8
	sfx9

`

var collisions = `
	================
	COLLISIONLAYERS
	================
	
	Background 
	Floors
	Mud
	Light Key target
	Walls PlayerSpr Enemy KeyDoor
	Found DoorDown
	PlayerSprKey1
	PlayerSprKey2
	PlayerSprKey3
	Movables
	TimerPointer
	Number
	hasMoved 
	hasMoved2
	kicked
	CountDown 
	CountDown2
	Player
	buffers
    WallBuffers

    `

var rules = `
    ======
	RULES
	======

	[Found] [> Player]-> restart
	[Found] -> restart

    (Map replacing)
	[isCellLevel] [FloorBuffer] -> [isCellLevel] [Floorcells]
	[isDinerLevel] [FloorBuffer] -> [isDinerLevel] [FloorDiner] 
	[isPatioLevel] [FloorBuffer] -> [isPatioLevel] [FloorPatio]
	[isHQLevel] [FloorBuffer] -> [isHQLevel] [Floorcells] (TODO)

    [isCellLevel] [ MainWallBuffer ] -> [isCellLevel] [ WallCells ]
    [isDinerLevel] [ MainWallBuffer ] -> [isDinerLevel] [ WallDiner ]
    [isPatioLevel] [ MainWallBuffer ] -> [isPatioLevel] [ WallPatio ]
    [isHQLevel] [ MainWallBuffer ] -> [isHQLevel] [ MainWallBuffer ] (TODO)

    [isDinerLevel] [ MovableBuffer ] -> [isDinerLevel] [ MovableTable ]
    [isPatioLevel] [ MovableBuffer ] -> [isPatioLevel] [ MovableBarrel ]
    [isHQLevel] [ MovableBuffer ] -> [isHQLevel] [ MovableBuffer ] (TODO)

    [isCellLevel] [ VerticalSecondaryWallBuffer ] -> [isCellLevel] [ VerticalCellWall ]
    [isDinerLevel] [ VerticalSecondaryWallBuffer ] -> [isDinerLevel] [ VerticalDinerWall ]
    [isPatioLevel] [ VerticalSecondaryWallBuffer ] -> [isPatioLevel] [ VerticalCellWall ] 
    [isHQLevel] [ VerticalSecondaryWallBuffer ] -> [isHQLevel] [ VerticalSecondaryWallBuffer ] (TODO)
    [isCellLevel] [ HorizontalSecondaryWallBuffer ] -> [isCellLevel] [ HorizontalCellWall ] 
    [isDinerLevel] [ HorizontalSecondaryWallBuffer ] -> [isDinerLevel] [ HorizontalDinerWall ]
    [isPatioLevel] [ HorizontalSecondaryWallBuffer ] -> [isPatioLevel] [ HorizontalSecondaryWallBuffer ] (TODO)
    [isHQLevel] [ HorizontalSecondaryWallBuffer ] -> [isHQLevel] [ HorizontalSecondaryWallBuffer ] (TODO)
    [isCellLevel] [ TSecondaryWallBuffer ] -> [isCellLevel] [ TSecondaryWallBuffer ] (TODO)
    [isDinerLevel] [ TSecondaryWallBuffer ] -> [isDinerLevel] [ TDinerWall ]
    [isPatioLevel] [ TSecondaryWallBuffer ] -> [isPatioLevel] [ TSecondaryWallBuffer ] (TODO)
    [isHQLevel] [ TSecondaryWallBuffer ] -> [isHQLevel] [ TSecondaryWallBuffer ] (TODO)
    [isCellLevel] [ RightTSecondaryWallBuffer ] -> [isCellLevel] [ RightTSecondaryWallBuffer ] (TODO)
    [isDinerLevel] [ RightTSecondaryWallBuffer ] -> [isDinerLevel] [ RightTDinerWall ]
    [isPatioLevel] [ RightTSecondaryWallBuffer ] -> [isPatioLevel] [ RightTSecondaryWallBuffer ] (TODO)
    [isHQLevel] [ RightTSecondaryWallBuffer ] -> [isHQLevel] [ RightTSecondaryWallBuffer ] (TODO)
    [isCellLevel] [ InverseTSecondaryWallBuffer ] -> [isCellLevel] [ InverseTSecondaryWallBuffer ] (TODO)
    [isDinerLevel] [ InverseTSecondaryWallBuffer ] -> [isDinerLevel] [ InvertedTDinerWall ]
    [isPatioLevel] [ InverseTSecondaryWallBuffer ] -> [isPatioLevel] [ InverseTSecondaryWallBuffer ] (TODO)
    [isHQLevel] [ InverseTSecondaryWallBuffer ] -> [isHQLevel] [ InverseTSecondaryWallBuffer ] (TODO)
    [isCellLevel] [ leftTSecondaryWallBuffer ] -> [isCellLevel] [ leftTSecondaryWallBuffer ] (TODO)
    [isDinerLevel] [ leftTSecondaryWallBuffer ] -> [isDinerLevel] [ leftTSecondaryWallBuffer ] (TODO)
    [isPatioLevel] [ leftTSecondaryWallBuffer ] -> [isPatioLevel] [ leftTSecondaryWallBuffer ] (TODO)
    [isHQLevel] [ leftTSecondaryWallBuffer ] -> [isHQLevel] [ leftTSecondaryWallBuffer ] (TODO)
    [isCellLevel] [ CrossSecondaryWallBuffer ] -> [isCellLevel] [ CrossSecondaryWallBuffer ] (TODO)
    [isDinerLevel] [ CrossSecondaryWallBuffer ] -> [isDinerLevel] [ CrossSecondaryWallBuffer ] (TODO)
    [isPatioLevel] [ CrossSecondaryWallBuffer ] -> [isPatioLevel] [ CrossSecondaryWallBuffer ] (TODO)
    [isHQLevel] [ CrossSecondaryWallBuffer ] -> [isHQLevel] [ CrossSecondaryWallBuffer ] (TODO)
	
	(Movement)
	[> Player] [PlayerSpr] -> [Player] [> PlayerSpr] sfx0

	(player sprite rotation)
	[ up PlayerSpr no upPlayer ] -> [ up upPlayer ]
	[ down PlayerSpr no downPlayer ] -> [down downPlayer ]
	[ left PlayerSpr no leftPlayer ] -> [left leftPlayer ]
	[ right PlayerSpr no rightPlayer ] -> [right rightPlayer ]
	
	(collisions pass time)
	[> PlayerSpr | Movables ] -> [PlayerSpr | Movables ]
	[> PlayerSpr | Wall] -> [PlayerSpr | Wall] 
	[> PlayerSpr no PlayerKey | KeyDoor] -> [PlayerSpr no PlayerKey | KeyDoor] 

	(kick crate)
	[action Player] [ PlayerSpr | Movables | no solid] -> [Player] [action PlayerSpr | | Movables] sfx4

	(walk mud)
	[> PlayerSpr Mud] [] -> [ > PlayerSpr Mud] [hasMoved2] sfx1

	( patrol up down or left right, depends on starting position )
	right [rightGSoldier | no solid] -> [ > rightGSoldier | no solid]
	left [leftGSoldier | no solid] -> [> leftGSoldier | no solid]
	up [upGSoldier | no solid] -> [ > upGSoldier | no solid]
	down [downGSoldier | no solid] -> [> downGSoldier | no solid]

	(Enemy G Soldier rotation per frame )
	left [ no solid | leftGSoldier | | | solid ]  ->  [ no solid | rightSoldierBuffer | | | solid]
	right [ no solid |rightGSoldier | | | solid ] ->  [ no solid | leftSoldierBuffer | | | solid]
	up [ upGSoldier | | | solid ] ->  [ downSoldierBuffer | | | solid]
	down [ downGSoldier | | | solid ] ->  [ upSoldierBuffer | | | solid]
	left [ leftGSoldier | solid ] ->  [ rightSoldierBuffer | solid]
	right [ rightGSoldier | solid ] ->  [ leftSoldierBuffer | solid]
	up [ upGSoldier | solid ] ->  [ downSoldierBuffer | solid]
	down [ downGSoldier | solid ] ->  [ upSoldierBuffer | solid]
	left [ leftGSoldier | | solid ] ->  [ rightSoldierBuffer | | solid]
	right [ rightGSoldier | |  solid ] ->  [ leftSoldierBuffer | | solid]
	up [ upGSoldier | | solid ] ->  [ downSoldierBuffer | | solid]
	down [ downGSoldier | | solid ] ->  [ upSoldierBuffer|  | solid]
	[ upSoldierBuffer ] ->  [ upGSoldier ]
	[ rightSoldierBuffer ] ->  [rightGSoldier]
	[ leftSoldierBuffer ] ->  [leftGSoldier]
	[ downSoldierBuffer ] ->  [downGSoldier]
    

	(light beam cleanup after rotating)
	[ no vsoldier | vlight  ] ->  [no vsoldier | ]
	[ no hsoldier | hlight  ] ->  [no hsoldier | ]

	(Light casting onto the direction the Gsoldier is looking)
	late right[rightGSoldier|no solid no Light] -> [rightGSoldier | BeamHor]
	late right[rightGSoldier|Light|no solid no Light] -> [rightGSoldier | BeamHor | BeamHor]
	late up[upGSoldier|no solid no Light] -> [upGSoldier | BeamVert]
	late up[upGSoldier|Light|no solid no Light] -> [upGSoldier | BeamVert | BeamVert]
	late left [leftGSoldier|no solid no Light] -> [leftGSoldier | BeamHor]
	late left[leftGSoldier|Light|no solid no Light] -> [leftGSoldier | BeamHor | BeamHor]
	late down [downGSoldier|no solid no Light] -> [downGSoldier | BeamVert]
	late down [downGSoldier|Light|no solid no Light] ->  [downGSoldier | BeamVert | BeamVert]
		
	(convert the action state to an object)
	[hasMoved] -> []
	[moving PlayerSpr] [] -> [moving PlayerSpr] [hasMoved]
    [action Player] [] -> [action Player] [kicked]
	
	(Timer)
	(Decrease when player moves)
	STARTLOOP
	late [TimerPointer Player | no 0 | 0] [PlayerSpr] [hasMoved] -> [TimerPointer Player | | 9 Countdown] [PlayerSpr] []
	late [TimerPointer Player | | 1] [PlayerSpr] [hasMoved] -> [TimerPointer Player | | 0] [PlayerSpr] []
	late [TimerPointer Player | | 2] [PlayerSpr] [hasMoved] -> [TimerPointer Player | | 1] [PlayerSpr] []
	late [TimerPointer Player | | 3] [PlayerSpr] [hasMoved] -> [TimerPointer Player | | 2] [PlayerSpr] []
	late [TimerPointer Player | | 4] [PlayerSpr] [hasMoved] -> [TimerPointer Player | | 3] [PlayerSpr] []
	late [TimerPointer Player | | 5] [PlayerSpr] [hasMoved] -> [TimerPointer Player | | 4] [PlayerSpr] []
	late [TimerPointer Player | | 6] [PlayerSpr] [hasMoved] -> [TimerPointer Player | | 5] [PlayerSpr] []
	late [TimerPointer Player | | 7] [PlayerSpr] [hasMoved] -> [TimerPointer Player | | 6] [PlayerSpr] []
	late [TimerPointer Player | | 8] [PlayerSpr] [hasMoved] -> [TimerPointer Player | | 7] [PlayerSpr] []
	late [TimerPointer Player | | 9 no CountDown] [PlayerSpr] [hasMoved] -> [TimerPointer Player | | 8] [PlayerSpr] []
	(Tens digit countdown)
	late right [1 | CountDown] -> [0 | ]
	late right [2 | CountDown] -> [1 | ]
	late right [3 | CountDown] -> [2 | ]
	late right [4 | CountDown] -> [3 | ]
	late right [5 | CountDown] -> [4 | ]
	late right [6 | CountDown] -> [5 | ]
	late right [7 | CountDown] -> [6 | ]
	late right [8 | CountDown] -> [7 | ]
	late right [9 | CountDown] -> [8 | ]
	late [hasMoved] -> []
	late [hasMoved2] -> [hasMoved]
	late [kicked] [no hasMoved2] -> [hasMoved] []
	ENDLOOP


	(Doors with Keys)
	[> PlayerSpr PlayerSprKey1] -> [> PlayerSpr > PlayerSprKey1]
	[> PlayerSpr PlayerSprKey2] -> [> PlayerSpr > PlayerSprKey2]
	[> PlayerSpr PlayerSprKey3] -> [> PlayerSpr > PlayerSprKey3]

	[ > PlayerSpr PlayerSprKey1 | Door1 ] -> [ | PlayerSpr Door1Open] sfx3
	[ > PlayerSpr PlayerSprKey2 | Door2 ] -> [ | PlayerSpr Door2Open] sfx3
	[ > PlayerSpr PlayerSprKey3 | Door3 ] -> [ | PlayerSpr Door3Open] sfx3
	late [PlayerSpr no PlayerKey] [PlayerKey] -> [PlayerSpr PlayerKey] []

	late [PlayerSpr Key1] -> [PlayerSpr PlayerSprKey1] sfx2
	late [PlayerSpr Key2] -> [PlayerSpr PlayerSprKey2] sfx2
	late [PlayerSpr Key3] -> [PlayerSpr PlayerSprKey3] sfx2

	
	(Turns player into Found)
	late [Found] -> []
	late [ 0 | 0 ] [PlayerSpr] [TimerPointer Player] -> [0 | 0] [PlayerSpr Found] [TimerPointer Player] sfx5
	late [PlayerSpr Soldierhbox] -> [PlayerSpr Found] sfx5

	late [PlayerSpr Target] -> win

    ======
	WINCONDITIONS
	======
`

var levels = `
    =======
	LEVELS
	=======
	
	message I will get out, This time it will be different
	
	-!!!a99!!!!!!!!!!!!!-
	-!........#........!-
	-!........#........!-
	-!........#........!-
	-!........#........!-
	-!$$$$$$$$%........!-
	-!........#........!-
	-!..P.....W........!-
	-!........#........!-
	-!......Q.#........!-
	-!!!!!!!!!!yyyyyyyy!-
	
	message They wont get me if I move just enough not to trigger the alarms
	
	-!!!!!!a40!!!!!!!!!!!-
	-!.l..#....#...#....!-
	-!....#....#...W....y-
	-!....&$$$$&...#....y-
	-!.............#....!-
	-!$$$$@$$$$@...!!!!!!-
	-!....#....#........!-
	-!....#....#......Q.!-
	-!!!!!!!!!!!!!!!!!!!!-
	
	message The guards are always asleep at this time. They move by muscle memory alone
	
	-!!!a25!!!!!!!!!!!-
	-!!l!!!!!!!!!!!!!!-
	-!..g............y-
	-!.........h.....y-
	-!!!!!!!!.!!!!!!!!-
	-!!!!!!!!!!!!!!!!!-

	message I can wait them out by a wall, but not forever
	
	-!!!!!!a40!!!!!!!!!!!-
	-!!!!!!!!!!!!!!!!!!!!-
	-!....#..Q.#...#....!-
	-!....#....#...W....y-
	-!..$$&$..$&...#....y-
	-!p.........h..#....!-
	-!$.$$@$$.$@...!!!!!!-
	-!....#....#....#...!-
	-!....#....#....#...!-
	-!....#....#..f.#...!-
	-!!!!!!!!!!!!!!!!!!!!-

	message Next is the diner. Here the green tables aren't bolted down, if necessary I can kick them away.
	
	-!!!!!!b25!!!-
	-!!!!!!!!!!!!-
	-!p.........!-
	-!..........!-
	-!$$$$$$$$tt!-
	-!..........!-
	-!$$$$$$$$..!-
	-!..........y-
	-!$$$$$$$$..y-
	-!..........y-
	-!!!!!!!!!!!!-
	
	-!!!!!!b20!!!!-
	-!!!!!!!!!!!!!-
	-!l....h.....y-
	-!ttttt......y-
	-!.tttttttttt!-
	-!!!!!!!!!!!!!-
	
	message In their sleep, they turn around to any obstacle. And tables seem to confuse them.
	
	-!!b25!!-
	-!!!!!!!-
	-!p....!-
	-!.t...!-
	-!..$$$!-
	-!..g..!-
	-!..g..!-
	-!.....!-
	-!$$$..!-
	-!...t.!-
	-!...h.!-
	-!...h.!-
	-!$$$..y-
	-!!!!!!!-
		
	message Next is the yard.
	
	-!!c20!!!!!!!!!-
	-!!!!!!!!!!!!!!-
	-!p...........!-
	-!....mmm.....!-
	-!....mmm.mmmm!-
	-!........mm..y-
	-!!!!!!!!!!!!!!-		

	message Moving through mud is hard. Takes doble the effort for the same distance. I must watch my step and pick the right path.
	
	-!!c20!!!!!!!!!!-
	-!!!!!!!!!!!!!!!-
	-!pm...m...mmmm!-
	-!.m.m.m.m.mmmm!-
	-!.m.m.m.m.mmmm!-
	-!...m...m.....y-
	-!!!!!!!!!!!!!!!-		

	message If any barrels get in the way I can move them
	
	-!!c22!!!!!!!!!!-
	-!!!!!!!!!!!!!!!-
	-!p....t...mmmm!-
	-!.....t.mmmmmm!-
	-!.....t.#mm...!-
	-!.......#.t...y-
	-!!!!!!!!!!!!!!!-		
	
	message Test Level
	
	-!!!c99!!!!!!!!!!!!!-
	-!.................!-
	-!.......g.........!-
	-!.mm..............!-
	-!.mm..............!-
	-!...p...t.........!-
	-!.................!-
	-!.................!-
	-!.q.....W......f..!-
	-!.j.....S.....m...!-
	-!.z.....X....mym..!-
	-!!!!!!!!!!!!!!!!!!!-

	message Thank you for playing!

`

var text = [prelude, objects, legend_and_sounds, collisions, rules, levels].join('\n')