const response = 'clear all mocks';
let testFunc;

describe('clearAllMocks', () => {
  beforeEach(() => {
    testFunc = jest.fn(() => response);
  });

  it('after multiple executions, calls number will increase continuity', () => {
    expect(testFunc()).toEqual(response);
    expect(testFunc).toBeCalledTimes(1);

    expect(testFunc()).toEqual(response);
    expect(testFunc).toBeCalledTimes(2);
  });

  it('calls number will reset to 0 after clear mocks', () => {
    expect(testFunc()).toEqual(response);
    expect(testFunc).toBeCalledTimes(1);

    expect(testFunc()).toEqual(response);
    expect(testFunc).toBeCalledTimes(2);

    jest.clearAllMocks();

    expect(testFunc()).toEqual(response);
    expect(testFunc).toBeCalledTimes(1);
  });
});
