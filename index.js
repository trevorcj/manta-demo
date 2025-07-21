const employeeList = document.querySelector(".employees");

const getEmployees = async function () {
  try {
    const response = await fetch(
      `https://api.mantahq.com/api/workflow/manta-demo/demo/get-employees`
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || `HTTP error! status: ${response.status}`
      );
    }

    console.log(result);

    const { data } = result;
    const li = document.createElement("li");
    data.forEach((employee) => {
      li.innerHTML +=
        `<li>(${employee.user_id}) ${employee.name} (${employee.age}) (${
          employee.gender
        }) is our ${employee.title} (${employee.department} department) in ${
          employee.unit
        } unit - ${
          employee.gender.toLowerCase() === "male" ? "He " : "She "
        } is based in ${employee.city}, ${employee.country}, and earns ${
          employee.annual_salary
        } annually.</li> <br />` || result.message;
    });

    employeeList.appendChild(li);
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};
getEmployees();
