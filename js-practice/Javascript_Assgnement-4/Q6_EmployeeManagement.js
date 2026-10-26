(() => {
    // Employees store monthly salary; bonuses update that salary before annualizing it.
    class Employee {
        constructor(id, name, department, salary) {
            this.id = id;
            this.name = name;
            this.department = department;
            this.salary = salary;
        }

        getAnnualSalary() {
            return this.salary * 12;
        }

        applyBonus(percent) {
            this.salary += this.salary * percent / 100;
        }
    }

    const employees = [
        new Employee(1, "Asha", "Engineering", 78000),
        new Employee(2, "Rahul", "Design", 65000),
        new Employee(3, "Mina", "Marketing", 59000),
        new Employee(4, "Dev", "Finance", 72000),
        new Employee(5, "Sara", "Operations", 61000)
    ];

    employees.forEach(employee => employee.applyBonus(5));
    const annualPayroll = employees.map(employee => ({
        ID: employee.id,
        Name: employee.name,
        Department: employee.department,
        AnnualSalary: employee.getAnnualSalary().toFixed(2)
    }));
    const totalAnnualPayout = employees.reduce(
        (total, employee) => total + employee.getAnnualSalary(),
        0
    );

    console.table(annualPayroll);
    console.log(`Total annual payout after bonus: Rs. ${totalAnnualPayout.toFixed(2)}`);
})();