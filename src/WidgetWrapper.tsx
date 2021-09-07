
import './lit-elements/ApimaticWidget';

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'apimatic-widget': { 
          apiKey?: string,
          dotNet?: boolean,
          java?: boolean,
          php?: boolean,
          ruby?: boolean,
          python?: boolean,
          ts?: boolean, 
        };
      }
    }
  }

function WidgetWrapper() {
    return <div style={{display: 'inline-block'}}>
        <apimatic-widget java={true} php={true} ruby={true} dotNet={true} python={true} ts={true}></apimatic-widget>       
    </div>
}

export default WidgetWrapper;