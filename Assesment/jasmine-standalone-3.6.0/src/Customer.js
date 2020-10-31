class Customer {
    constructor(name, email, phone, billDate, billAmount) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.billDate = billDate;
        this.billAmount = billAmount;
    }

    checkName() {
		let regEx = new RegExp("^[a-zA-Z]+$");
		if (this.name.length < 5 || !regEx.test(this.name)) {
			return false;
		} else {
			return true;
		}
	}

    checkEmail() {
        let regEx = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        if (!regEx.test(this.email)) {
            return false;
        } else {
            return true;
        }
    }

    checkPhone() {
		// let regEx = new RegExp("*([0-9]!*){10,}$");
		let regEx = new RegExp("^[0-9]{10}$");
        if (!regEx.test(this.phone)) {
            return false;
        } else {
            return true;
        }
    }

    checkBillDate() {
        let currDate = new Date();
        currDate.setMonth(currDate.getMonth() - 1);

        if (this.billDate > currDate) {
            return false;
        } else {
            return true;
        }
	}

    checkBillAmount() {
		if (this.billAmount < 500) {
			return false;
		} else {
			return true;
		}
	}
}
