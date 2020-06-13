import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";

class Legend extends MapControl {
  createLeafletElement(props) {}

  componentDidMount() {

    const legend = L.control({ position: "topright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      let elements = [];
      const labels = ["Departamentos", "Municipios", "Fincas"];
      const colors = ["purple", "cyan", "blue"];

      for (let i = 0; i < labels.length; i++) {
        elements.push(
          '<i style="background:' +
            colors[i] +
            '"></i> ' +
            labels[i]
        );
      }
      console.log(elements);
      div.innerHTML = elements.join("<br>");
      return div;
    };

    const { map } = this.props.leaflet;
    legend.addTo(map);
  }
}

export default withLeaflet(Legend);
