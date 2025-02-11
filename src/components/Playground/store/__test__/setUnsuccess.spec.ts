import plagroundReducer, {
  initialState,
  setUnsuccess,
  setCurrentStep,
  setSteps,
} from "../slices"

describe("reducer setUnsuccess", () => {
  it("check setUnsuccess", () => {
    const setCurrentStepState = plagroundReducer(initialState, setCurrentStep())

    const setStepsState = plagroundReducer(setCurrentStepState, setSteps())

    const setUnsuccessState = plagroundReducer(setStepsState, setUnsuccess())

    expect(setUnsuccessState.steps[0].success).toBe(false)
    expect(setUnsuccessState.totalUnsuccessful).toBe(1)
  })
})
