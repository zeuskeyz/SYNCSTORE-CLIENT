import { Toaster } from "react-hot-toast"

export const Alerter = () => {
    return (
        <>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: { border: '1px solid #e65100', color: '#e65100', background:'transparent' },
                    iconTheme: { primary: '#e65100', secondary: 'white' }
                }}
            />
        </>
    )
}
