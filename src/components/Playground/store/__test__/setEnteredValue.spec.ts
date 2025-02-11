import { ARR_ARROW_CODES } from "../../constants"
import plagroundReducer, {
  initialState,
  setEnteredValue,
  setCurrentStep,
  setSteps,
} from "../slices"

describe("reducer setEnteredValue", () => {
  it("check enteredValue", () => {
    const enteredValue = ARR_ARROW_CODES[0]
    const setCurrentStepState = plagroundReducer(initialState, setCurrentStep())
    const setStepsState = plagroundReducer(setCurrentStepState, setSteps())
    const setEnteredValueState = plagroundReducer(
      setStepsState,
      setEnteredValue(enteredValue),
    )

    expect(setStepsState.steps[0].enteredValue).toEqual(null)
    expect(setEnteredValueState.steps[0].enteredValue).toEqual(enteredValue)
  })

  it("check totalSuccessful and totaUnsSuccessful", () => {
    const setCurrentStepState = plagroundReducer(initialState, setCurrentStep())
    const setStepsState = plagroundReducer(setCurrentStepState, setSteps())
    const setEnteredValueState = plagroundReducer(
      setStepsState,
      setEnteredValue(setStepsState.steps[0].currentValue),
    )

    expect(setStepsState.totalSuccessful).toBe(0)
    expect(setStepsState.totalUnsuccessful).toBe(0)

    expect(setEnteredValueState.totalSuccessful).toBe(1)
    expect(setEnteredValueState.totalUnsuccessful).toBe(0)
  })
})
