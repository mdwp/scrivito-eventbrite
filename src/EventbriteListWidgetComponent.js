import * as React from "react";
import * as Scrivito from "scrivito";



class EventbriteListComponent extends React.Component {
  constructor(props) {
    super(props);


     this.state = {
      references: [],
   };


}

  componentDidMount() {
    Scrivito.load(() => {
      let ref = [];

       ref = [...Scrivito.Obj.where('_objClass', 'equals', 'EventbriteWidget').order('_createdAt', 'desc')];


      return(ref);
    }).then((ref ) => {

         this.setState({references: ref});

    })

  }


  render() {


    return (


      <div>
      {this.state.references.map((item, index) => (
        <div key={index}>
          <Scrivito.ContentTag tag="div" content={item} attribute="body" />
        </div>
      ))}
    </div>

    );
  }
}

Scrivito.provideComponent('EventbriteListWidget', EventbriteListComponent);
