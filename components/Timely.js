import { maxHeight } from "tailwindcss/defaultTheme";

export default function Timely() {
  return (
    <div>
      <iframe src="https://bookings.gettimely.com/fluffsandfiles/bb/book" scrolling="no" id="timelyWidget" style={{ width: '350px', maxWidth: 'calc( 100vw - 2rem )', height: 'calc( 100vh - 8rem )', maxHeight: '600px', border: 'none' }}></iframe>
    </div>
  )
}