const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, "this is a child element")
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
