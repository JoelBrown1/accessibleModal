import "./App.css";
import Text from "./components/Text";
import Modal from "./components/Modal/Modal";

const mockTimelineContent = [
  {
    feature: "100% Recyclable Hot Beverage Lids",
    date: "May 2019",
    copy:
      "Introducing a hot beverage lid made from polypropylene, a material that is 100% recyclable and accepted in 95% of curbside recycling programs across Canada.",
    imgSrc: "",
  },
  {
    feature: "Strawless Cold Beverage Lids",
    date: "July 2019",
    copy:
      "Iced cold beverages in our Canadian and American locations will be served with a strawless lid in order to eliminate the need for straws.",
    imgSrc: "",
  },
  {
    feature: "100% Recycled Fiber Takeaway Bags",
    date: "Nov 2019",
    copy:
      "Launched takeaway bags made of 100% recycled fiber paper in Canada and the United States.",
    imgSrc: "",
  },
  {
    feature: "Wooden Stir Sticks",
    date: "Dec 2019",
    copy:
      "Compostable stir sticks are available across Canada and the United States and are expected to eliminate 168 million plastic stir sticks annually.",
    imgSrc: "",
  },
  {
    feature: "Everyday Reusable Cups",
    date: "June 2020",
    copy:
      "These everyday reusable cups are now available at participating restaurants in Canada.",
    imgSrc: "",
  },
  {
    feature: "Loop Partnership (Pilot)",
    date: "Oct 2020",
    copy:
      "Exciting new partnership announced with zero-waste platform Loop to pilot a new reusable and returnable cup system for beverages on the go.",
    imgSrc: "",
  },
  {
    feature: "30% Recycled Material Cup (Pilot)",
    date: "Oct 2020",
    copy:
      "We’ve expanded this new cup trial in Calgary and Toronto which focuses on developing a new Tim Hortons coffee cup made with 30% recycled material.",
    imgSrc: "",
  },
  {
    feature: "Compostable Cup Liner (Pilot)",
    date: "Nov 2020",
    copy:
      "Pilot project launched at select Vancouver restaurants with the aim of introducing a paper cup with a recyclable and compostable liner. We continue to work with key industry and government stakeholders to ensure the cup meets municipality regulations.",
    imgSrc: "",
  },
  {
    feature: "No More Double Cupping",
    date: "Nov 2020",
    copy:
      "Tim Hortons will no longer double cup at Canadian restaurants, so grab a recyclable sleeve instead! By eliminating double cupping, Tim Hortons is estimated to remove more than 2,700 tonnes of paper cups over the next year.",
    imgSrc: "",
  },
  {
    feature: "100% Recycled Fibre Napkins",
    date: "Jan 2021",
    copy:
      "Our new napkins are made of 100% recycled fibre, including 90% post-consumer content, and use 25% less material than before. This change for restaurants in Canada and the United States will save an estimated 900 tonnes of paper over the next year.",
    imgSrc: "",
  },
  {
    feature: "Recyclable Sandwich Packaging",
    date: "Jan 2021",
    copy:
      "New paper-based wrappers have been rolled out for sandwiches and bagels that are fully recyclable, while also cutting the use of paper by 17% annually. The new packaging, expected to be in restaurants in January, is estimates to reduce more than 460 tonnes of plastic over the next year.",
    imgSrc: "",
  },
  {
    feature: "Removing Plastic Straws",
    date: "Apr 2021",
    copy:
      "Plastic straws will be phased out of Canadian restaurants, removing more than 300 million single use plastics in the next year.",
    imgSrc: "",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React accessible modal example</p>
        {mockTimelineContent.map((timeEvent, index) => {
          return (
            <Modal
              key={`timeEvent_${index}`}
              title={timeEvent.date}
              content={timeEvent.copy}
            />
          );
        })}

        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
      </header>
    </div>
  );
}

export default App;
