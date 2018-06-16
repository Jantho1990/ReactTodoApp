let expect = require("expect"),
  df = require("deep-freeze-strict"), // helps test that reducers are pure functions
  reducers = require("reducers");

describe("Reducers", () => {
  describe("searchTextReducer", () => {
    it("should set search text", () => {
      let action = {
        type: "SET_SEARCH_TEXT",
        searchText: "what is this"
      };

      let res = reducers.searchTextReducer(df(""), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe("showCompletedReducer", () => {
    it("should toggle showCompleted state", () => {
      let action = {
        type: "TOGGLE_SHOW_COMPLETED"
      };

      let res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    });
  });

  describe("todosReducer", () => {
    it("should add new todo", () => {
      let action = {
        type: "ADD_TODO",
        text: "Write a test"
      };

      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0].text).toBe(action.text);
    });

    it("should toggle todo", () => {
      let todos = [
        {
          id: 1,
          text: "Complete the challenge",
          completed: false,
          createdAt: 123,
          completedAt: undefined
        },
        {
          id: 2,
          text: "Eat fish",
          completed: false,
          createdAt: 124,
          completedAt: undefined
        }
      ];
      let action = {
        type: "TOGGLE_TODO",
        id: 1
      };

      let res = reducers.todosReducer(df(todos), df(action));

      // assert flipped
      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toNotBe(undefined);

      // flip it back
      let res2 = reducers.todosReducer(df(res), df(action));
      expect(res2[0].completed).toBe(false);
      expect(res2[0].completedAt).toBe(undefined);
    });

    it("should add existing todos", () => {
      let todos = [
        {
          id: "111",
          text: "anything",
          completed: false,
          completedAt: undefined,
          createdAt: 3000
        }
      ];

      let action = {
        type: "ADD_TODOS",
        todos
      };

      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it("should clear all todos", () => {
      let todos = [
        {
          id: 1,
          text: "Burp",
          completed: false,
          completedAt: undefined,
          createdAt: 500
        },
        {
          id: 2,
          text: "Belch",
          completed: false,
          completedAt: undefined,
          createdAt: 500
        }
      ];
      let action = {
        type: "REMOVE_TODOS",
        id: 1
      };

      let res = reducers.todosReducer(df(todos), df(action));

      expect(res).toEqual([]);
    });
  });
});
