import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("EventbriteSliderWidget", {
  title: "Eventbrite slider list",
  attributes: {
    count: {
      title: "Number of slides",
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

