INSERT INTO departments (name)
    VALUES
    ('Sales'),
    ('Accounting'),
    ('Warehouse'),
    ('HR');

INSERT INTO roles (title, salary, department_name)
    VALUES
    ('Lead Salesman', 50000, 'Sales'),
    ('Sr Salesman', 40000, 'Sales'),
    ('Jr Salesman', 30000, 'Sales'),
    ('Accountant Manager', 45000, 'Accounting'),
    ('Accountant', 35000, 'Accounting'),
    ('Warehouse Supervisor', 45000, 'Warehouse'),
    ('Warehouse Clerk', 37000, 'Warehouse'),
    ('HR Manager', 47000, 'Human Resources'),
    ('HR Representative', 40000, 'Human Resources');

INSERT INTO employees (first_name, last_name, employee_department)
    VALUES
    ('Dwight K.', 'Schrute', 'Sales'),
    ('James', 'Halpert', 'Sales'),
    ('Andrew', 'Bernard', 'Sales'),
    ('Angela', 'Martin', 'Accounting'),
    ('Kevin', 'Malone', 'Accounting'),
    ('Darryl', 'Philbin', 'Warehouse'),
    ('Roy', 'Smith', 'Warehouse'),
    ('Toby', 'Flenderson', 'HR'),
    ('Holly', 'Flax', 'HR');
