import plagroundReducer, {
  initialState,
  setCurrentStep,
  resetStore,
} from "../slices"

describe("reducer resetStore", () => {
  it("check resetStore", () => {
    const setCurrentStepState = plagroundReducer(initialState, setCurrentStep())

    const resetStoreState = plagroundReducer(setCurrentStepState, resetStore())

    expect(resetStoreState).toEqual(initialState)
  })
})
