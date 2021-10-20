import React from 'react'
import QRCode from 'qrcode.react'
import { useFirestore } from '../Contexts/FirestoreContext'

const QRGenerator = () => {
  const { currentClientId } = useFirestore()
  const url = `https://child-traqr.netlify.app/${currentClientId}`
  console.log(url)
  return (
    <div className='h-screen w-screen p-10'>
      <div className='flex items-center justify-evenly h-full w-full'>
        <div className='flex flex-col items-start gap-6 font-sora'>
          <p className='text-2xl'>Generated QR Code</p>
          <p>This QR code will be embedded in your child's clothes</p>
          <div className='flex gap-4'>
            <button className='bg-newblue hover:bg-newdarkblue px-8 py-3 text-lg text-white rounded-md'>Shop now</button>
            <button className='bg-newblue hover:bg-newdarkblue px-8 py-3 text-lg text-white rounded-md'>Update Details</button>
          </div>
        </div>
        <QRCode
          value={url}
          size={380}
          id='qr-gen'
          level='H'
        />
      </div>
    </div>
  )
}

export default QRGenerator
