const Notification = ({message, success}) => {
    let notificationStyle =''
    //receives the message, if its successfull, sets it to the green box, if its not, sets it to the red box
if (message === null) {
    return null
}else{
    //used width:fit content to shorten the messagess, knew about it because of old projects i made for a previous course
const decide = success
? notificationStyle= {
    color:'green',
    fontStyle: 'italic',
    background: 'lightgray',
    fontSize: '15px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    width: 'fit-content'
}
: notificationStyle= {
    color: 'red',
    fontStyle: 'italic',
    background: 'lightgray',
    fontSize: '15px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    width: 'fit-content'
}
}

return (
    <div style = {notificationStyle}>
        {message}
    </div>
)
}

export default Notification