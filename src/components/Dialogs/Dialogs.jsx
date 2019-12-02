import React                 from 'react';
import s                     from './Dialogs.module.css';
import DialogItem            from "./DialogItem/DialogItem";
import {AddMessageFormRedux} from "./DialogsForm/DialogsForm.jsx";
import Message               from "./Message/Message";


const Dialogs = (props) => {
   let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
   let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

   let addNewMessage = (values) => {
      props.sendMessage(values.newMessageText)      
   }
   
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <h4>Dialogs</h4>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            <div className={s.messagesWrap}>
               {messagesElements}
            </div>           

            <AddMessageFormRedux onSubmit={addNewMessage}/>
         </div>

      </div>
   );
}


export default Dialogs;