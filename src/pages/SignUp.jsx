import { Navigation } from "../components/Navigation"
import { SignUpForm } from "../components/SignUpForm"

export const SignUp = () => {
    return (
        <>
            <div className="text-end m-5 px-5 py-3">
                <Navigation/>
                <div className="text-center ms-5 px-5">
                <SignUpForm />
                </div>
            </div>
        </>
    )
}
