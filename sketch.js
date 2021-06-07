//Assigning variables
var opencard, opencardImg;
var playButton, playButtonImg;
var doraRun, doraRunImg;
var arrow, arrowImg;
var nextLevel, nextLevelImg;

var jungle, jungleImg;
var monkey, monkeyImg;
var lion, lionImg;
var bear, bearImg;
var snake, snakeImg;

var l1, l1Img;
var l2, l2Img;
var l3, l3Img;

var fort, fortImg;
var thorn, thornImg;
var invisibleGround;

var doraWalk, doraWalkImg;
var restart, restartImg;
var sadDoraImg;

var hill, hillImg;
var dora, doraImg;
var swiper,swiperImg;
var swiper1,swiper1Img;
var swiper2,swiper2Img;
var swiper3,swiper3Img;

var final;
var paddle1, paddle2;
var gameOver, gameOverImg;
var obstaclesGroup;
var end, endImg;
var treasure, treasureImg;
var hand, handImg;
var paddle3, paddle4, paddle5

var bgMusic;
let sound;

var score = 0;
var gameState  = "initialState";

var textTreasure = 0;

var dummy = 0;

//Loading images
function preload() {
    
    opencardImg   = loadImage("sprites/Openind Card.png");
    playButtonImg = loadImage("sprites/Play button.png");

    l1Img         = loadImage("sprites/L1.png");
    l2Img         = loadImage("sprites/L2.png");
    l3Img         = loadImage("sprites/L3.png");

    fortImg       = loadImage("sprites/Fort.png");
    doraRunImg    = loadAnimation("sprites/Picture1.png", "sprites/Picture2.png");
    thornImg      = loadImage("sprites/thorn.png");
    lostImg       = loadImage("sprites/Lost.png");
    nextLevelImg  = loadImage("sprites/nextLevel.png");
    arrowImg      = loadImage("sprites/arrow.png");
    gameOverImg   = loadImage("sprites/gameOver.png"); 
    restartImg    = loadImage("sprites/restart.png"); 
    sadDoraImg    = loadImage("sprites/sadDora.png"); 

    jungleImg     = loadImage("sprites/Jungle.png");
    monkeyImg     = loadImage("sprites/Monkey.png");
    lionImg       = loadImage("sprites/Lion.png");
    bearImg       = loadImage("sprites/Bear.png");
    snakeImg      = loadImage("sprites/Snake.png");
    doraWalkImg   = loadImage("sprites/Dora walk.png");
    treasureImg   = loadImage("sprites/Treasure.png");

    hillImg       = loadImage("sprites/Hill.png");
    doraImg       = loadImage("sprites/dora.png");
    swiperImg     = loadImage("sprites/Swiper.png");
    swiper1Img    = loadImage("sprites/Swiper.png");
    swiper2Img    = loadImage("sprites/Swiper2.png");
    swiper3Img    = loadImage("sprites/Swiper2.png");

    endImg        = loadImage("sprites/Endcard.png");
    handImg       = loadImage("sprites/hand.png");
    mazeImg = loadImage("sprites/Maze.png");
    
    //soundFormats('mp3');
    sound = loadSound("Dora.mp3");

}

