it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000, years: 5, rate: 3})).toEqual('2500.00');
  expect(calculateMonthlyPayment({amount: 30000, years: 6, rate: 4})).toEqual('10000.00');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 10000, years: 5, rate: 3})).not.toEqual('2500');
  expect(calculateMonthlyPayment({amount: 10000, years: 5, rate: 3})).not.toEqual('2500.000');
});
