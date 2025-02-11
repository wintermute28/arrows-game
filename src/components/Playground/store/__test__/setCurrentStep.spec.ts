import plagroundReducer, { initialState, setCurrentStep } from "../slices"

describe("reducer setCurrentStep", () => {
  it("check setCurrentStep", () => {
    const setCurrentStepState = plagroundReducer(initialState, setCurrentStep())

    expect(initialState.currentStep).toBe(0)
    expect(setCurrentStepState.currentStep).toBe(1)
  })
})
