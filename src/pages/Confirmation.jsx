import React from 'react'
import EmiHeader from '../components/EmiHeader'
import TransactionHeader from '../components/TransactionHeader'
import TwoFACard from '../components/TwoFACard'
import VerificationCard from '../components/VerificationCard'

function Confirmation() {
    
    return (
        <div className='confirmation__container'>
            <TransactionHeader/>
            <EmiHeader/>
            <h2 className="confirmation__text">Transaction Confirmation</h2>
            <div>
                <VerificationCard/>
            </div>
            
        </div>
    )
}

export default Confirmation
