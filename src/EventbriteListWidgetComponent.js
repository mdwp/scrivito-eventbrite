import * as React from "react";
import * as Scrivito from "scrivito";


Scrivito.provideComponent("EventbriteListWidget", ({ widget }) => {

  const references = [...Scrivito.Obj.where('_objClass', 'equals', 'EventbriteWidget').order('_lastChanged', 'desc')];

  if (!references.length && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide a reference to another page in the widget properties.
        </h4>
    );
  }

  return (
    <div>

    {[...references].map((item, index) => (


      <div key={index}>

      <Scrivito.ContentTag tag="div"  content={item} attribute="body" />
      </div>


    ))}
    </div>
    );
    }
);




