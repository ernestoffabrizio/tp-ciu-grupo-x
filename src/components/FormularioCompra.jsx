export const FormularioCompra = () => {
    const [name, setName] = useState("")
    const submit = (event) => {
      event.preventDefault()
    }
    return (
    <div className="row g-4">
     <div className="col-md-7">
      <form onSubmit={event}>
      <div>
        <label htmlFor="name" className="form-label">Nombre y apellido</label>
        <input type="text" id="name" name="name" className="form-control" 
               onChange={(event) => setName(event.target.value)} />
      </div>
      </form>
     </div>
         <button type="submit" className="btn btn-primary">Enviar</button>
         <button type="button" className="btn btn-secondary">Cancelar</button>
    </div>
    

    )
  }

export default FormularioCompra