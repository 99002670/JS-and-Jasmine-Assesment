describe("Suite to test Customer class", () => {
    let customer = null;
    beforeEach(() => {
		let date = new Date(2020, 8, 28);
        customer = new Customer("Milind", "mohapatra.milind@gmail.com", "9090480487", date, 1000);
    });

    afterEach(() => {
        customer = null;
    });

    it("should check name", () => {
        expect(customer.checkName()).toBeTruthy();
	});

	it("should check email", () => {
        expect(customer.checkEmail()).toBeTruthy();
	});

	it("should check phone", () => {
        expect(customer.checkPhone()).toBeTruthy();
	});

	it("should check bill date", () => {
        expect(customer.checkBillDate()).toBeTruthy();
	});

	it("should check bill amount", () => {
        expect(customer.checkBillAmount()).toBeTruthy();
	});
});
