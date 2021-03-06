# Scrivito Eventbrite
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Two React components/Scrivito widgets to get Eventbrite events from the Eventbrite REST-API. The Eventbrite widget displays a single event from Eventbrite. The Eventbrite list widget displays a teaser list with all events on your Scrivito site.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/mdwp/scrivito-eventbrite/master/eventbrite-screenshot.png)

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```shell
$ npm install scrivito-eventbrite
```

Import the widget in your javascript `src/Widgets/index.js`.

Add this line to your index.js:

```js
import "scrivito-eventbrite";
```

## Widget properties

In the widget properties you can set:
The ID of the Eventbrite event. You can find the id in the URL of an event e.g. https://www.eventbrite.de/e/seo-in-web-development-tickets-61423296734

For the teaserlist create a page and add the Eventbridelist widget. You must save a permalink which contains the word *events*

If you leave the Eventbride id empty you can even create an event in Scrivito. This event will also be displayed in the teaser list.