//Creating sprites using variables
function setup() {
    createCanvas(windowWidth, windowHeight);

    
  
    obstaclesGroup = createGroup();

    openCard = createSprite(windowWidth/2, windowHeight/2);
    openCard.addImage("card", opencardImg);
    openCard.scale = 1.4;

    playButton = createSprite(width-130, height-530, 100, 100);
    playButton.addImage("play", playButtonImg);
    playButton.scale = 0.099;

    l1 = createSprite(400,height/2);
    l1.addImage("l1", l1Img);
    l1.scale = 0.7;
    l1.visible = false;

    l2 = createSprite(700,height/2);
    l2.addImage("l2", l2Img);
    l2.scale = 0.7;
    l2.visible = false;

    l3 = createSprite(1000,height/2);
    l3.addImage("l3", l3Img);
    l3.scale = 0.7;
    l3.visible = false;

    fort = createSprite(width-580, windowHeight/2, 100, 100);
    fort.addImage("fort", fortImg);
    fort.scale = 2.3;
    fort.visible = false;
    fort.velocityX = -1.2;

    doraRun = createSprite(width-1150, height-50, 400, 400);
    doraRun.addAnimation("doraRun", doraRunImg);
    doraRun.addAnimation("sadDora",sadDoraImg);
    doraRun.scale = 0.6;
    doraRun.visible = false; 
    doraRun.setCollider("rectangle",0,0,400,400); 

    invisibleGround = createSprite(width/2, height-20, width, 20);
    invisibleGround.visible = false;

    gameOver = createSprite(width/2, height/2, 10, 10);
    gameOver.addImage("gameOver", gameOverImg);
    gameOver.visible = false;

    nextLevel = createSprite(width/2, windowHeight/2, 100, 100);
    nextLevel.addImage("nextLevel", nextLevelImg);
    nextLevel.visible = false;

    arrow = createSprite(width/2, height/2+150, 100, 100);
    arrow.addImage("arrow", arrowImg);
    arrow.scale   = 0.3;
    arrow.visible = false;

    jungle = createSprite(width/2,height/2);
    jungle.addImage("jungle", jungleImg);
    jungle.scale   = 2.5;
    jungle.visible = false;

    monkey = createSprite(width/2+320, height-55, 400, 400);
    monkey.addImage("monkey", monkeyImg);
    monkey.scale = 0.2;
    monkey.visible = false;

    lion = createSprite(width/2, height/2-85, 400, 400);
    lion.addImage("lion", lionImg);
    lion.scale     = 0.07;
    lion.visible   = false;

    bear = createSprite(width/2, height/3-45, 400, 400);
    bear.addImage("bear", bearImg);
    bear.scale     = 0.09;
    bear.visible   = false;

    snake = createSprite(width/2+55, height/2-265, 400, 400);
    snake.addImage("snake", snakeImg);
    snake.scale     = 0.06;
    snake.visible   = false;

    doraWalk = createSprite(width/2+470, height/2-35, 10, 500);
    doraWalk.addImage("doraWalk", doraWalkImg);
    doraWalk.scale   = 0.062;
    doraWalk.visible = false;

    hill = createSprite(windowWidth/2, windowHeight/2);
    hill.addImage("hill", hillImg);
    hill.scale   = 3.6;
    hill.visible = false;

    dora = createSprite(width/2-450, height/2, 100, 100);
    dora.addImage("dora", doraImg);
    dora.scale   = 0.2;
    dora.visible = false;

    restart = createSprite(width/2, height/2 + 130, 50, 50);
    restart.addImage("reset", restartImg);
    restart.scale = 0.3;
    restart.visible = false;

    swiper = createSprite(width/2-190, height/2-300, 100, 100);
    swiper.addImage("swiper", swiperImg);
    swiper.scale     = 0.3;
    swiper.visible   = false;

    swiper1 = createSprite(width/2+250, height/7-30, 100, 100);
    swiper1.addImage("swiper1", swiperImg);
    swiper1.scale   = 0.3;
    swiper1.visible = false;

    swiper2 = createSprite(width/2+460, height, 100, 100);
    swiper2.addImage("swiper2", swiper2Img);
    swiper2.scale   = 0.3;
    swiper2.visible = false;

    swiper3 = createSprite(width/2+40, height, 100, 100);
    swiper3.addImage("swiper3", swiper2Img);
    swiper3.scale   = 0.3;
    swiper3.visible = false;

    paddle1 = createSprite(width/2, height/2-330, 1300, 10);
    paddle1.visible = false;

    paddle2 = createSprite(width/2, height/2+330, 1300, 10);
    paddle2.visible = false;

    final = createSprite(width/2+585, height/2, 150, 1700);
    final.visible = false;
    final.shapeColor = "#58A32C";

    hand = createSprite(width/2+470, height/2-100, 10, 10);
    hand.addImage(handImg);
    hand.scale = 0.2;
    hand.visible = false;

    paddle3 = createSprite(width/2+480, height/2-45, 5, 55);
    paddle3.visible = false;

    paddle4 = createSprite(width/2+440, height/2-70, 75, 5);
    paddle4.visible = false;

    paddle5 = createSprite(width/2+440, height/2-20, 80, 5);
    paddle5.visible = false;

    one = createSprite(width/2-317, height/2-200, 05, 252);
    one.shapeColor = "brown";
    one.visible = false;

    two = createSprite(width/2-400, height/2-16, 05,612);
    two.shapeColor = "brown";
    two.visible = false;

    three = createSprite(width/2-15, height/2-322, 773, 05);
    three.shapeColor = "brown";
    three.visible = false;

    four = createSprite(width/2-200, height/2+290, 400, 05);
    four.shapeColor = "brown";
    four.visible = false;

    five = createSprite(width/2+368, height/2-200, 05, 265);
    five.shapeColor = "brown";
    five.visible = false;

    six = createSprite(width/2+368, height/2+120, 05, 277);
    six.shapeColor = "brown";
    six.visible = false;

    seven = createSprite(width/2+330, height/2+50, 05, 243);
    seven.shapeColor = "brown";
    seven.visible = false;

    eight = createSprite(width/2+330, height/2+240, 05, 35);
    eight.shapeColor = "brown";
    eight.visible = false;

    nine = createSprite(width/2+330, height/2-160, 05, 105);
    nine.shapeColor = "brown";
    nine.visible = false;

    ten = createSprite(width/2+215, height-35, 370, 05);
    ten.shapeColor = "brown";
    ten.visible = false;

    eleven = createSprite(width/2+290, height/3+58, 05, 263);
    eleven.shapeColor = "brown";
    eleven.visible = false;

    twelve = createSprite(width/2+255, height/2-13, 05, 260);
    twelve.shapeColor = "brown";
    twelve.visible = false;

    thirteen = createSprite(width/2+220, height/2-10, 05, 273);
    thirteen.shapeColor = "brown";
    thirteen.visible = false;

    fourteen = createSprite(width/2+185, height/3+25, 05, 40);
    fourteen.shapeColor = "brown";
    fourteen.visible = false;

    fifteen = createSprite(width/2+185, height/2+60, 05, 180);
    fifteen.shapeColor = "brown";
    fifteen.visible = false;

    sixteen = createSprite(width/2+148, height/2-270, 05, 105);
    sixteen.shapeColor = "brown";
    sixteen.visible = false;

    seventeen = createSprite(width/2+110, height/2-215, 05, 75);
    seventeen.shapeColor = "brown";
    seventeen.visible = false;

    eighteen = createSprite(width/2-35, height/2-160, 05, 37);
    eighteen.shapeColor = "brown";
    eighteen.visible = false;

    nineteen = createSprite(width/2+75, height/2-195, 05, 37);
    nineteen.shapeColor = "brown";
    nineteen.visible = false;

    twenty = createSprite(width/2+37, height-120, 05, 37);
    twenty.shapeColor = "brown";
    twenty.visible = false;

    twentyone = createSprite(width/2, height-120, 05, 37);
    twentyone.shapeColor = "brown";
    twentyone.visible = false;

    twentytwo = createSprite(width/2+37, height/2-230, 05, 38);
    twentytwo.shapeColor = "brown";
    twentytwo.visible = false;

    twentythree = createSprite(width/2, height/2+40, 05, 70);
    twentythree.shapeColor = "brown";
    twentythree.visible = false;

    twentyfour = createSprite(width/2-35, height/2+60, 05, 38);
    twentyfour.shapeColor = "brown";
    twentyfour.visible = false;

    twentyfive = createSprite(width/2, height/2-230, 05, 38);
    twentyfive.shapeColor = "brown";
    twentyfive.visible = false;

    twentysix = createSprite(width/2-70, height/2+210, 05, 105);
    twentysix.shapeColor = "brown";
    twentysix.visible = false;

    twentyseven = createSprite(width/2-35, height-105, 05, 80);
    twentyseven.shapeColor = "brown";
    twentyseven.visible = false;

    twentyeight = createSprite(width/2-220, height/2-180, 05, 73);
    twentyeight.shapeColor = "brown";
    twentyeight.visible = false;

    twentynine = createSprite(width/2-220, height/2-10, 05, 104);
    twentynine.shapeColor = "brown";
    twentynine.visible = false;

    thirty = createSprite(width/2-220, height-160, 05, 180);
    thirty.shapeColor = "brown";
    thirty.visible = false;

    thirtyone = createSprite(width/2-255, height-195, 05, 250);
    thirtyone.shapeColor = "brown";
    thirtyone.visible = false;

    thirtytwo = createSprite(width/2-255, height/2-160, 05, 250);
    thirtytwo.shapeColor = "brown";
    thirtytwo.visible = false;

    hundredandtwelve = createSprite(width/2-290, height/2+90, 05, 244);
    hundredandtwelve.shapeColor = "brown";
    hundredandtwelve.visible = false;

    thirtythree = createSprite(width/2-290, height/2-235, 05, 107);
    thirtythree.shapeColor = "brown";
    thirtythree.visible = false;

    thirtyfour = createSprite(width/2-290, height/2-105, 05, 71);
    thirtyfour.shapeColor = "brown";
    thirtyfour.visible = false;

    thirtyfive = createSprite(width/2-330, height/2-120, 05, 106);
    thirtyfive.shapeColor = "brown";
    thirtyfive.visible = false;

    thirtysix = createSprite(width/2-327, height/2-230, 05, 46);
    thirtysix.shapeColor = "brown";
    thirtysix.visible = false;

    thirtyseven = createSprite(width/2-365, height/2-305, 05, 38);
    thirtyseven.shapeColor = "brown";
    thirtyseven.visible = false;

    thirtyeight = createSprite(width/2-365, height/2-140, 05, 220);
    thirtyeight.shapeColor = "brown";
    thirtyeight.visible = false;

    fourty = createSprite(width/2-365, height/2+60, 05, 107);
    fourty.shapeColor = "brown";
    fourty.visible = false;

    fourtyone = createSprite(width/2-365, height-120, 05, 104);
    fourtyone.shapeColor = "brown";
    fourtyone.visible = false;
    
    fourtytwo = createSprite(width/2-325, height-230, 05, 260);
    fourtytwo.shapeColor = "brown";
    fourtytwo.visible = false;

    fourtyfive = createSprite(width/2+400, height-190, 05, 320);
    fourtyfive.shapeColor = "brown";
    fourtyfive.visible = false;

    fourtysix = createSprite(width/2+170, height-70, 405, 05);
    fourtysix.shapeColor = "brown";
    fourtysix.visible = false;

    fourtyseven = createSprite(width/2+250, height/9-30, 140, 05);
    fourtyseven.shapeColor = "brown";
    fourtyseven.visible = false;

    fourtyeight = createSprite(width/2-50, height/9+80, 250, 05);
    fourtyeight.shapeColor = "brown";
    fourtyeight.visible = false;

    fourtynine = createSprite(width/2-70, height/9-30, 290, 05);
    fourtynine.shapeColor = "brown";
    fourtynine.visible = false;

    fifty = createSprite(width/2+275, height/9+5, 185, 05);
    fifty.shapeColor = "brown";
    fifty.visible = false;

    fiftyone = createSprite(width/2-325, height/8-40, 80, 05);
    fiftyone.shapeColor = "brown";
    fiftyone.visible = false;

    fiftytwo = createSprite(width/2-180, height/8+180, 80, 05);
    fiftytwo.shapeColor = "brown";
    fiftytwo.visible = false;

    fiftythree = createSprite(width/2+255, height-160, 05, 40);
    fiftythree.shapeColor = "brown";
    fiftythree.visible = false;

    fiftyfour = createSprite(width/2-310, height/3-68, 42, 05);
    fiftyfour.shapeColor = "brown";
    fiftyfour.visible = false;

    fiftyfive = createSprite(width/2-270, height/2-30, 42, 05);
    fiftyfive.shapeColor = "brown";
    fiftyfive.visible = false;

    fiftysix = createSprite(width/2-310, height/3+40, 42, 05);
    fiftysix.shapeColor = "brown";
    fiftysix.visible = false;

    fiftyseven = createSprite(width/2-383, height/2+5, 42, 05);
    fiftyseven.shapeColor = "brown";
    fiftyseven.visible = false;

    fiftyeight = createSprite(width/2-345, height/2-30, 42, 05);
    fiftyeight.shapeColor = "brown";
    fiftyeight.visible = false;

    fiftynine= createSprite(width/2-200, height/2+260, 42, 05);
    fiftynine.shapeColor = "brown";
    fiftynine.visible = false;

    sixty = createSprite(width/2-345, height/2+115, 42, 05);
    sixty.shapeColor = "brown";
    sixty.visible = false;

    sixtyone = createSprite(width/2-310, height-105, 42, 05);
    sixtyone.shapeColor = "brown";
    sixtyone.visible = false;

    hundredandthirteen = createSprite(width/2-310, height-70, 112, 05);
    hundredandthirteen.shapeColor = "brown";
    hundredandthirteen.visible = false;

    sixtytwo = createSprite(width/2-200, height/5-55, 40, 05);
    sixtytwo.shapeColor = "brown";
    sixtytwo.visible = false;

    hundredandfourteen= createSprite(width/2-345, height/5-55, 40, 05);
    hundredandfourteen.shapeColor = "brown";
    hundredandfourteen.visible = false;

    sixtythree = createSprite(width/2+55, height/5-17, 40, 05);
    sixtythree.shapeColor = "brown";
    sixtythree.visible = false;

    sixtyfour = createSprite(width/2+275, height/2+115, 40, 05);
    sixtyfour.shapeColor = "brown";
    sixtyfour.visible = false;

    sixtyfive = createSprite(width/2+310, height/2+77, 40, 05);
    sixtyfive.shapeColor = "brown";
    sixtyfive.visible = false;

    sixtysix = createSprite(width/2+240, height/2+80, 40, 05);
    sixtysix.shapeColor = "brown";
    sixtysix.visible = false;

    sixtyseven = createSprite(width/2-20, height-140, 40, 05);
    sixtyseven.shapeColor = "brown";
    sixtyseven.visible = false;

    sixtynine = createSprite(width/2-145, height-105, 78, 05);
    sixtynine.shapeColor = "brown";
    sixtynine.visible = false;

    seventy = createSprite(width/2-145, height-140, 78, 05);
    seventy.shapeColor = "brown";
    seventy.visible = false;

    seventytwo = createSprite(width/2+74, height-105, 70, 05);
    seventytwo.shapeColor = "brown";
    seventytwo.visible = false;

    seventythree = createSprite(width/2+240, height-105, 185, 05);
    seventythree.shapeColor = "brown";
    seventythree.visible = false;

    seventyfour = createSprite(width/2+145, height-140, 220, 05);
    seventyfour.shapeColor = "brown";
    seventyfour.visible = false;

    seventyfive = createSprite(width/2+90, height-177, 330, 05);
    seventyfive.shapeColor = "brown";
    seventyfive.visible = false;

    seventysix = createSprite(width/2+240, height/5-15, 190, 05);
    seventysix.shapeColor = "brown";
    seventysix.visible = false;

    seventyeight = createSprite(width/2+200, height/4-15, 185, 05);
    seventyeight.shapeColor = "brown";
    seventyeight.visible = false;

    seventynine = createSprite(width/2-20, height/3+40, 180, 05);
    seventynine.shapeColor = "brown";
    seventynine.visible = false;

    eighty = createSprite(width/2+95, height/3-30, 260, 05);
    eighty.shapeColor = "brown";
    eighty.visible = false;

    eightyone = createSprite(width/2-70, height/5-55, 143, 05);
    eightyone.shapeColor = "brown";
    eightyone.visible = false;

    eightytwo = createSprite(width/2-125, height/4+60, 250, 05);
    eightytwo.shapeColor = "brown"
    eightytwo.visible = false;

    eightythree = createSprite(width/2-110, height/3+150, 141, 05);
    eightythree.shapeColor = "brown";
    eightythree.visible = false;

    eightyfour = createSprite(width/2-110, height/3+115, 220, 05);
    eightyfour.shapeColor = "brown";
    eightyfour.visible = false;

    eightyfive = createSprite(width/2+110, height/3+115, 143, 05);
    eightyfive.shapeColor = "brown";
    eightyfive.visible = false;

    eightysix = createSprite(width/2-125, height/3+187, 190, 05);
    eightysix.shapeColor = "brown";
    eightysix.visible = false;

    eightyseven = createSprite(width/2+113, height/2-105, 150, 05);
    eightyseven.shapeColor = "brown";
    eightyseven.visible = false;

    eightyeight = createSprite(width/2+150, height/2-70, 71, 05);
    eightyeight.shapeColor = "brown";
    eightyeight.visible = false;

    eightynine = createSprite(width/2+370, height/2-70, 75, 05);
    eightynine.shapeColor = "brown";
    eightynine.visible = false;

    ninety = createSprite(width/2+35, height/2+80, 70, 05);
    ninety.shapeColor = "brown";
    ninety.visible = false;

    ninetyone = createSprite(width/2+130, height/2-33, 110, 05);
    ninetyone.shapeColor = "brown";
    ninetyone.visible = false;

    ninetytwo = createSprite(width/2+70, height/2+40, 140, 05);
    ninetytwo.shapeColor = "brown";
    ninetytwo.visible = false;

    ninetythree = createSprite(width/2-55, height/2-30, 175, 05);
    ninetythree.shapeColor = "brown";
    ninetythree.visible = false;

    ninetyfour = createSprite(width/2-110, height/2-215, 220, 05);
    ninetyfour.shapeColor = "brown";
    ninetyfour.visible = false;

    ninetyfive = createSprite(width/2-150, height/2-140, 144, 05);
    ninetyfive.shapeColor = "brown";
    ninetyfive.visible = false;

    ninetysix = createSprite(width/2-165, height-180, 105, 05);
    ninetysix.shapeColor = "brown";
    ninetysix.visible = false;

    ninetyeight = createSprite(width/2+400, height/2-200, 05, 250);
    ninetyeight.shapeColor = "brown";
    ninetyeight.visible = false;

    ninetynine = createSprite(width/2-15, height/2+115, 325, 05);
    ninetynine.shapeColor = "brown";
    ninetynine.visible = false;

    hundred = createSprite(width/2+183, height/7-33, 05, 43);
    hundred.shapeColor = "brown";
    hundred.visible = false;

    hundredandone = createSprite(width/2+75, height/7-33, 05, 43);
    hundredandone.shapeColor = "brown";
    hundredandone.visible = false;

    hundredandtwo = createSprite(width/2-220, height/7-35, 05, 43);
    hundredandtwo.shapeColor = "brown";
    hundredandtwo.visible = false;

    hundredandthree = createSprite(width/2-145, height/2-50, 05, 43);
    hundredandthree.shapeColor = "brown";
    hundredandthree.visible = false;

    hundredandfour = createSprite(width/2+38, height/2-15, 05, 43);
    hundredandfour.shapeColor = "brown";
    hundredandfour.visible = false;

    hundredandfive = createSprite(width/2+75, height/2-50, 05, 43);
    hundredandfive.shapeColor = "brown";
    hundredandfive.visible = false;

    hundredandsix = createSprite(width/2+220, height-200, 05, 43);
    hundredandsix.shapeColor = "brown";
    hundredandsix.visible = false;

    hundredandseven = createSprite(width/2-180, height-120, 05, 40);
    hundredandseven.shapeColor = "brown";
    hundredandseven.visible = false;

    hundredandeight = createSprite(width/2-110, height-70, 05, 67);
    hundredandeight.shapeColor = "brown";
    hundredandeight.visible = false;

    hundredandnine = createSprite(width/2+147, height-250, 05, 80);
    hundredandnine.shapeColor = "brown";
    hundredandnine.visible = false;

    hundredandfifteen = createSprite(width/2+295, height-160, 05, 110);
    hundredandfifteen.shapeColor = "brown";
    hundredandfifteen.visible = false;

    hundredandten = createSprite(width/2+385, height/2-20, 40, 05);
    hundredandten.shapeColor = "brown";
    hundredandten.visible = false;

    hundredandeleven = createSprite(width/2+93, height/2-250, 40, 05);
    hundredandeleven.shapeColor = "brown";
    hundredandeleven.visible = false;

    win = createSprite(width/2+20, height-10, 30, 20);
    win.visible = false;

}



