import plagroundReducer, {
  initialState,
  setSteps,
  setCurrentStep,
} from "../slices"

describe("reducer setSteps", () => {
  it("check setSteps", () => {
    const setCurrentStepState = plagroundReducer(initialState, setCurrentStep())

    const setStepsState = plagroundReducer(setCurrentStepState, setSteps())

    const firstStep = {
      step: 1,
      currentValue: setStepsState.steps[0].currentValue,
      enteredValue: null,
      success: null,
    }

    expect(initialState.steps.length).toEqual(0)
    expect(setStepsState.steps.length).toEqual(1)
    expect(setStepsState.steps[0]).toEqual(firstStep)
  })
})
