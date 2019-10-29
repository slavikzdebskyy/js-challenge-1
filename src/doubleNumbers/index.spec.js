import {doubleNum} from './index';

describe('doubleNum::', () => {
  it('Should multiply normal number by 2', () => {
    expect(doubleNum(4)).toEqual(8);
    expect(doubleNum(12)).toEqual(24);
    expect(doubleNum(100)).toEqual(200);
  });

  it('Should return double number as is', () => {
    expect(doubleNum(22)).toEqual(22);
    expect(doubleNum(77)).toEqual(77);
    expect(doubleNum(10011001)).toEqual(10011001);
  });
});