function draw () {
    
    background("black");

    if(gameState == "initialState"){
        if (mousePressedOver(playButton)) {
           
            playButton.visible = false;
            l1.visible         = true;
            l2.visible         = true;
            l3.visible = true;
            sound.loop();
        }
    
        if(mousePressedOver(l1)){
            openCard.visible = false;
            l1.visible       = false;
            l2.visible       = false;
            l3.visible       = false;
            fort.visible     = true;
            doraRun.visible  = true;
            gameState        = "level1Play";

        }

        if(mousePressedOver(l2)){
            openCard.visible = false;
            l1.visible       = false;
            l2.visible       = false;
            l3.visible       = false;
            gameState        = "level2Play";
            move();
        }

        if(mousePressedOver(l3)){
            openCard.visible = false;
            l1.visible       = false;
            l2.visible       = false;
            l3.visible       = false;
            gameState        = "level3Play";
            stepUp();
        }
    }

    drawSprites();   

    if(gameState == "level1Play"){
        fort.visible = true;
        if(fort.x < 650) {
           fort.x = 700;
        }

         obstacle();

         textSize(35);
         stroke("yellow");
         fill("#ff006e");
         text("SCORE : " + score, width/2-650, height-600);

         textSize(28);
         //stroke("pink");
         fill("brown");
         textFont('Comic Sans Ms');
         text("PRESS SPACE TO JUMP AND REACH 500 TO MOVE TO NEXT LEVEL", width/2-400, height-550);

         if(keyDown("space")) {
            doraRun.velocityY = -12;
            score = score + 1;
         }

         //giving gravity to dora
         doraRun.velocityY = doraRun.velocityY + 5;

         //to make dora stand on the invisible line
         doraRun.collide(invisibleGround);

         if(obstaclesGroup.isTouching(doraRun)){
             gameState = "level1End";
         } 

         if(score > 500) {  
            gameState = "level2Play";
             reset();
         }     
 
         line = createSprite(680, 02, 1300, 10);
         line.visible = false;
         doraRun.collide(line);

    }

    if(gameState == "level1End"){
       fort.visible = false;
       doraRun.changeAnimation("sadDora",sadDoraImg);
       doraRun.scale = 0.23;
       gameOver.visible = true;
       restart.visible = true;
       doraRun.velocityY = 0;
       obstaclesGroup.setLifetimeEach(-1);
       obstaclesGroup.setVelocityXEach(0);

       if(mousePressedOver(restart)) {
        level1reset();
       }
    }

         if(gameState === "level2Play"){

            if(mousePressedOver(arrow)){
                move(); 
             }

        if (keyDown("LEFT_ARROW")) {
            doraWalk.x = doraWalk.x - 6;
        }

        if (keyDown("RIGHT_ARROW")) {
            doraWalk.x = doraWalk.x + 6;
        }

        if (keyDown("UP_ARROW")) {
            doraWalk.y = doraWalk.y - 6;
        }

        if (keyDown("DOWN_ARROW")) {
            doraWalk.y = doraWalk.y + 6;
        }

        if(dummy == 1){
            var m = color(random(0, 255), random(0, 255), random(0, 255));
            win.shapeColor = m;
            
            textSize(22);
            fill(m);
            text("TOUCH HERE TO MOVE TO NEXT LEVEL", width/2+50, height-05);
        }     

        if(doraWalk.isTouching(win)) {
            gameState = "level3Play";
            reset2();
        }

        doraWalk.bounceOff(paddle3);
        doraWalk.bounceOff(paddle4);
        doraWalk.bounceOff(paddle5);
        monkey.bounceOff(fourtyfive);
        monkey.bounceOff(hundredandeight);

        lion.bounceOff(thirtytwo);
        lion.bounceOff(fourteen);

        bear.bounceOff(eleven);
        bear.bounceOff(eighteen);

        snake.bounceOff(hundredandone);
        snake.bounceOff(hundredandtwo);

        doraWalk.bounceOff(one);
        doraWalk.bounceOff(two);
        doraWalk.bounceOff(three);
        doraWalk.bounceOff(four);
        doraWalk.bounceOff(five);
        doraWalk.bounceOff(six);
        doraWalk.bounceOff(seven);
        doraWalk.bounceOff(eight);
        doraWalk.bounceOff(nine);
        doraWalk.bounceOff(ten);

        doraWalk.bounceOff(eleven);
        doraWalk.bounceOff(twelve);
        doraWalk.bounceOff(thirteen);
        doraWalk.bounceOff(fourteen);
        doraWalk.bounceOff(fifteen);
        doraWalk.bounceOff(sixteen);
        doraWalk.bounceOff(seventeen);
        doraWalk.bounceOff(eighteen);
        doraWalk.bounceOff(nineteen);
        doraWalk.bounceOff(twenty);

        doraWalk.bounceOff(twentyone);
        doraWalk.bounceOff(twentytwo);
        doraWalk.bounceOff(twentythree);
        doraWalk.bounceOff(twentyfour);
        doraWalk.bounceOff(twentyfive);
        doraWalk.bounceOff(twentysix);
        doraWalk.bounceOff(twentyseven);
        doraWalk.bounceOff(twentyeight);
        doraWalk.bounceOff(twentynine);
        doraWalk.bounceOff(thirty);

        doraWalk.bounceOff(thirtyone);
        doraWalk.bounceOff(thirtytwo);
        doraWalk.bounceOff(thirtythree);
        doraWalk.bounceOff(thirtyfour);
        doraWalk.bounceOff(thirtyfive);
        doraWalk.bounceOff(thirtysix);
        doraWalk.bounceOff(thirtyseven);
        doraWalk.bounceOff(thirtyeight);
        doraWalk.bounceOff(fourty);

        doraWalk.bounceOff(fourtyone);
        doraWalk.bounceOff(fourtytwo);
        doraWalk.bounceOff(fourtyfive);
        doraWalk.bounceOff(fourtysix);
        doraWalk.bounceOff(fourtyseven);
        doraWalk.bounceOff(fourtyeight);
        doraWalk.bounceOff(fourtynine);
        doraWalk.bounceOff(fifty);

        doraWalk.bounceOff(fiftyone);
        doraWalk.bounceOff(fiftytwo);
        doraWalk.bounceOff(fiftythree);
        doraWalk.bounceOff(fiftyfour);
        doraWalk.bounceOff(fiftyfive);
        doraWalk.bounceOff(fiftysix);
        doraWalk.bounceOff(fiftyseven);
        doraWalk.bounceOff(fiftyeight);
        doraWalk.bounceOff(fiftynine);
        doraWalk.bounceOff(sixty);

        doraWalk.bounceOff(sixty);
        doraWalk.bounceOff(sixtyone);
        doraWalk.bounceOff(sixtytwo);
        doraWalk.bounceOff(sixtythree);
        doraWalk.bounceOff(sixtyfour);
        doraWalk.bounceOff(sixtyfive);
        doraWalk.bounceOff(sixtysix);
        doraWalk.bounceOff(sixtyseven);
        doraWalk.bounceOff(sixtynine);
        doraWalk.bounceOff(seventy);

        doraWalk.bounceOff(seventy);
        doraWalk.bounceOff(seventytwo);
        doraWalk.bounceOff(seventythree);
        doraWalk.bounceOff(seventyfour);
        doraWalk.bounceOff(seventyfive);
        doraWalk.bounceOff(seventysix);
        doraWalk.bounceOff(seventyeight);
        doraWalk.bounceOff(seventynine);
        doraWalk.bounceOff(eighty);

        doraWalk.bounceOff(eighty);
        doraWalk.bounceOff(eightyone);
        doraWalk.bounceOff(eightytwo);
        doraWalk.bounceOff(eightythree);
        doraWalk.bounceOff(eightyfour);
        doraWalk.bounceOff(eightyfive);
        doraWalk.bounceOff(eightysix);
        doraWalk.bounceOff(eightyseven);
        doraWalk.bounceOff(eightyeight);
        doraWalk.bounceOff(eightynine);
        doraWalk.bounceOff(ninety);

        doraWalk.bounceOff(ninety);
        doraWalk.bounceOff(ninetyone);
        doraWalk.bounceOff(ninetytwo);
        doraWalk.bounceOff(ninetythree);
        doraWalk.bounceOff(ninetyfour);
        doraWalk.bounceOff(ninetyfive);
        doraWalk.bounceOff(ninetysix);
        doraWalk.bounceOff(ninetyeight);
        doraWalk.bounceOff(ninetynine);
        doraWalk.bounceOff(hundred);

        doraWalk.bounceOff(hundred);
        doraWalk.bounceOff(hundredandone);
        doraWalk.bounceOff(hundredandtwo);
        doraWalk.bounceOff(hundredandthree);
        doraWalk.bounceOff(hundredandfour);
        doraWalk.bounceOff(hundredandfive);
        doraWalk.bounceOff(hundredandsix);
        doraWalk.bounceOff(hundredandseven);
        doraWalk.bounceOff(hundredandeight);
        doraWalk.bounceOff(hundredandnine);
        doraWalk.bounceOff(hundredandten);

        doraWalk.bounceOff(hundredandeleven);
        doraWalk.bounceOff(hundredandtwelve);
        doraWalk.bounceOff(hundredandthirteen);
        doraWalk.bounceOff(hundredandfourteen);
        doraWalk.bounceOff(hundredandfifteen);

        if(doraWalk.isTouching(bear) || doraWalk.isTouching(snake) || doraWalk.isTouching(lion) || doraWalk.isTouching(monkey)) {
            doraWalk.x = width/2 + 470;
            doraWalk.y = height/2 - 35;
        }

    }

    if(gameState === "level3Play"){

        textSize(25);
        fill("blue");
        stroke("red");
        text("USE ARROW KEYS TO MOVE AND BEWARE OF THE SWIPERS!!! ", 20, 40);

        if(mousePressedOver(arrow)){
           stepUp(); 
         }

        swiper.bounceOff(paddle1);
        swiper.bounceOff(paddle2);

        swiper1.bounceOff(paddle1);
        swiper1.bounceOff(paddle2);

        swiper2.bounceOff(paddle1);
        swiper2.bounceOff(paddle2);

        swiper3.bounceOff(paddle1);
        swiper3.bounceOff(paddle2);

        dora.collide(paddle1);
        dora.collide(paddle2);

        if(keyDown("LEFT_ARROW")){
           dora.x = dora.x - 5;
        }

        if(keyDown("RIGHT_ARROW")){
            dora.x = dora.x + 5;
         }

         if(keyDown("UP_ARROW")){
            dora.y = dora.y - 5;
         }

         if(keyDown("DOWN_ARROW")){
            dora.y = dora.y + 5;
         }
        
        if(dora.isTouching(swiper) || dora.isTouching(swiper1) || dora.isTouching(swiper2) || dora.isTouching(swiper3)) {
            dora.x = 180;
            dora.y = 300;
        }

        if(dora.isTouching(final)){
            gameState = "level3end";
            
        }
        
        if(textTreasure == 1){
            noStroke();
            var c = color(random(0, 255), random(0, 255), random(0, 255));
            fill(c);
            textSize(30);
            text("YOUR ", width-140,height/2-250);
            textSize(25);
            text("TREASURE ", width-160,height/2-100);
            textSize(30);
            text("IS ", width-120,height/2+50);
            text("HERE ", width-140,height/2+200);
        }

    }  

    if (gameState == "level3end") {
            dora.visible      = false;
            hill.visible      = false;
            swiper.visible    = false;
            swiper1.visible   = false;
            swiper2.visible   = false;
            swiper3.visible   = false;
            final.visible     = false;
            nextLevel.visible = false;
            arrow.visible     = false;
            end = createSprite(width/2, height/2, width, height);
            end.addImage("end",endImg);
            end.scale = 2;
            
            treasure = createSprite(width/2-500, height-150, 100, 100);
            treasure.addImage("treasure", treasureImg);
            treasure.scale = 0.7;

            var a = color(random(0, 255), random(0, 255), random(0, 255));
            fill(a);
            textSize(35);
            text("YOU WON ", width/2-600, height/8);

            noStroke();
            var c = color(random(0, 255), random(0, 255), random(0, 255));
            fill(c);
            textSize(30);
            text("YOUR ", width-140,height/2-250);
            textSize(25);
            text("TREASURE ", width-160,height/2-100);
            textSize(30);
            text("IS ", width-120,height/2+50);
            text("HERE ", width-140,height/2+200);
    } 
}

