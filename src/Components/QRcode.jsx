import {QRCodeCanvas} from 'qrcode.react'; //importing component from QR library

function QRcode() {
    return(
        <div>
            <div className='scan'>
            <QRCodeCanvas value="https://tailwindcss.com/" size={330} />,  {/* here the "value" is the prop. You can give any link here. */}
            </div>
        </div>
    );
}

export default QRcode;