import FunFact from "../../DataTypes/ProductData.type"

const funFactsData: FunFact[] = [
  { id: 1, text: "Was first released in 2013" },
  { id: 2, text: "Was originally created by Jordan Walke" },
  { id: 3, text: "Has well over 200K stars on GitHub" },
  { id: 4, text: "Is maintained by Meta" },
  { id: 5, text: "Powers thousands of enterprise apps" },
];

function MainBody(): JSX.Element {
  return (
    <main className="bg-[#282D35] text-white px-8 py-12 max-w-5xl mx-auto rounded-lg">
      <h1 className="text-4xl font-bold mb-8">
        Fun facts about React
      </h1>

      <ol className="list-disc pl-6 space-y-4 text-lg">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </main>
  );
}

export default MainBody;
