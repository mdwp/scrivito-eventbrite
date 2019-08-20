import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('EventbriteWidget', {
    title: 'Eventbrite',
    attributes: {
        eventbriteId: {
            title: "ID",
            description: "ID of the event"
        },
        headline: {
            title: "Headline"
        },
        description: {
            title: "Description"
        },
        image: {
            title: "Image"
        },
        body: {
            title: "Body"
        },
        location: {
            title: "Location"
        },
        organizer: {
            title: "Organizer"
        },
        street: {
            title: "Street/Nr."
        },
        plzCity: {
            title: "PLZ/City"
        },
        start: {
            title: "Start Date"
        },
        startTime: {
            title: "Start Time",
            description: "Format: HH:MM 18:00"
        },
        end: {
            title: "End Date"
        },
        endTime: {
            title: "End Time",
            description: "Format: HH:MM 20:30"
        },

    },


    properties: [
        'eventbriteId',
        'ikt',
        'headline',
        'description',
        'image',
        'body',
        'location',
        'organizer',
        'street',
        'plzCity',
        'start',
        'startTime',
        'end',
        'endTime'
    ],

    initialContent: {
        ikt: 'false',
    },
});