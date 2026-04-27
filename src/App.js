const { createElement: h } = React;

function Header() {
  const navItems = ["Orchard", "Harvest", "Visits", "Contact"];

  return h(
    "header",
    { className: "site-header" },
    h(
      "a",
      { className: "brand", href: "#top", "aria-label": "Cherry Vale home" },
      h("span", { className: "brand-mark", "aria-hidden": "true" }),
      h("span", null, "Cherry Vale")
    ),
    h(
      "nav",
      { className: "nav", "aria-label": "Primary navigation" },
      navItems.map((item) =>
        h("a", { key: item, href: `#${item.toLowerCase()}` }, item)
      )
    )
  );
}

function OrchardVisual() {
  return h(
    "div",
    { className: "orchard-visual", "aria-label": "Stylized cherries in orchard rows" },
    h(
      "div",
      { className: "orchard-rows", "aria-hidden": "true" },
      Array.from({ length: 5 }, (_, index) => h("span", { key: index }))
    ),
    h(
      "div",
      { className: "cherry-cluster cherry-cluster-main", "aria-hidden": "true" },
      h("span", { className: "cherry cherry-red cherry-one" }),
      h("span", { className: "cherry cherry-dark cherry-two" }),
      h("span", { className: "cherry cherry-blossom cherry-three" })
    ),
    h(
      "div",
      { className: "leaf-stem", "aria-hidden": "true" },
      h("span", { className: "stem" }),
      h("span", { className: "leaf" }),
      h("span", { className: "cherry cherry-red cherry-four" }),
      h("span", { className: "cherry cherry-gold cherry-five" })
    ),
    h(
      "div",
      { className: "harvest-badge" },
      h("span", null, "Peak"),
      h("strong", null, "June"),
      h("small", null, "basket season")
    )
  );
}

function Hero() {
  return h(
    "main",
    { className: "hero", id: "top" },
    h(
      "section",
      { className: "hero-copy", "aria-labelledby": "hero-title" },
      h("p", { className: "eyebrow" }, "Fresh from the lower orchard"),
      h(
        "h1",
        { id: "hero-title" },
        "Sun-warmed cherries, picked at their perfect snap."
      ),
      h(
        "p",
        { className: "hero-subcopy" },
        "A small family orchard growing bright, firm cherries for weekend baskets, local kitchens, and pick-your-own summer mornings."
      ),
      h(
        "div",
        { className: "hero-actions" },
        h("a", { className: "button button-primary", href: "#reserve" }, "Reserve a basket"),
        h("a", { className: "button button-link", href: "#harvest" }, "See harvest dates")
      )
    ),
    h(OrchardVisual)
  );
}

function ProofBand() {
  const items = [
    {
      className: "proof-card proof-pink",
      label: "01 / Picked daily",
      text: "Harvested before noon for firm, bright fruit.",
    },
    {
      className: "proof-card proof-mist",
      label: "02 / Weekend visits",
      text: "Shaded rows, tasting tables, and family baskets.",
    },
    {
      className: "proof-card proof-dark",
      label: "03 / Local supply",
      text: "Small-batch boxes for cafes and neighborhood shops.",
    },
  ];

  return h(
    "section",
    { className: "proof-band", id: "orchard", "aria-label": "Orchard highlights" },
    items.map((item) =>
      h(
        "article",
        { className: item.className, key: item.label },
        h("p", { className: "proof-label" }, item.label),
        h("h2", null, item.text)
      )
    )
  );
}

function App() {
  return h(
    "div",
    { className: "page-shell" },
    h(Header),
    h(Hero),
    h(ProofBand)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
