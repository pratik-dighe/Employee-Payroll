function EmployeeList({ employees }) {
    return (
      <div>
        <h2>Employee List</h2>
        {employees.length ? (
          <ul>
            {employees.map((emp, idx) => (
              <li key={idx}>{emp.name} - {emp.position} - ₹{emp.salary}</li>
            ))}
          </ul>
        ) : (
          <p>No employees yet.</p>
        )}
      </div>
    );
  }
  export default EmployeeList;
  