import plagroundReducer, { initialState } from "../slices"

describe("initial state", () => {
  it("check initial state", () => {
    const state = plagroundReducer(undefined, { type: "unknown" })

    expect(state).toEqual(initialState)
  })
})
