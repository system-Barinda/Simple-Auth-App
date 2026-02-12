import type { FunFact } from "../../DataTypes/types";

const funFactsData: FunFact[] = [
  { id: 1, text: "Was first released in 2013" },
  { id: 2, text: "Was originally created by Jordan Walke" },
  { id: 3, text: "Has well over 200K stars on GitHub" },
  { id: 4, text: "Is maintained by Meta" },
  { id: 5, text: "Powers thousands of enterprise apps, including mobile apps" },
];

function MainBody() {
  return (
    <main className="bg-[#282D35] text-white px-8 py-12 max-w-5xl mx-auto rounded-lg">
      <h1 className="text-4xl font-bold mb-8">Fun facts about React</h1>

      <ol className="list-disc pl-6 space-y-4 text-lg">
        {funFactsData.map((fact) => (
          <li key={fact.id}>{fact.text}</li>
        ))}
      </ol>
    </main>
  );
}

export default MainBody;
