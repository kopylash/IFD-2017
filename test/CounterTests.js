import Counter from '../src/Counter';

describe('Counter', () => {
  it('has 0 count at the beginning', () => {
    const counter = new Counter();
    expect(counter.getCount()).to.eql(0);
  });

  it('increases count', () => {
    const counter = new Counter();
    counter.increase();
    expect(counter.getCount()).to.eql(1);
  });
});
