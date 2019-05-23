import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("EventbriteListWidget", {
  title: "Eventbrite list",
  attributes: {
    count: {
      title: "Number of records",
      description: "Default: 6"
    },


},
properties: [
    'count'
],
initialContent: {
    count: 6,

  },
});

