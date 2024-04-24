export function nameTabs(title, labels) {
  const tabs = labels.map((label) => ({
    name: title + label.name,
    label: label.label,
  }));

  return tabs;
}
