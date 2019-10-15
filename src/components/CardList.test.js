import { shallow } from "enzyme";
import CardList from "./CardList";
import React from "react";

it("expect to render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Jon Snow",
      username: "kingOfTheNorth23",
      email: "jon_snow@got.com"
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
