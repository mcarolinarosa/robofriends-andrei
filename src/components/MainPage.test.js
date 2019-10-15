import { shallow } from "enzyme";
import MainPage from "./MainPage";
import React from "react";

let wrapper;
//função que vai executar antes de cada teste correr
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "wall-e",
        email: "wall_e@disney.com"
      }
    ],
    searchField: "wall-e",
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: "wall-e",
      email: "wall_e@disney.com"
    }
  ]);
});

it("filters robots correctly 2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "wall-e",
        email: "wall_e@disney.com"
      }
    ],
    searchField: "o",
    isPending: false
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});
