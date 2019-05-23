import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('EventbriteWidget', {
    title: 'Eventbrite',
    attributes: {
        eventbriteId: {
            title: "ID",
            description: "ID of the event"
        },

    },

    properties: [
        'eventbriteId',
    ],
});