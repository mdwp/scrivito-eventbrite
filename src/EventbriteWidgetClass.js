import * as Scrivito from 'scrivito';

const EventbriteWidget = Scrivito.provideWidgetClass('EventbriteWidget', {
    attributes: {
        eventbriteId: 'string',
        headline: 'string',
        description: 'string',
        image: 'reference',
        body: 'html',
        location: 'string',
        organizer: 'string',
        street: 'string',
        plzCity: 'string',
        start: 'date',
        startTime: 'string',
        end: 'date',
        endTime: 'string'

    },
});

export default EventbriteWidget;