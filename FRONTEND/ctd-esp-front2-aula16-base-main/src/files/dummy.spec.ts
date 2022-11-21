import dummy from "../files/dummy";

describe("dummy", () => {
  describe("when shouldTrigger is false", () => {
    it("should not call callback", () => {
      const shouldTriggerCallback = false
      const callback = () => {
        console.log("Chamou Callback")
      }
      //expect(dummy(shouldTriggerCallback, callback)).

    });
  });
  describe("when shouldTrigger is true", () => {
    it("should call callback", () => {

    });
  });
});