function level1reset(){
    gameState        = "level1Play";
    gameOver.visible = false;
    restart.visible  = false; 
    doraRun.changeAnimation("doraRun", doraRunImg); 
    doraRun.scale    = 0.6;
    obstaclesGroup.destroyEach();
    score            = 0;
    openCard.destroy();
    l1.destroy();
    l2.destroy();
    l3.destroy();
}

//creating obstacles
function obstacle () {
    if(frameCount % 70 === 0) {
        thorn = createSprite(width,height-80,40,10);
        thorn.velocityX = -9;
        thorn.lifetime  = 150;
        thorn.addImage(thornImg);
        thorn.scale = 0.7;

        obstaclesGroup.add(thorn);
    }
}

function reset() {
    nextLevel.visible = true;
    arrow.visible     = true;
    doraRun.destroy();
    fort.destroy();
    obstaclesGroup.destroyEach();    
}

function reset2() {
    nextLevel.visible = true;
    arrow.visible     = true;
    
    snake.destroy();
    lion.destroy();
    monkey.destroy();
    bear.destroy();

    hand.destroy();
    win.destroy();

    jungle.destroy();
    monkey.destroy();
    lion.destroy();
    bear.destroy();
    snake.destroy();

    doraWalk.destroy();

    one.destroy();
    two.destroy();
    three.destroy();
    four.destroy();
    five.destroy();
    six.destroy();
    seven.destroy();
    eight.destroy();
    nine.destroy();
    ten.destroy();

    eleven.destroy();
    twelve.destroy();
    thirteen.destroy();
    fourteen.destroy();
    fifteen.destroy();
    sixteen.destroy();
    seventeen.destroy();
    eighteen.destroy();
    nineteen.destroy();
    twenty.destroy();

    twentyone.destroy();
    twentytwo.destroy();
    twentythree.destroy();
    twentyfour.destroy();
    twentyfive.destroy();
    twentysix.destroy();
    twentyseven.destroy();
    twentyeight.destroy();
    twentynine.destroy();
    thirty.destroy();

    thirtyone.destroy();
    thirtytwo.destroy();
    thirtythree.destroy();
    thirtyfour.destroy();
    thirtyfive.destroy();
    thirtysix.destroy();
    thirtyseven.destroy();
    thirtyeight.destroy();
    fourty.destroy();

    fourtyone.destroy();
    fourtytwo.destroy();
    fourtyfive.destroy();
    fourtysix.destroy();
    fourtyseven.destroy();
    fourtyeight.destroy();
    fourtynine.destroy();
    fifty.destroy();

    fiftyone.destroy();
    fiftytwo.destroy();
    fiftythree.destroy();
    fiftyfour.destroy();
    fiftyfive.destroy();
    fiftysix.destroy();
    fiftyseven.destroy();
    fiftyeight.destroy();
    fiftynine.destroy();
    sixty.destroy();

    sixtyone.destroy();
    sixtytwo.destroy();
    sixtythree.destroy();
    sixtyfour.destroy();
    sixtyfive.destroy();
    sixtysix.destroy();
    sixtyseven.destroy();
    sixtynine.destroy();
    seventy.destroy();

    seventytwo.destroy();
    seventythree.destroy();
    seventyfour.destroy();
    seventyfive.destroy();
    seventysix.destroy();
    seventyeight.destroy();
    seventynine.destroy();
    eighty.destroy();

    eightyone.destroy();
    eightytwo.destroy();
    eightythree.destroy();
    eightyfour.destroy();
    eightyfive.destroy();
    eightysix.destroy();
    eightyseven.destroy();
    eightyeight.destroy();
    eightynine.destroy();
    ninety.destroy();

    ninetyone.destroy();
    ninetytwo.destroy();
    ninetythree.destroy();
    ninetyfour.destroy();
    ninetyfive.destroy();
    ninetysix.destroy();
    ninetyeight.destroy();
    ninetynine.destroy();
    hundred.destroy();

    hundredandone.destroy();
    hundredandtwo.destroy();
    hundredandthree.destroy();
    hundredandfour.destroy();
    hundredandfive.destroy();
    hundredandsix.destroy();
    hundredandseven.destroy();
    hundredandeight.destroy();
    hundredandnine.destroy();
    hundredandten.destroy();

    hundredandeleven.destroy();
    hundredandtwelve.destroy();
    hundredandthirteen.destroy();
    hundredandfourteen.destroy(); 
    hundredandfifteen.destroy();


}

