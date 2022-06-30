import LoadingScreen from "../../containers/loadingScreen/loadingScreen";

describe("loadingScreen.cy.tsx", () => {
  it("mounts", () => {
    cy.mount(<LoadingScreen />);
  });
});
