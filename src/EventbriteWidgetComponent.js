import * as React from 'react';
import * as Scrivito from 'scrivito';
import axios from 'axios';
import dateFormat from "dateformat";

function EventTitle(props) {
  return <h1 className="h3">{props.name}</h1>;
}

function EventSummary(props) {
  return <p>{props.summary}</p>
}
function EventLogo(props) {
  return <img style={{maxHeight:"430px"}} src={props.logo} />
}

function EventImage(props) {
  return <Scrivito.ImageTag content={props.image} />
}

function EventDetailLink(props) {
   return (
   <p><a href={props.id}><b>Details zur Veranstaltung</b></a></p>
   )
}

function EventBackLink(props) {
  return (
    <p><Scrivito.LinkTag to={props.link}><b>Zurück zur Veranstaltungsliste</b></Scrivito.LinkTag></p>
  )
}

function EventBody(props) {
  return (
    <div className="article" dangerouslySetInnerHTML={{__html: props.body}} />
  )
}

function EventLocation(props) {
  return (
    <h4>{props.location}</h4>
  )
}

function EventOrganizer(props) {
  return (
    <h5 className="h4">{props.organizer}</h5>
  )
}

function EventAddress(props) {
  return (
    <p>{props.address1}<br/>
      {props.address2}
    </p>
  )
}

function EventDate(props) {
  return (
    <p><b>Beginn:</b> {props.start} <br/>
      <b>Ende:</b> {props.end}
    </p>
  )
}

function EventSubscribe(props) {
  return (
    <a target="_blank" className="btn btn-primary btn-block" href={props.link}>Anmelden</a>
  )
}

function formatDate(date, format) {
  // dateFormat uses Date.now if no date is given.
  if (!date) {
    return null;
  }

  return dateFormat(date, format);
}

class EventbriteComponent extends React.Component {

  constructor(props) {
    super(props);

    this.widget = this.props.widget;


    this.state = {
      event: '',
      name: '',
      url: '',
      start: '',
      end: '',
      venueName: '',
      venueAddress_1: '',
      venueAddress_2: '',
      logo: '',
      summary: '',

    }
  }

  componentDidMount() {
    const id = this.widget.get('eventbriteId');

    const key = 'EDMO3BWIFXRUIQSDP7IZ'
    var config = {
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      }
    };

    const url = 'https://www.eventbriteapi.com/v3/events/' + id +'/?token=' + key + '&expand=venue'

    axios.get(url)
      .then(res => {


        const response = res.data;

        const event = response.description.html;
        const name = response.name.text;
        const url = response.url;
        const start = response.start.local;
        const end = response.end.local;
        const venueName = response.venue.name;
        const venueAddress_1 = response.venue.address.localized_multi_line_address_display[0];
        const venueAddress_2 = response.venue.address.localized_multi_line_address_display[1];
        const logo = response.logo.original.url;
        const summary = response.summary;


        this.setState({
          event,
          name,
          url,
          start,
          end,
          venueAddress_1,
          venueAddress_2,
          venueName,
          logo,
          summary,

        });

      })
  }



  render() {
      const currentPage = Scrivito.currentPage();
      if (!currentPage) return;

      const currentPageUrl = Scrivito.urlFor(currentPage);
      const events = currentPageUrl.includes('events') || Scrivito.Obj.root().path();

    /*if (this.state.event === '' && Scrivito.isInPlaceEditingActive()) {
      return (
          <h4 className="text-center">
            Provide the event id in the widget properties.
          </h4>
      );
    }*/

    return (
      <div>
      { this.widget.get('eventbriteId') ?
      <div className="row">
      <div className="col col-8">
      <EventTitle name={this.state.name} />
      <EventSummary summary={this.state.summary} />
      {events ?
      <EventDetailLink id={`/${this.widget.obj().id()}`} />

      :
      <EventBackLink link={"/events/aktuelle-veranstaltungen.html"} />
      }
      <EventLogo  logo={this.state.logo} />

      {!events && <EventBody body={this.state.event} />}

      </div>
      <div className="col col-4">
        <EventLocation location={this.state.venueName} />
        <EventAddress address1={this.state.venueAddress_1} address2={this.state.venueAddress_2} />
        <EventDate start={formatDate(this.state.start,'dd.mm.yy HH:MM' )} end={formatDate(this.state.end, 'dd.mm.yy HH:MM')}/>
        <EventSubscribe link={this.state.url} />
      </div>
      </div>
      :
      <div className="row">
        <div className="col col-8">
      <EventTitle name={this.widget.get('headline')} />
      <EventSummary summary={this.widget.get('description')} />
      {events ?
      <EventDetailLink id={`/${this.widget.obj().id()}`} />

      :
      <EventBackLink link={"/events/aktuelle-veranstaltungen.html"} />
      }
      <EventImage  image={this.widget.get('image')} />

      {!events && <EventBody body={this.widget.get('body')} />}

      </div>
      <div className="col col-4">
        <EventLocation location={this.widget.get('location')} />
        <EventOrganizer organizer={this.widget.get('organizer')} />
        <EventAddress address1={this.widget.get('street')} address2={this.widget.get('plzCity')} />
        <EventDate start={formatDate(this.widget.get('start'),'dd.mm.yy ') + this.widget.get('startTime')} end={formatDate(this.widget.get('end'), 'dd.mm.yy ') + this.widget.get('endTime')}/>

      </div>
      </div>


      }
      </div>
    );
  }

}

Scrivito.provideComponent('EventbriteWidget', EventbriteComponent);





