import { CancelRounded, Workspaces } from '@mui/icons-material'
import { Header } from '../components/Header'
import { Navigation } from '../components/Navigation'
import { SquadsToAdd } from '../components/SquadsToAdd'
import { useParams } from 'react-router-dom'

export const UserToSquad = () => {
    const {id} = useParams()
    const goBack = { link: `/user/${id}`, name: 'Cancel', icon: <CancelRounded/> }
    const addGroup = { link: '/new-squad', name: 'New Squad', icon: <Workspaces /> }
    
    return (
        <>
            <div className="text-end ms-5 ps-5">
                <Navigation />
                <div className="text-center ms-5 px-5">
                    <div className='container my-3 px-5 text-end'> <Header addGroup={addGroup} goBack={goBack} /> </div>
                    <div className='container my-5 p-5'> <SquadsToAdd /> </div>
                </div>
            </div>
        </>
    )
}
