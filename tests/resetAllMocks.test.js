const response = 'clear all mocks';
let testFunc;

describe('clearAllMocks', () => {
  beforeEach(() => {
    testFunc = jest.fn(() => response);
  });

  it('after multiple executions, calls number will increase continuity. And the function will still be same', () => {
    expect(testFunc()).toEqual(response);
    expect(testFunc).toBeCalledTimes(1);

    expect(testFunc()).toEqual(response);
    expect(testFunc).toBeCalledTimes(2);
  });

  it('calls number will reset to 0 and remove the implementation after reset mocks', () => {
    expect(testFunc()).toEqual(response);
    expect(testFunc).toBeCalledTimes(1);

    expect(testFunc()).toEqual(response);
    expect(testFunc).toBeCalledTimes(2);

    jest.resetAllMocks();

    expect(testFunc()).toBeUndefined();
    expect(testFunc).toBeCalledTimes(1);
  });
});
