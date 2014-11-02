var expect = require('chai').expect,
  math = require('./../math');

describe('add', function () {
  it('should return 3 when passed the params (1, 2)', function () {
    expect(math.add(1, 2)).to.equal(3);

  });

  it('should return 13 when passed the params (4,9)', function () {
    expect(math.add(4, 9)).to.equal(13);
  })
});

describe('subtract', function () {
  it('should return -1 when passed the params (1, 2)', function () {
    expect(math.subtract(1, 2)).to.equal(-1);
  });

  it('should return 10 when passed the params (20,10)', function () {
    expect(math.subtract(10, 2)).to.equal(8);
  })
});

describe('double', function () {
  it('should double the numbers', function () {
    expect(math.double(1)).to.equal(2);
  });
  it('should return 40 when passed the param 20', function () {
    expect(math.double(20)).to.equal(40);
  })
});


describe('multiply', function () {
  it('should return 4 when passed (1,4)', function () {
    expect(math.multiply(1,4)).to.equal(4);
  });
  it('should return 25 when passed (5,5)', function () {
    expect(math.multiply(5,5)).to.equal(25);
  })
});
