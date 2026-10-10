import BotonProductos from "../components/BotonProductos/BotonProductos"
import Carousel from "../components/Carousel/Carousel"
import GridCards from "../components/GridCards/GridCards"
import Separador from "../components/Separador/Separador"

function Inicio() {
  return (
    <>
        <Carousel/>
        <Separador/>
        <GridCards/>
        <BotonProductos/>

    </>
  )
}

export default Inicio