import Video from "../../components/video/video";
import { mount } from "cypress/react";

describe("video.cy.ts", () => {
  it("mounts", () => {
    mount(<Video />);
  });
});