function move() {
    gameState = "level2Play";

    dummy = 1;

    snake.velocityX = 4;
    lion.velocityX = 4;
    monkey.velocityX = 4;
    bear.velocityX = 4;

    hand.visible     = true;
    win.visible      = true;
    openCard.visible = false;
    l1.visible       = false;
    l2.visible       = false;
    l3.visible       = false;

    jungle.visible   = true;
    monkey.visible   = true;
    lion.visible     = true;
    bear.visible     = true;
    snake.visible    = true;

    doraWalk.visible = true;

    one.visible   = true;
    two.visible   = true;
    three.visible = true;
    four.visible  = true;
    five.visible  = true;
    six.visible   = true;
    seven.visible = true; 
    eight.visible = true; 
    nine.visible  = true;
    ten.visible   = true;

    eleven.visible    = true;
    twelve.visible    = true;
    thirteen.visible  = true;
    fourteen.visible  = true;
    fifteen.visible   = true;
    sixteen.visible   = true;
    seventeen.visible = true;
    eighteen.visible = true;
    nineteen.visible  = true;
    twenty.visible    = true;

    twentyone.visible    = true;
    twentytwo.visible    = true;
    twentythree.visible  = true;
    twentyfour.visible   = true;
    twentyfive.visible   = true;
    twentysix.visible    = true;
    twentyseven.visible  = true;
    twentyeight.visible  = true;
    twentynine.visible   = true;
    thirty.visible       = true;

    thirtyone.visible    = true;
    thirtytwo.visible    = true;
    thirtythree.visible  = true;
    thirtyfour.visible   = true;
    thirtyfive.visible   = true;
    thirtysix.visible    = true;
    thirtyseven.visible   = true;
    thirtyeight.visible  = true;
    fourty.visible       = true;

    fourtyone.visible   = true;
    fourtytwo.visible   = true;
    fourtyfive.visible  = true;
    fourtysix.visible   = true;
    fourtyseven.visible = true;
    fourtyeight.visible = true;
    fourtynine.visible  = true;
    fifty.visible       = true;

    fiftyone.visible    = true;
    fiftytwo.visible    = true;
    fiftythree.visible  = true;
    fiftyfour.visible   = true;
    fiftyfive.visible   = true;
    fiftysix.visible    = true;
    fiftyseven.visible  = true;
    fiftyeight.visible  = true;
    fiftynine.visible   = true;
    sixty.visible       = true;

    sixtyone.visible    = true;
    sixtytwo.visible    = true;
    sixtythree.visible  = true;
    sixtyfour.visible   = true;
    sixtyfive.visible   = true;
    sixtysix.visible    = true;
    sixtyseven.visible  = true;
    sixtynine.visible   = true;
    seventy.visible     = true;

    seventytwo.visible   = true;
    seventythree.visible = true;
    seventyfour.visible  = true;
    seventyfive.visible  = true;
    seventysix.visible   = true;
    seventyeight.visible = true;
    seventynine.visible  = true;
    eighty.visible       = true;

    eightyone.visible   = true;
    eightytwo.visible   = true;
    eightythree.visible = true;
    eightyfour.visible  = true;
    eightyfive.visible  = true;
    eightysix.visible   = true;
    eightyseven.visible = true;
    eightyeight.visible = true;
    eightynine.visible  = true;
    ninety.visible      = true;

    ninetyone.visible   = true;
    ninetytwo.visible   = true;
    ninetythree.visible = true;
    ninetyfour.visible  = true;
    ninetyfive.visible  = true;
    ninetysix.visible   = true;
    ninetyeight.visible = true;
    ninetynine.visible  = true;
    hundred.visible     = true;

    hundredandone.visible   = true;
    hundredandtwo.visible   = true;
    hundredandthree.visible = true;
    hundredandfour.visible  = true;
    hundredandfive.visible  = true;
    hundredandsix.visible   = true;
    hundredandseven.visible = true;
    hundredandeight.visible = true;
    hundredandnine.visible  = true;
    hundredandten.visible   = true;

    hundredandeleven.visible   = true;
    hundredandtwelve.visible   = true;
    hundredandthirteen.visible = true;
    hundredandfourteen.visible = true; 
    hundredandfifteen.visible  = true;
    
}

function stepUp () {

  gameState        = "level3Play";
  textTreasure     = 1;

  openCard.visible = false;
  l1.visible       = false;
  l2.visible       = false;
  l3.visible       = false;

  hill.visible    = true;
  dora.visible    = true;
  swiper.visible  = true;
  swiper1.visible = true;
  swiper2.visible = true;
  swiper3.visible = true;

  final.visible   = true;

  swiper.velocityY  = 9;
  swiper1.velocityY = 9;
  swiper2.velocityY = 9;
  swiper3.velocityY = 9;
   
}

function mousePressed() {
    sound.play();
}