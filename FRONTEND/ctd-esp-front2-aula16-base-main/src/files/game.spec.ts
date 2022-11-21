import game from "../files/game";

describe("game", () => {  
  it("game should return the right object", () => {
    
    expect(game('God of War')).toStrictEqual({
      id: 1,
      name: "God of War",
      description: "First game"
    });
  });
});
