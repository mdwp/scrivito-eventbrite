import * as Scrivito from 'scrivito';

const EventbriteWidget = Scrivito.provideWidgetClass('EventbriteWidget', {
    attributes: {
        eventbriteId: 'string',
    },
});

export default EventbriteWidget;