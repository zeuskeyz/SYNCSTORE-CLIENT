import { ConfirmDelete } from '../components/ConfirmDelete'
import { Navigation } from '../components/Navigation'

export const UserDelete = () => {
  return (
    <>
        <div className='container'>
        <Navigation/>
        </div>
        <div className="container d-flex justify-content-center">
            <ConfirmDelete/>
        </div>

    </>
  )
}
