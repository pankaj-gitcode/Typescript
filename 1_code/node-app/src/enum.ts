//keyboard buttons "Up, Down, Left & Right" of what type

const gameKey = (keyPressed: direction)=>keyPressed === "up"? console.log("Up key pressed"):console.log("other key pressed");

gameKey("up")

type direction= "up" | "down" | "left" | "right"

// ******************* now use enum ********************************

enum Direction {
    up,
    down,
    left,
    right
}

const gameKey2 = (keyEntered: Direction)=>keyEntered === Direction.up? console.log("UP"):console.log("Other key");
gameKey2(Direction.up)
