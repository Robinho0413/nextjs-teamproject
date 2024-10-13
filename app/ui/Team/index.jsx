import Card from "./Card.jsx";

export default function Team(data) {
  console.log("Data passed to Team component:", data);

  const employees = data.team?.employees || [];

  const employeesList = employees.length > 0 ? employees.map((employee, index) => (
    <li key={employee.id || index}> {/* Utilise employee.id si disponible, sinon index */}
      <Card
        image={employee.image}
        title={employee.title}
        subtitle={employee.subtitle}
      />
    </li>
  )) : <p>No employees available</p>; // Message si employees est vide
  console.log(employeesList);

  return (
    <section className="text-foreground m-auto max-w-6xl p-4 text-center">
      <header>
        <h2>{data.team?.title || "Team Title"}</h2>
        <h1 className="mt-3 text-4xl font-bold">{data.team?.heading || "Team Heading"}</h1>
      </header>
      <div>
        <p className="max-w-ch text-foreground mx-auto mb-8 mt-4 leading-8 text-opacity-70">
          {data.team?.description || "Team Description"}
        </p>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {employeesList} {/* Affichage de la liste des employés */}
        </ul>
      </div>
    </section>
  );
}
