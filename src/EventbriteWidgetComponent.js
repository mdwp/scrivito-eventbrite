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
      const events = currentPageUrl.includes('events');

    /*if (this.state.event === '' && Scrivito.isInPlaceEditingActive()) {
      return (
          <h4 className="text-center">
            Provide the event id in the widget properties.
          </h4>
      );
    }*/

    return (
      <div className="row">
      <div className="col col-8">
      <EventTitle name={this.state.name} />
      <EventSummary summary={this.state.summary} />
      {events ?
      <p><a href={`/${this.widget.obj().id()}`}><b>Details zur Veranstaltung</b></a></p>
      :
      <p><Scrivito.LinkTag to={"/events/aktuelle-veranstaltungen.html"}><b>Zurück zur Veranstaltungsliste</b></Scrivito.LinkTag></p>
      }
      <EventLogo  logo={this.state.logo} />
      {!events && <div className="article" dangerouslySetInnerHTML={{__html: this.state.event}} />}

      </div>
      <div className="col col-4">
      <h4>{this.state.venueName}</h4>
      <p>{this.state.venueAddress_1}<br/>
      {this.state.venueAddress_2}
      </p>
      <p><b>Beginn:</b> {formatDate(this.state.start,'dd.mm.yy HH:MM' )} <br/>
      <b>Ende:</b> {formatDate(this.state.end, 'dd.mm.yy HH:MM')}
      </p>

      <a target="_blank" className="btn btn-primary btn-block" href={this.state.url}>Anmelden</a>
      </div>
      </div>
    );
  }

}

Scrivito.provideComponent('EventbriteWidget', EventbriteComponent);





